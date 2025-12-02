const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ASSETS_DIR = path.join(__dirname, '..', 'src', 'assets');

async function convertFile(file) {
  const srcPath = path.join(ASSETS_DIR, file);
  const ext = path.extname(file).toLowerCase();
  const base = path.basename(file, ext);
  const outFileOpt = base + '.opt.webp';
  const outPathOpt = path.join(ASSETS_DIR, outFileOpt);

  try {
    const srcStat = fs.statSync(srcPath);
    let outStat;
    try {
      outStat = fs.statSync(outPathOpt);
    } catch (e) {
      outStat = null;
    }

    if (ext === '.webp') {
      // force re-encode existing webp files to apply new quality/resize
      console.log(`Re-encoding existing webp ${file} → ${outFileOpt}`);
    } else if (outStat && outStat.mtimeMs >= srcStat.mtimeMs) {
      // already up-to-date
      console.log(`Skipping ${file} — webp already up-to-date`);
      return;
    }

    console.log(`Converting ${file} → ${outFileOpt}`);

    // Convert only png/jpg/jpeg
    if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.webp') {
      // Resize very large images and convert to webp with quality 75
      const image = sharp(srcPath);
      const meta = await image.metadata();
      const MAX_WIDTH = 1200;
      let pipeline = image;
      if (meta.width && meta.width > MAX_WIDTH) {
        pipeline = image.resize({ width: MAX_WIDTH });
      }
      // write to a temporary file then rename over the original to avoid data loss
      const os = require('os');
      if (ext === '.webp') {
        // re-encode existing webp into an optimized copy (don't overwrite original to avoid locks)
        const buf = await pipeline.webp({ quality: 65, effort: 6 }).toBuffer();
        fs.writeFileSync(outPathOpt, buf);
      } else {
        const tmpPath = path.join(os.tmpdir(), base + '-' + Date.now() + '.webp');
        await pipeline.webp({ quality: 65, effort: 6 }).toFile(tmpPath);
        // move optimized file into place
        fs.copyFileSync(tmpPath, outPathOpt);
        fs.unlinkSync(tmpPath);
      }

      // if original extension was PNG/JPG/JPEG we remove original file (optimized webp uses separate name)
      if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
        try {
          fs.unlinkSync(srcPath);
          console.log(`Removed original ${file}`);
        } catch (e) {
          console.warn(`Could not remove original ${file} — ${e.message}`);
        }
      }
    } else {
      console.log(`Skipping ${file} — unsupported extension ${ext}`);
    }
  } catch (err) {
    console.error('Error converting', file, err);
  }
}

async function run() {
  if (!fs.existsSync(ASSETS_DIR)) {
    console.error('Assets directory not found:', ASSETS_DIR);
    process.exit(1);
  }

  const files = fs.readdirSync(ASSETS_DIR).filter(f => /\.(png|jpg|jpeg|webp)$/i.test(f));
  for (const f of files) await convertFile(f);
  console.log('Image conversion complete');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
