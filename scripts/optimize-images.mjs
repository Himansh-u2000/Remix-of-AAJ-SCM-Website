import sharp from "sharp";
import { promises as fs } from "fs";
import path from "path";

const root = "src/assets";

// Hero responsive variants
async function heroVariants() {
  const src = path.join(root, "hero-warehouse.jpg");
  const widths = [640, 960, 1280];
  for (const w of widths) {
    const base = sharp(src).resize({ width: w, withoutEnlargement: true });
    await base.clone().avif({ quality: 55 }).toFile(path.join(root, `hero-warehouse-${w}.avif`));
    await base.clone().webp({ quality: 72 }).toFile(path.join(root, `hero-warehouse-${w}.webp`));
  }
  // Optimized JPG fallback (max width 1280)
  await sharp(src).resize({ width: 1280, withoutEnlargement: true }).jpeg({ quality: 78, mozjpeg: true }).toFile(path.join(root, "hero-warehouse-opt.jpg"));
  console.log("hero variants OK");
}

// Re-encode oversize images in place (write .webp next to .jpg, keep .jpg too)
async function shrinkSolution() {
  const files = ["about-hero.jpg","solution-warehousing.jpg","solution-b2b.jpg","solution-returns.jpg","solution-fulfillment.jpg","solution-transport.jpg","faq-illustration.jpg"];
  for (const f of files) {
    const p = path.join(root, f);
    try { await fs.access(p); } catch { continue; }
    const out = p.replace(/\.jpe?g$/i, ".webp");
    await sharp(p).resize({ width: 1280, withoutEnlargement: true }).webp({ quality: 72 }).toFile(out);
    // Re-compress original jpg as fallback
    await sharp(p).resize({ width: 1280, withoutEnlargement: true }).jpeg({ quality: 78, mozjpeg: true }).toFile(p + ".tmp");
    await fs.rename(p + ".tmp", p);
    console.log("shrunk", f);
  }
}

// Resize client logos
async function shrinkLogos() {
  const dir = path.join(root, "clients");
  const entries = await fs.readdir(dir);
  for (const e of entries) {
    const p = path.join(dir, e);
    const st = await fs.stat(p);
    if (st.size < 25_000) continue;
    const ext = path.extname(e).toLowerCase();
    if (![".png",".jpg",".jpeg",".webp",".avif"].includes(ext)) continue;
    const tmp = p + ".tmp.webp";
    await sharp(p).resize({ width: 320, withoutEnlargement: true }).webp({ quality: 80 }).toFile(tmp);
    // Replace original by writing .webp variant; but we need to keep filename consistent for imports.
    // If original is png/jpg, write a sibling .webp and ALSO shrink the original to keep imports working.
    if (ext === ".webp") {
      await fs.rename(tmp, p);
    } else {
      // shrink original at same format
      const buf = await sharp(p).resize({ width: 320, withoutEnlargement: true }).toBuffer();
      const reenc = ext === ".png" ? await sharp(buf).png({ quality: 80, compressionLevel: 9 }).toBuffer() : await sharp(buf).jpeg({ quality: 80, mozjpeg: true }).toBuffer();
      await fs.writeFile(p, reenc);
      await fs.unlink(tmp);
    }
    console.log("logo shrunk", e);
  }
}

await heroVariants();
await shrinkSolution();
await shrinkLogos();
