// Copies the Astro build (_source/dist) into the repository root, which GitHub Pages serves.
// Files published by the previous run are listed in _source/published-files.json and removed first,
// so pages deleted from the source also disappear from the site. Nothing is committed or pushed.
import { cpSync, existsSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const SOURCE = join(dirname(fileURLToPath(import.meta.url)), "..");
const DIST = join(SOURCE, "dist");
const ROOT = join(SOURCE, "..");
const MANIFEST = join(SOURCE, "published-files.json");

// Never touch these in the repo root.
const PROTECTED = new Set(["_source", ".git", ".gitignore", "_config.yml", "README.md"]);

if (!existsSync(join(DIST, "index.html"))) {
  console.error("dist/ is empty — run `npm run build` first");
  process.exit(1);
}

const listFiles = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const full = join(dir, name);
    return statSync(full).isDirectory() ? listFiles(full) : [full];
  });

const previous = existsSync(MANIFEST) ? JSON.parse(readFileSync(MANIFEST, "utf8")) : [];
for (const rel of previous) {
  if (PROTECTED.has(rel.split(/[\\/]/)[0])) continue;
  rmSync(join(ROOT, rel), { force: true });
}
// remove folders left empty
for (const rel of new Set(previous.map((p) => p.split("/")[0]))) {
  const full = join(ROOT, rel);
  if (!PROTECTED.has(rel) && existsSync(full) && statSync(full).isDirectory()) {
    const left = listFiles(full);
    if (left.length === 0) rmSync(full, { recursive: true, force: true });
  }
}

const files = listFiles(DIST).map((f) => relative(DIST, f).split("\\").join("/"));
for (const rel of files) {
  if (PROTECTED.has(rel.split("/")[0])) throw new Error(`build output collides with protected path: ${rel}`);
  cpSync(join(DIST, rel), join(ROOT, rel));
}
writeFileSync(MANIFEST, JSON.stringify(files.sort(), null, 2) + "\n");
console.log(`Published ${files.length} files to ${ROOT}`);
