import { COUNTRY_LANG, DOCS, LANGS, LANG_COOKIE } from "../i18n/config";

/**
 * Inline script for pages without a language in the URL ("/", "/terms/", "/aml/", 404…).
 * Picks the language (first match wins) and redirects to /<lang>/<slug>/:
 *   1. ?lang=ru|en|pt
 *   2. cookie bp_lang (manual choice in the language switcher)
 *   3. visitor country by IP (client-side lookup, GitHub Pages has no server):
 *      Portuguese-speaking countries → pt, Russia/CIS → ru, others → en
 *   4. browser language if the country is unknown: ru* → ru, pt* → pt, otherwise en
 * `slug` is the target document ("" = home). On the root page, legacy SPA links like "/?/terms" are honoured.
 */
export function langDetectScript(slug: string): string {
  const cfg = {
    slug,
    langs: LANGS,
    docs: DOCS,
    cookie: LANG_COOKIE,
    pt: COUNTRY_LANG.pt,
    ru: COUNTRY_LANG.ru,
  };
  return `(function(c){
  var loc = window.location, params = new URLSearchParams(loc.search), slug = c.slug;
  if (!slug && loc.search.indexOf("?/") === 0) {
    var legacy = loc.search.slice(2).split(/[/?&]/)[0];
    if (c.docs.indexOf(legacy) !== -1) slug = legacy;
    params = new URLSearchParams();
  }
  function valid(l) { return c.langs.indexOf(l) !== -1; }
  function go(l) {
    params.delete("lang");
    var qs = params.toString();
    loc.replace("/" + l + "/" + (slug ? slug + "/" : "") + (qs ? "?" + qs : "") + loc.hash);
  }
  function byCountry(cc) {
    cc = String(cc || "").toUpperCase();
    if (c.pt.indexOf(cc) !== -1) return "pt";
    if (c.ru.indexOf(cc) !== -1) return "ru";
    return "en";
  }
  function byBrowser() {
    var l = ((navigator.languages && navigator.languages[0]) || navigator.language || "").toLowerCase();
    return l.indexOf("ru") === 0 ? "ru" : l.indexOf("pt") === 0 ? "pt" : "en";
  }
  var q = params.get("lang");
  if (valid(q)) return go(q);
  var m = document.cookie.match(new RegExp("(?:^|;\\\\s*)" + c.cookie + "=([a-z]{2})"));
  if (m && valid(m[1])) return go(m[1]);

  var cached = null;
  try { cached = sessionStorage.getItem("bp_country"); } catch (e) {}
  if (cached) return go(cached === "??" ? byBrowser() : byCountry(cached));

  var done = false;
  function finish(cc) {
    if (done) return;
    done = true;
    try { sessionStorage.setItem("bp_country", cc || "??"); } catch (e) {}
    go(cc ? byCountry(cc) : byBrowser());
  }
  setTimeout(function () { finish(null); }, 2500);
  function lookup(url, pick) {
    return fetch(url, { cache: "no-store" }).then(function (r) { return r.ok ? r.json() : null; })
      .then(function (j) { var cc = j && pick(j); if (/^[A-Za-z]{2}$/.test(cc || "")) finish(cc); }, function () {});
  }
  var pending = 2;
  function failed() { if (--pending === 0) finish(null); }
  lookup("https://api.country.is/", function (j) { return j.country; }).then(function(){ if(!done) failed(); });
  lookup("https://get.geojs.io/v1/ip/country.json", function (j) { return j.country; }).then(function(){ if(!done) failed(); });
})(${JSON.stringify(cfg)});`;
}
