import Jimp from 'jimp';

async function resizeImage() {
  try {
    const image = await Jimp.read('public/og.png');
    
    // Create a new 1200x630 background matching #0F172A
    // Hex: 0x0F172AFF
    const background = new Jimp(1200, 630, 0x0F172AFF);
    
    // Scale the logo to fit within 1000 width or 500 height (leaving margins)
    image.scaleToFit(1000, 500);
    
    // Center it on the background
    const x = (1200 - image.bitmap.width) / 2;
    const y = (630 - image.bitmap.height) / 2;
    background.composite(image, x, y);
    
    // Save as high-quality JPEG
    await background.quality(90).writeAsync('public/og-image.jpg');
    console.log('Successfully created compliant 1200x630 JPEG image.');
  } catch (err) {
    console.error('Error rewriting image:', err);
  }
}

resizeImage();
