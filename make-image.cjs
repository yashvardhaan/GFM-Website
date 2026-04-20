const { Jimp } = require('jimp');

async function createIcon() {
  try {
    // Because Jimp struggles with SVG, and the SVG is literally just a blue square with a white G, 
    // let's use the external PostImages bypass tactic from the user. We will generate the PNG here for them to upload.
    const image = new Jimp({ width: 1024, height: 1024, color: '#3B82F6' });
    
    // We need a font for Jimp
    const font = await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE); // 128 is too small for 1024. 
    
    // Actually, I can just use a web service to render the SVG to a PNG for me!
  } catch(e) {}
}
