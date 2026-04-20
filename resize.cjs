const { Jimp } = require('jimp');

async function resizeImage() {
  try {
    const image = await Jimp.read('public/og.png');
    
    // Decrease the size of the logo to fit properly
    image.scaleToFit({ w: 1000, h: 500 });
    
    // Create background #0F172A
    const background = new Jimp({ width: 1200, height: 630, color: '#0F172A' });
    
    background.composite(image, (1200 - image.width) / 2, (630 - image.height) / 2);
    
    await background.write('public/og-compliant.jpg');
    console.log('Successfully created compliant 1200x630 JPEG image.');
  } catch (err) {
    console.error('Error rewriting image:', err);
  }
}

resizeImage();
