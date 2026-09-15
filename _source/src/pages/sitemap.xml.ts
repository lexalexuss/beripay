import { DOCS, HREFLANG, LANGS, SITE, localePath } from "../i18n/config";

export function GET() {
  const slugs = ["", ...DOCS];
  const urls = LANGS.flatMap((lang) =>
    slugs.map((slug) => {
      const alternates = LANGS.map(
        (l) => `    <xhtml:link rel="alternate" hreflang="${HREFLANG[l]}" href="${SITE}${localePath(l, slug)}"/>`,
      ).join("\n");
      return `  <url>\n    <loc>${SITE}${localePath(lang, slug)}</loc>\n${alternates}\n    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}/${slug ? `${slug}/` : ""}"/>\n  </url>`;
    }),
  );
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join("\n")}\n</urlset>\n`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
