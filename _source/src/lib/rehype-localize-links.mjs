// Legal texts keep canonical URLs like https://beripay.net/terms (that is part of the document text).
// On the site, such links should open the document in the same language the reader is on,
// so the href is rewritten to /<lang>/terms/ based on the Markdown file location (legal/<lang>/*.md).
const DOCS = ["terms", "privacy-policy", "consent", "aml", "acceptable-use"];
const SITE_LINK = new RegExp(`^https?://(?:www\\.)?beripay\\.net/(${DOCS.join("|")})/?(#.*)?$`);

export function rehypeLocalizeLinks() {
  return (tree, file) => {
    const path = String(file.path || file.history?.[0] || "").replace(/\\/g, "/");
    const lang = path.match(/\/legal\/(ru|en|pt)\//)?.[1];
    const walk = (node) => {
      if (node.type === "element" && node.tagName === "a" && node.properties) {
        const href = String(node.properties.href || "");
        const m = lang && href.match(SITE_LINK);
        if (m) {
          node.properties.href = `/${lang}/${m[1]}/${m[2] || ""}`;
        } else if (/^https?:\/\//.test(href) && !/^https?:\/\/(www\.)?beripay\.net\/?$/.test(href)) {
          node.properties.target = "_blank";
          node.properties.rel = "noopener noreferrer";
        } else if (/^https?:\/\/(www\.)?beripay\.net\/?$/.test(href) && lang) {
          node.properties.href = `/${lang}/`;
        }
      }
      if (node.children) node.children.forEach(walk);
    };
    walk(tree);
  };
}
