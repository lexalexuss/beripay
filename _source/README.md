# beripay.net — исходники сайта

Статический сайт на [Astro](https://astro.build) + Tailwind. GitHub Pages отдаёт **корень репозитория**,
а исходники лежат здесь, в `_source/` (Jekyll на GitHub Pages папки с `_` не публикует).

## Как вносить правки

```bash
cd _source
npm install          # один раз
npm run dev          # локально: http://localhost:4321
npm run release      # сборка + копирование готовых файлов в корень репо
```

После `npm run release` закоммитьте изменения (исходники и сгенерированные файлы в корне) и запушьте в `main`.

## Где что лежит

| Что | Файл |
| --- | --- |
| Цвета сайта (единственное место) | `src/styles/global.css`, блок `@theme` |
| Тексты главной, меню, футера, мета-теги (ru/en/pt) | `src/i18n/ui.ts` |
| Юридические документы | `src/content/legal/<ru\|en\|pt>/<terms\|privacy-policy\|consent\|aml\|acceptable-use>.md` |
| Контакты, ссылки на бота, почты, страны → язык | `src/i18n/config.ts` |
| Логика выбора языка (URL → cookie → страна по IP → язык браузера) | `src/lib/lang-detect.ts` |
| Картинки (генерируются из `brand/`) | `node scripts/prepare-images.mjs` → `public/images` |

## Адреса

- `/ru/`, `/en/`, `/pt/` — главная; `/<lang>/terms/`, `/privacy-policy/`, `/consent/`, `/aml/`, `/acceptable-use/` — документы.
- `/`, `/terms/`, `/aml/` и другие адреса без языка — определяют язык и перенаправляют.
- `?lang=ru|en|pt` — принудительный язык. Выбор в переключателе запоминается в cookie `bp_lang` на 400 дней.
- Страна определяется в браузере через api.country.is / get.geojs.io (у GitHub Pages нет сервера).
  Если за 2,5 с ответа нет — используется язык браузера.
