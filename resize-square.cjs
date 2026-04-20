const { Jimp } = require('jimp');

async function resizeImage() {
  try {
    const image = await Jimp.read('public/og.png');
    
    // Microsoft Teams often crops link previews into squares.
    // If we make a perfect 1200x1200 square with plenty of padding, nothing gets cut off!
    image.scaleToFit({ w: 800, h: 400 });
    
    // Create a 1200 x 1200 square background #0F172A
    const background = new Jimp({ width: 1200, height: 1200, color: '#0F172A' });
    
    // Center the image perfectly
    background.composite(image, (1200 - image.width) / 2, (1200 - image.height) / 2);
    
    await background.write('public/teams-perfect-logo.png');
    console.log('Successfully created MS Teams square image.');
  } catch (err) {
    console.error('Error rewriting image:', err);
  }
}

resizeImage();
