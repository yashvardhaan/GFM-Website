import { Jimp } from "jimp";

async function main() {
  const images = ["public/logo1.png", "public/logo2.png", "public/logo3.png"];
  for (const file of images) {
    console.log(`\n\n--- ${file} ---`);
    const image = await Jimp.read(file);
    image.resize({ w: 80 });
    let ascii = "";
    for (let y = 0; y < image.bitmap.height; y++) {
      for (let x = 0; x < image.bitmap.width; x++) {
        const color = image.getPixelColor(x, y);
        const r = (color >> 24) & 255;
        const g = (color >> 16) & 255;
        const b = (color >> 8) & 255;
        const a = color & 255;
        if (a < 50 || (r > 240 && g > 240 && b > 240)) {
          ascii += " ";
        } else {
          ascii += "#";
        }
      }
      ascii += "\n";
    }
    console.log(ascii);
  }
}
main();
