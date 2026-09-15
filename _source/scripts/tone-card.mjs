// Tones the green body of the hero card (brand/card-beripay-source.webp) to the Mini App card palette
// and writes brand/card-beripay.png. White text/pins and the gold chip are kept as they are.
// Run after replacing the source card:  node scripts/tone-card.mjs && npm run images
import sharp from "sharp";
import { fileURLToPath } from "node:url";

const SRC = fileURLToPath(new URL("../brand/card-beripay-source.webp", import.meta.url));
const OUT = fileURLToPath(new URL("../brand/card-beripay.png", import.meta.url));

const hexToRgb = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
// Mini App card: left #123225, center #154B34, right #19533B; continents slightly lighter
const stops = [
  [0, hexToRgb("#0f2b20")],
  [0.35, hexToRgb("#133a2a")],
  [0.7, hexToRgb("#19533b")],
  [1, hexToRgb("#2a6a4e")],
];
const grad = (t) => {
  for (let i = 1; i < stops.length; i++) {
    if (t <= stops[i][0]) {
      const [t0, a] = stops[i - 1], [t1, b] = stops[i];
      const u = (t - t0) / (t1 - t0);
      return a.map((v, k) => v + (b[k] - v) * u);
    }
  }
  return stops.at(-1)[1];
};

const { data, info } = await sharp(SRC).trim({ threshold: 1 }).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const lum = (i) => 0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2];
// green card body: not white (text/pins) and not gold (chip)
const isBody = (i) => data[i + 3] > 0 && data[i + 1] > data[i] + 8 && Math.min(data[i], data[i + 1], data[i + 2]) < 150;

const ls = [];
for (let i = 0; i < data.length; i += 4) if (isBody(i) && data[i + 3] > 250) ls.push(lum(i));
ls.sort((a, b) => a - b);
const lo = ls[(ls.length * 0.01) | 0], hi = ls[(ls.length * 0.995) | 0];

for (let i = 0; i < data.length; i += 4) {
  if (!isBody(i)) continue;
  const c = grad(Math.max(0, Math.min(1, (lum(i) - lo) / (hi - lo))));
  // keep antialiased edges of white details smooth
  const whiteness = Math.min(1, Math.max(0, (Math.min(data[i], data[i + 1], data[i + 2]) - 60) / 90));
  for (let k = 0; k < 3; k++) data[i + k] = Math.round(c[k] * (1 - whiteness) + data[i + k] * whiteness);
}
await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } }).png().toFile(OUT);
console.log(`card toned: ${info.width}x${info.height} → ${OUT}`);
