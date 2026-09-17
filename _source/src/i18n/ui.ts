import type { DocSlug, Lang } from "./config";

type Feature = { icon: string; title: string; text: string };

export interface UI {
  brand: string;
  meta: { homeTitle: string; homeDescription: string; docDescription: Record<DocSlug, string> };
  nav: { home: string; docs: Record<DocSlug, string> };
  a11y: { menu: string; language: string; home: string };
  cta: { issue: string; bot: string; botLong: string; more: string };
  hero: { title1: string; title2: string; text: string; cardAlt: string; cardBadge: string };
  stats: { value: string; label: string };
  features: { title: string; text: string; items: Feature[] };
  start: { title: string; text: string };
  referral: { title: string; text: string; bullets: string[]; imageAlt: string };
  footer: {
    about: string;
    sections: string;
    contacts: string;
    support: string;
    complianceLabel: string;
    legalLabel: string;
    adminTitle: string;
    requisites: string[];
    disclaimer: string;
    docsLabel: string;
    docLinks: { slug: DocSlug; label: string }[];
    techAdmin: string;
    copyright: string;
    siteLabel: string;
  };
  notFound: { title: string; text: string; button: string };
  redirect: { title: string; text: string };
}

const ru: UI = {
  brand: "Бери и плати!",
  meta: {
    homeTitle: "Бери и плати! — виртуальные карты для оплаты зарубежных сервисов",
    homeDescription:
      "Виртуальная карта в Telegram для оплаты подписок, покупок и зарубежных сервисов в рамках лимитов карты и правил сервиса. Пополнение доступными способами в боте, включая СБП.",
    docDescription: {
      terms: "Публичная оферта об использовании информационно-технологического сервиса «Бери и плати» (BeriPay).",
      "privacy-policy": "Политика обработки персональных данных пользователей сервиса «Бери и плати» (BeriPay).",
      consent: "Согласие на обработку персональных данных пользователя сервиса «Бери и плати» (BeriPay).",
      aml: "Политика ПОД/ФТ (AML) и комплаенс сервиса «Бери и плати» (BeriPay): KYC, санкционный скрининг, мониторинг операций.",
      "acceptable-use": "Правила допустимого использования и запрещённые виды деятельности сервиса «Бери и плати» (BeriPay).",
    },
  },
  nav: {
    home: "Главная",
    docs: {
      terms: "Условия использования",
      "privacy-policy": "Политика конфиденциальности",
      consent: "Согласие на обработку ПД",
      aml: "AML / Комплаенс",
      "acceptable-use": "Допустимое использование",
    },
  },
  a11y: { menu: "Меню", language: "Язык сайта", home: "На главную" },
  cta: { issue: "Выпустить карту", bot: "Перейти в бот", botLong: "Перейти в Telegram бот", more: "Узнать подробнее" },
  hero: {
    title1: "Виртуальные карты",
    title2: "для зарубежных сервисов",
    text: "Оформите виртуальную карту в Telegram после выполнения условий сервиса, включая пополнение. Оплачивайте подписки, покупки и зарубежные сервисы в рамках лимитов карты и правил сервиса. Пополнение доступными способами в боте, включая СБП.",
    cardAlt: "Бери и плати! — виртуальная карта",
    cardBadge: "Оплата за рубежом",
  },
  stats: { value: "В Telegram", label: "выпуск после условий сервиса" },
  features: {
    title: "Почему выбирают нас",
    text: "Удобный сервис виртуальных карт с прозрачными условиями и быстрой поддержкой",
    items: [
      {
        icon: "globe",
        title: "Оплата за рубежом",
        text: "Платите в зарубежных сервисах и магазинах, где принимается карта. Доступность зависит от сети приёма, лимитов и правил партнёра-эмитента.",
      },
      {
        icon: "send",
        title: "Быстрый выпуск в Telegram",
        text: "Выпуск карты доступен в боте после выполнения условий сервиса. При необходимости потребуется проверка личности.",
      },
      { icon: "wallet", title: "Удобное пополнение", text: "Быстрое пополнение карты доступными способами прямо в Telegram" },
      {
        icon: "shield",
        title: "Безопасность",
        text: "Мы применяем проверку личности по запросу, санкционный скрининг и мониторинг операций. Решение о выпуске карты и обслуживании принимается с учётом риск-правил сервиса и партнёра-эмитента. Мы не банк и не обещаем одобрение каждой заявки.",
      },
      { icon: "smartphone", title: "Apple Pay & Google Pay", text: "Привязывайте карту к мобильным кошелькам для бесконтактной оплаты" },
    ],
  },
  start: {
    title: "Готовы начать?",
    text: "Выпустите виртуальную карту в Telegram после выполнения условий сервиса и оплачивайте зарубежные сервисы в рамках лимитов карты",
  },
  referral: {
    title: "Реферальная программа",
    text: "Приглашайте друзей и получайте бонусы по правилам реферальной программы, если приглашённый пользователь выпустит карту и будут соблюдены условия программы и антифрод-контроли.",
    bullets: ["Уникальная реферальная ссылка", "Прозрачная статистика", "Начисления по правилам программы"],
    imageAlt: "Реферальная программа",
  },
  footer: {
    about: "Виртуальные карты для оплаты зарубежных сервисов. Сервис работает в рамках лимитов, правил карты и требований комплаенс.",
    sections: "Разделы",
    contacts: "Контакты",
    support: "Поддержка",
    complianceLabel: "Комплаенс",
    legalLabel: "Legal",
    adminTitle: "Администратор сервиса:",
    requisites: [
      "ООО «НекстЛаб»",
      "ИНН: 00203202610365",
      "Рег. номер: 326188-3301-ООО",
      "Кыргызская Республика, г. Бишкек, Токтогула, 141, каб. 4а",
    ],
    disclaimer:
      "Сервис «Бери и плати» (BeriPay) — информационно-технологический сервис. Администратор сайта и сервиса: ООО «НекстЛаб» (рег. № 326188-3301-ООО, ИНН 00203202610365), Кыргызская Республика. Администратор не является банком, кредитной организацией, платёжной системой или эмитентом платёжных карт. Виртуальная карта выпускается и обслуживается партнёром card program на условиях его правил и Публичной оферты. Продукт предназначен для оплат по карте; снятие наличных / ATM и вывод на банковские счета не являются функцией сервиса. Доступ может потребовать проверки личности и ограничивается риск-правилами и санкционными требованиями.",
    docsLabel: "Документы",
    docLinks: [
      { slug: "terms", label: "Оферта" },
      { slug: "privacy-policy", label: "Политика конфиденциальности" },
      { slug: "aml", label: "AML" },
      { slug: "acceptable-use", label: "Допустимое использование" },
    ],
    techAdmin: "Технический администратор",
    copyright: "© {year} Бери и плати! Все права защищены.",
    siteLabel: "Сайт",
  },
  notFound: { title: "Страница не найдена", text: "Возможно, ссылка устарела или в адресе опечатка.", button: "На главную" },
  redirect: { title: "Бери и плати!", text: "Открываем страницу на вашем языке…" },
};

const en: UI = {
  brand: "BeriPay",
  meta: {
    homeTitle: "BeriPay — virtual cards for paying for international services",
    homeDescription:
      "A virtual card in Telegram for subscriptions, purchases and international services within the card limits and the service rules. Top up with the methods available in the bot, including SBP.",
    docDescription: {
      terms: "Public Offer for the use of the BeriPay (“Бери и плати”) information technology service.",
      "privacy-policy": "Personal Data Processing Policy for users of the BeriPay (“Бери и плати”) service.",
      consent: "Consent to the processing of personal data of a BeriPay (“Бери и плати”) service user.",
      aml: "AML/CFT and compliance policy of the BeriPay (“Бери и плати”) service: KYC, sanctions screening, transaction monitoring.",
      "acceptable-use": "Acceptable use rules and prohibited activities for the BeriPay (“Бери и плати”) service.",
    },
  },
  nav: {
    home: "Home",
    docs: {
      terms: "Terms of Use",
      "privacy-policy": "Privacy Policy",
      consent: "Personal Data Consent",
      aml: "AML / Compliance",
      "acceptable-use": "Acceptable Use",
    },
  },
  a11y: { menu: "Menu", language: "Website language", home: "Home page" },
  cta: { issue: "Get a card", bot: "Open the bot", botLong: "Open the Telegram bot", more: "Learn more" },
  hero: {
    title1: "Virtual cards",
    title2: "for international services",
    text: "Get a virtual card in Telegram once you meet the service conditions, including a top-up. Pay for subscriptions, purchases and international services within the card limits and the service rules. Top up with the methods available in the bot, including SBP.",
    cardAlt: "BeriPay virtual card",
    cardBadge: "Payments abroad",
  },
  stats: { value: "In Telegram", label: "issued once service conditions are met" },
  features: {
    title: "Why choose us",
    text: "A convenient virtual card service with transparent terms and responsive support",
    items: [
      {
        icon: "globe",
        title: "Payments abroad",
        text: "Pay at international services and stores where the card is accepted. Availability depends on the acceptance network, limits and the issuing partner’s rules.",
      },
      {
        icon: "send",
        title: "Fast issuance in Telegram",
        text: "Card issuance is available in the bot once the service conditions are met. Identity verification may be required.",
      },
      { icon: "wallet", title: "Easy top-ups", text: "Top up your card quickly with the available methods right in Telegram" },
      {
        icon: "shield",
        title: "Security",
        text: "We apply identity verification when requested, sanctions screening and transaction monitoring. Decisions on card issuance and servicing take into account the risk rules of the service and the issuing partner. We are not a bank and do not promise to approve every application.",
      },
      { icon: "smartphone", title: "Apple Pay & Google Pay", text: "Add the card to mobile wallets for contactless payments" },
    ],
  },
  start: {
    title: "Ready to start?",
    text: "Get a virtual card in Telegram once the service conditions are met and pay for international services within the card limits",
  },
  referral: {
    title: "Referral programme",
    text: "Invite friends and receive bonuses under the referral programme rules if the invited user gets a card and the programme conditions and anti-fraud checks are met.",
    bullets: ["Unique referral link", "Transparent statistics", "Rewards under the programme rules"],
    imageAlt: "Referral programme",
  },
  footer: {
    about: "Virtual cards for paying for international services. The service operates within the limits, the card rules and compliance requirements.",
    sections: "Sections",
    contacts: "Contacts",
    support: "Support",
    complianceLabel: "Compliance",
    legalLabel: "Legal",
    adminTitle: "Service administrator:",
    requisites: [
      "NextLab LLC (ООО «НекстЛаб»)",
      "TIN (INN): 00203202610365",
      "Registration No.: 326188-3301-ООО",
      "Office 4a, 141 Toktogula St., Bishkek, Kyrgyz Republic",
    ],
    disclaimer:
      "The BeriPay (“Бери и плати”) service is an information technology service. Administrator of the website and the service: NextLab LLC (ООО «НекстЛаб»), Registration No. 326188-3301-ООО, TIN (INN) 00203202610365, Kyrgyz Republic. The Administrator is not a bank, credit institution, payment system or payment card issuer. The virtual card is issued and serviced by a card program partner under its rules and the Public Offer. The product is intended for card payments; cash withdrawals / ATM and withdrawals to bank accounts are not functions of the service. Access may require identity verification and is restricted by risk rules and sanctions requirements.",
    docsLabel: "Documents",
    docLinks: [
      { slug: "terms", label: "Public Offer" },
      { slug: "privacy-policy", label: "Privacy Policy" },
      { slug: "aml", label: "AML" },
      { slug: "acceptable-use", label: "Acceptable Use" },
    ],
    techAdmin: "Technical administrator",
    copyright: "© {year} BeriPay. All rights reserved.",
    siteLabel: "Website",
  },
  notFound: { title: "Page not found", text: "The link may be outdated or the address may contain a typo.", button: "Go to home page" },
  redirect: { title: "BeriPay", text: "Opening the page in your language…" },
};

const pt: UI = {
  brand: "BeriPay",
  meta: {
    homeTitle: "BeriPay — cartões virtuais para pagar serviços internacionais",
    homeDescription:
      "Cartão virtual no Telegram para assinaturas, compras e serviços internacionais, dentro dos limites do cartão e das regras do serviço. Recarga pelos métodos disponíveis no bot, incluindo SBP.",
    docDescription: {
      terms: "Oferta Pública para uso do serviço de tecnologia da informação BeriPay (“Бери и плати”).",
      "privacy-policy": "Política de Tratamento de Dados Pessoais dos usuários do serviço BeriPay (“Бери и плати”).",
      consent: "Consentimento para o tratamento de dados pessoais do usuário do serviço BeriPay (“Бери и плати”).",
      aml: "Política de PLD/FT (AML) e compliance do serviço BeriPay (“Бери и плати”): KYC, triagem de sanções, monitoramento de operações.",
      "acceptable-use": "Regras de uso aceitável e atividades proibidas do serviço BeriPay (“Бери и плати”).",
    },
  },
  nav: {
    home: "Início",
    docs: {
      terms: "Termos de Uso",
      "privacy-policy": "Política de Privacidade",
      consent: "Consentimento de Dados Pessoais",
      aml: "AML / Compliance",
      "acceptable-use": "Uso Aceitável",
    },
  },
  a11y: { menu: "Menu", language: "Idioma do site", home: "Página inicial" },
  cta: { issue: "Emitir cartão", bot: "Abrir o bot", botLong: "Abrir o bot no Telegram", more: "Saiba mais" },
  hero: {
    title1: "Cartões virtuais",
    title2: "para serviços internacionais",
    text: "Solicite um cartão virtual no Telegram após cumprir as condições do serviço, incluindo a recarga. Pague assinaturas, compras e serviços internacionais dentro dos limites do cartão e das regras do serviço. Recarga pelos métodos disponíveis no bot, incluindo SBP.",
    cardAlt: "Cartão virtual BeriPay",
    cardBadge: "Pagamentos no exterior",
  },
  stats: { value: "No Telegram", label: "emissão após cumprir as condições do serviço" },
  features: {
    title: "Por que nos escolher",
    text: "Um serviço prático de cartões virtuais, com condições transparentes e suporte ágil",
    items: [
      {
        icon: "globe",
        title: "Pagamentos no exterior",
        text: "Pague em serviços e lojas internacionais onde o cartão é aceito. A disponibilidade depende da rede de aceitação, dos limites e das regras do parceiro emissor.",
      },
      {
        icon: "send",
        title: "Emissão rápida no Telegram",
        text: "A emissão do cartão fica disponível no bot após o cumprimento das condições do serviço. Se necessário, será exigida a verificação de identidade.",
      },
      { icon: "wallet", title: "Recarga prática", text: "Recarregue o cartão rapidamente pelos métodos disponíveis, direto no Telegram" },
      {
        icon: "shield",
        title: "Segurança",
        text: "Aplicamos verificação de identidade quando solicitada, triagem de sanções e monitoramento de operações. A decisão sobre a emissão e a manutenção do cartão leva em conta as regras de risco do serviço e do parceiro emissor. Não somos um banco e não prometemos aprovar todas as solicitações.",
      },
      { icon: "smartphone", title: "Apple Pay & Google Pay", text: "Vincule o cartão às carteiras digitais para pagamentos por aproximação" },
    ],
  },
  start: {
    title: "Pronto para começar?",
    text: "Emita um cartão virtual no Telegram após cumprir as condições do serviço e pague serviços internacionais dentro dos limites do cartão",
  },
  referral: {
    title: "Programa de indicação",
    text: "Convide amigos e receba bônus conforme as regras do programa de indicação, se o usuário convidado emitir um cartão e as condições do programa e os controles antifraude forem cumpridos.",
    bullets: ["Link de indicação exclusivo", "Estatísticas transparentes", "Bônus conforme as regras do programa"],
    imageAlt: "Programa de indicação",
  },
  footer: {
    about: "Cartões virtuais para pagar serviços internacionais. O serviço funciona dentro dos limites, das regras do cartão e dos requisitos de compliance.",
    sections: "Seções",
    contacts: "Contatos",
    support: "Suporte",
    complianceLabel: "Compliance",
    legalLabel: "Jurídico",
    adminTitle: "Administrador do serviço:",
    requisites: [
      "NextLab LLC (ООО «НекстЛаб»)",
      "INN (número de identificação fiscal): 00203202610365",
      "Nº de registro: 326188-3301-ООО",
      "Rua Toktogula, 141, sala 4a, Bishkek, República Quirguiz",
    ],
    disclaimer:
      "O serviço BeriPay (“Бери и плати”) é um serviço de tecnologia da informação. Administrador do site e do serviço: NextLab LLC (ООО «НекстЛаб»), nº de registro 326188-3301-ООО, INN 00203202610365, República Quirguiz. O Administrador não é banco, instituição de crédito, sistema de pagamento nem emissor de cartões de pagamento. O cartão virtual é emitido e mantido por um parceiro de card program, de acordo com as regras desse parceiro e com a Oferta Pública. O produto destina-se a pagamentos com cartão; saques em dinheiro / caixas eletrônicos (ATM) e transferências para contas bancárias não são funções do serviço. O acesso pode exigir verificação de identidade e é limitado por regras de risco e requisitos de sanções.",
    docsLabel: "Documentos",
    docLinks: [
      { slug: "terms", label: "Oferta Pública" },
      { slug: "privacy-policy", label: "Política de Privacidade" },
      { slug: "aml", label: "AML" },
      { slug: "acceptable-use", label: "Uso Aceitável" },
    ],
    techAdmin: "Administrador técnico",
    copyright: "© {year} BeriPay. Todos os direitos reservados.",
    siteLabel: "Site",
  },
  notFound: { title: "Página não encontrada", text: "O link pode estar desatualizado ou o endereço pode conter um erro de digitação.", button: "Ir para o início" },
  redirect: { title: "BeriPay", text: "Abrindo a página no seu idioma…" },
};

export const UI_STRINGS: Record<Lang, UI> = { ru, en, pt };
export const t = (lang: Lang) => UI_STRINGS[lang];
