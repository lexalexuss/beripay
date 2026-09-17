// Generates optimized web images in public/images from the brand sources in _source/brand.
// Run once after changing brand assets:  node scripts/prepare-images.mjs
import sharp from "sharp";
import { mkdirSync } from "node:fs";

const BRAND = new URL("../brand/", import.meta.url).pathname.replace(/^\/(\w:)/, "$1");
const OUT = new URL("../public/images/", import.meta.url).pathname.replace(/^\/(\w:)/, "$1");
const PUB = new URL("../public/", import.meta.url).pathname.replace(/^\/(\w:)/, "$1");
mkdirSync(OUT, { recursive: true });

// Hero card: brand/card-beripay.png (new BeriPay card, toned to the Mini App palette by scripts/tone-card.mjs).
const CARD = BRAND + "card-beripay.png";

async function card() {
  for (const w of [640, 1024]) {
    await sharp(CARD).resize(w).webp({ quality: 90 }).toFile(`${OUT}card-${w}.webp`);
  }
}

// Referral illustration: already drawn on a light background, so it only needs resizing.
async function referral() {
  const src = BRAND + "referral.png";
  for (const w of [640, 1200]) {
    await sharp(src).resize(w).webp({ quality: 88 }).toFile(`${OUT}referral-${w}.webp`);
  }
}

// Logo / favicons from the official Telegram bot avatar (rounded-square app icon on black).
async function icons() {
  const src = BRAND + "bot-avatar.jpg";
  const size = 320, r = 72;
  const mask = Buffer.from(`<svg width="${size}" height="${size}"><rect x="0" y="0" width="${size}" height="${size}" rx="${r}" ry="${r}" fill="#fff"/></svg>`);
  const rounded = await sharp(src).resize(size, size).ensureAlpha().composite([{ input: mask, blend: "dest-in" }]).png().toBuffer();
  await sharp(rounded).resize(96).png().toFile(`${OUT}logo-96.png`);
  await sharp(rounded).resize(32).png().toFile(`${PUB}favicon-32.png`);
  await sharp(rounded).resize(192).png().toFile(`${PUB}icon-192.png`);
  await sharp(rounded).resize(180, 180).flatten({ background: "#ffffff" }).png().toFile(`${PUB}apple-touch-icon.png`);
  // Social preview 1200x630
  const cardImg = await sharp(CARD).resize(620).png().toBuffer();
  await sharp({ create: { width: 1200, height: 630, channels: 3, background: "#ffffff" } })
    .composite([
      { input: Buffer.from(`<svg width="1200" height="630"><defs><radialGradient id="g" cx="80%" cy="20%" r="80%"><stop offset="0" stop-color="#f4f4f4"/><stop offset="1" stop-color="#ffffff"/></radialGradient></defs><rect width="1200" height="630" fill="url(#g)"/></svg>`) },
      { input: cardImg, left: 520, top: 110 },
      { input: await sharp(rounded).resize(120).png().toBuffer(), left: 80, top: 255 },
    ])
    .jpeg({ quality: 86 })
    .toFile(`${OUT}og-image.jpg`);
}

await Promise.all([card(), referral(), icons()]);
console.log("images ready in", OUT);
