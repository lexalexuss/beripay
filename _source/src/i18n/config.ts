export const LANGS = ["ru", "en", "pt"] as const;
export type Lang = (typeof LANGS)[number];

export const SITE = "https://beripay.net";
export const BOT_URL = "https://t.me/BeriPay_bot";
export const SUPPORT_URL = "https://t.me/BeriPay_SupportBot";
export const COMPLIANCE_EMAIL = "compliance@beripay.net";
export const LEGAL_EMAIL = "legal@beripay.net";
export const NEXTLAB_URL = "https://nextlabdigital.com";

/** Legal documents published under /<lang>/<slug>/ (Markdown in src/content/legal/<lang>/<slug>.md). */
export const DOCS = ["terms", "privacy-policy", "consent", "aml", "acceptable-use"] as const;
export type DocSlug = (typeof DOCS)[number];

export const HTML_LANG: Record<Lang, string> = { ru: "ru", en: "en", pt: "pt-BR" };
export const HREFLANG: Record<Lang, string> = { ru: "ru", en: "en", pt: "pt" };
export const OG_LOCALE: Record<Lang, string> = { ru: "ru_RU", en: "en_US", pt: "pt_BR" };
export const LANG_LABEL: Record<Lang, string> = { ru: "RU", en: "EN", pt: "PT" };

/** Remembered manual choice from the language switcher. */
export const LANG_COOKIE = "bp_lang";
export const LANG_COOKIE_MAX_AGE = 400 * 24 * 60 * 60; // 400 days (browser maximum), i.e. > 1 year

/** Language detection by visitor country (ISO 3166-1 alpha-2). Everything else → en. */
export const COUNTRY_LANG = {
  pt: ["BR", "PT", "AO", "MZ", "CV", "GW", "ST", "TL", "GQ", "MO"],
  ru: ["RU", "BY", "KZ", "KG", "AM", "AZ", "UZ", "TJ", "TM", "MD"],
};

export const localePath = (lang: Lang, slug = "") => `/${lang}/${slug ? `${slug}/` : ""}`;
