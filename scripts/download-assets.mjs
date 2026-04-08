import { writeFile, mkdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC = join(__dirname, '../public');

const assets = [
  // Fonts
  { url: 'https://www.neighborhood.jp/cdn/shop/t/1/assets/39E1F5_0_0.woff2', dest: 'fonts/39E1F5_0_0.woff2' },
  { url: 'https://www.neighborhood.jp/cdn/shop/t/1/assets/39E1F5_0_0.woff', dest: 'fonts/39E1F5_0_0.woff' },
  // SEO / meta
  { url: 'https://www.neighborhood.jp/cdn/shop/t/1/assets/favicon.ico?v=55871074192516730081562294694', dest: 'seo/favicon.ico' },
  { url: 'https://www.neighborhood.jp/cdn/shop/t/1/assets/apple-touch.png?v=27353580005408117511562294681', dest: 'seo/apple-touch.png' },
  { url: 'https://www.neighborhood.jp/cdn/shop/files/ogp.jpg?v=1613678656', dest: 'seo/ogp.jpg' },
  // Header icons
  { url: 'https://www.neighborhood.jp/cdn/shop/t/1/assets/neighborhood-logo.svg?v=142976061398349384871558407303', dest: 'images/neighborhood-logo.svg' },
  { url: 'https://www.neighborhood.jp/cdn/shop/t/1/assets/search-icon.svg?v=152875403354693632131567073855', dest: 'images/search-icon.svg' },
  { url: 'https://www.neighborhood.jp/cdn/shop/t/1/assets/cart.svg?v=11167190747242966061567073281', dest: 'images/cart.svg' },
  { url: 'https://www.neighborhood.jp/cdn/shop/t/1/assets/menu-close.svg?v=120145532001270961681567073290', dest: 'images/menu-close.svg' },
  // Hero slideshow images
  { url: 'https://www.neighborhood.jp/cdn/shop/files/261_nh_ia_kv_1x1_01_shopify_1024x1024@2x.jpg?v=1775268180', dest: 'images/hero-slide-01.jpg' },
  { url: 'https://www.neighborhood.jp/cdn/shop/files/261_nh_ia_kv_1x1_02_shopify_adeb4c46-adc1-4526-913d-ae4d12eb9f5d_1024x1024@2x.jpg?v=1775268210', dest: 'images/hero-slide-02.jpg' },
  { url: 'https://www.neighborhood.jp/cdn/shop/files/261_nh_ia_kv_1x1_03_shopify_1024x1024@2x.jpg?v=1775268221', dest: 'images/hero-slide-03.jpg' },
  // Product images (first 8 products, primary + hover)
  { url: 'https://www.neighborhood.jp/cdn/shop/files/252AQIAN-SHM01S_01_221x221@2x.jpg?v=1771400683', dest: 'images/products/252AQIAN-SHM01S_01.jpg' },
  { url: 'https://www.neighborhood.jp/cdn/shop/files/252AQIAN-SHM01S_02_221x221@2x.jpg?v=1771400683', dest: 'images/products/252AQIAN-SHM01S_02.jpg' },
  { url: 'https://www.neighborhood.jp/cdn/shop/files/252FPIAN-CSM02S_01_221x221@2x.jpg?v=1775279679', dest: 'images/products/252FPIAN-CSM02S_01.jpg' },
  { url: 'https://www.neighborhood.jp/cdn/shop/files/252FPIAN-CSM02S_03_221x221@2x.jpg?v=1771400702', dest: 'images/products/252FPIAN-CSM02S_03.jpg' },
  { url: 'https://www.neighborhood.jp/cdn/shop/files/252FPIAN-CSM01S_01_221x221@2x.jpg?v=1775279121', dest: 'images/products/252FPIAN-CSM01S_01.jpg' },
  { url: 'https://www.neighborhood.jp/cdn/shop/files/252FPIAN-CSM01S_03_221x221@2x.jpg?v=1771400694', dest: 'images/products/252FPIAN-CSM01S_03.jpg' },
  { url: 'https://www.neighborhood.jp/cdn/shop/files/252YGIAN-HT01S_01_221x221@2x.jpg?v=1771400705', dest: 'images/products/252YGIAN-HT01S_01.jpg' },
  { url: 'https://www.neighborhood.jp/cdn/shop/files/252YGIAN-HT01S_02_221x221@2x.jpg?v=1771400705', dest: 'images/products/252YGIAN-HT01S_02.jpg' },
  { url: 'https://www.neighborhood.jp/cdn/shop/files/009_261SPNH-JKM06_01_221x221@2x.jpg?v=1775296113', dest: 'images/products/261SPNH-JKM06_01.jpg' },
  { url: 'https://www.neighborhood.jp/cdn/shop/files/261SPNH-JKM06_ID_3_221x221@2x.jpg?v=1769060454', dest: 'images/products/261SPNH-JKM06_02.jpg' },
  { url: 'https://www.neighborhood.jp/cdn/shop/files/261PCNH-ST18_03_221x221@2x.jpg?v=1775274425', dest: 'images/products/261PCNH-ST18_01.jpg' },
  { url: 'https://www.neighborhood.jp/cdn/shop/files/261PCNH-ST18_WT_2_221x221@2x.jpg?v=1769152873', dest: 'images/products/261PCNH-ST18_02.jpg' },
  { url: 'https://www.neighborhood.jp/cdn/shop/files/139_261AQNH-PTM05_02_221x221@2x.jpg?v=1775193944', dest: 'images/products/261AQNH-PTM05_01.jpg' },
  { url: 'https://www.neighborhood.jp/cdn/shop/files/261AQNH-PTM05_IN_2_221x221@2x.jpg?v=1769761364', dest: 'images/products/261AQNH-PTM05_02.jpg' },
  { url: 'https://www.neighborhood.jp/cdn/shop/files/047_261TSNH-SHM01_04_221x221@2x.jpg?v=1775297356', dest: 'images/products/261TSNH-SHM01_01.jpg' },
];

async function download(url, dest) {
  const fullPath = join(PUBLIC, dest);
  await mkdir(dirname(fullPath), { recursive: true });
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36' },
    });
    if (!res.ok) {
      console.error(`FAIL ${res.status} ${url}`);
      return;
    }
    const buf = await res.arrayBuffer();
    await writeFile(fullPath, Buffer.from(buf));
    console.log(`OK  ${dest}`);
  } catch (e) {
    console.error(`ERR ${dest}: ${e.message}`);
  }
}

// Batch parallel (4 at a time)
async function run() {
  const BATCH = 4;
  for (let i = 0; i < assets.length; i += BATCH) {
    await Promise.all(assets.slice(i, i + BATCH).map(a => download(a.url, a.dest)));
  }
  console.log('Done.');
}

run();
