// Generates optimized web images in public/images from the brand sources in _source/brand.
// Run once after changing brand assets:  node scripts/prepare-images.mjs
import sharp from "sharp";
import { mkdirSync } from "node:fs";

const BRAND = new URL("../brand/", import.meta.url).pathname.replace(/^\/(\w:)/, "$1");
const OUT = new URL("../public/images/", import.meta.url).pathname.replace(/^\/(\w:)/, "$1");
const PUB = new URL("../public/", import.meta.url).pathname.replace(/^\/(\w:)/, "$1");
mkdirSync(OUT, { recursive: true });

// Background of the referral illustration = Mini App panel color (--color-surface in global.css).
const LIGHT = [244, 244, 244];
const DEEP = [236, 236, 236];

// Hero card: brand/card-beripay.png (new BeriPay card, toned to the Mini App palette by scripts/tone-card.mjs).
const CARD = BRAND + "card-beripay.png";

async function card() {
  for (const w of [640, 1024]) {
    await sharp(CARD).resize(w).webp({ quality: 90 }).toFile(`${OUT}card-${w}.webp`);
  }
}

// The referral banner was drawn on a dark-green background. Flood-fill that background from the
// borders (stopping at outlines) and repaint it in the light palette.
async function referral() {
  const src = BRAND + "Баннер рефералка.png";
  const W = 1800;
  const { data, info } = await sharp(src).resize(W).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width: w, height: h } = info;
  const lumOf = (i) => 0.2126 * data[i * 4] + 0.7152 * data[i * 4 + 1] + 0.0722 * data[i * 4 + 2];
  const isBgLike = (i) => {
    const r = data[i * 4], g = data[i * 4 + 1], b = data[i * 4 + 2];
    return lumOf(i) < 105 && g >= r + 6 && g + 8 >= b && Math.max(r, g, b) - Math.min(r, g, b) < 70;
  };
  const filled = new Uint8Array(w * h);
  const from = new Int32Array(w * h).fill(-1);
  const stack = [];
  for (let x = 0; x < w; x++) for (let k = 0; k < 6; k++) stack.push(k * w + x, (h - 1 - k) * w + x);
  for (let y = 0; y < h; y++) for (let k = 0; k < 6; k++) stack.push(y * w + k, y * w + (w - 1 - k));
  while (stack.length) {
    const i = stack.pop();
    if (filled[i]) continue;
    if (data[i * 4 + 3] < 20) filled[i] = 2;
    else {
      if (!isBgLike(i)) continue;
      const f = from[i];
      if (f >= 0 && filled[f] === 1) {
        let d = 0;
        for (let c = 0; c < 3; c++) d += Math.abs(data[i * 4 + c] - data[f * 4 + c]);
        if (d > 22) continue;
      }
      filled[i] = 1;
    }
    const x = i % w, y = (i / w) | 0;
    if (x + 1 < w && !filled[i + 1]) { from[i + 1] = i; stack.push(i + 1); }
    if (x > 0 && !filled[i - 1]) { from[i - 1] = i; stack.push(i - 1); }
    if (y + 1 < h && !filled[i + w]) { from[i + w] = i; stack.push(i + w); }
    if (y > 0 && !filled[i - w]) { from[i - w] = i; stack.push(i - w); }
  }
  const out = Buffer.from(data);
  const paint = (i, t, mix = 1) => {
    for (let c = 0; c < 3; c++) {
      const target = LIGHT[c] * (1 - t) + DEEP[c] * t;
      out[i * 4 + c] = Math.round(out[i * 4 + c] * (1 - mix) + target * mix);
    }
    out[i * 4 + 3] = 255;
  };
  for (let i = 0; i < w * h; i++) {
    if (filled[i] === 1) paint(i, Math.max(0, Math.min(1, (lumOf(i) - 45) / 40)));
  }
  // Soften dark antialiasing fringes (2px) around repainted areas.
  for (let pass = 0; pass < 2; pass++) {
    const mark = [];
    for (let y = 1; y < h - 1; y++) for (let x = 1; x < w - 1; x++) {
      const i = y * w + x;
      if (filled[i]) continue;
      if (!(filled[i - 1] === 1 || filled[i + 1] === 1 || filled[i - w] === 1 || filled[i + w] === 1)) continue;
      if (isBgLike(i)) mark.push(i);
    }
    for (const i of mark) { paint(i, 0.3, pass === 0 ? 0.6 : 0.4); filled[i] = 1; }
  }
  // Remove the dark frame of the original rounded rectangle: repaint a thin border ring.
  const M = 16;
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    if (x >= M && y >= M && x < w - M && y < h - M) continue;
    const i = y * w + x;
    if (data[i * 4 + 3] < 250 || lumOf(i) < 120) paint(i, 0.3);
  }
  const img = sharp(out, { raw: { width: w, height: h, channels: 4 } });
  const buf = await img.png().toBuffer();
  const inset = 18;
  const cropped = sharp(buf).extract({ left: inset, top: inset, width: w - 2 * inset, height: h - 2 * inset });
  const cbuf = await cropped.png().toBuffer();
  for (const cw of [640, 1200]) {
    await sharp(cbuf).resize(cw).flatten({ background: { r: LIGHT[0], g: LIGHT[1], b: LIGHT[2] } }).webp({ quality: 86 }).toFile(`${OUT}referral-${cw}.webp`);
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
