import { GoogleGenAI } from '@google/genai';
import fs from 'fs';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function run() {
  const images = ['public/logo1.png', 'public/logo2.png', 'public/logo3.png'];
  for (const imgPath of images) {
    if (!fs.existsSync(imgPath)) continue;
    const image = fs.readFileSync(imgPath);
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
          {
            role: 'user',
            parts: [
              {
                inlineData: {
                  data: image.toString('base64'),
                  mimeType: 'image/png'
                }
              },
              { text: `Describe the logo in ${imgPath} in extreme, exquisite detail so that a front-end developer could precisely recreate it using inline SVG. Describe the exact shapes (is it a combination of geometric shapes?), the exact text (font, weight, case), relative sizing, colors, curves, and any defining features. Break down what the logo actually looks like.` }
            ]
          }
        ]
      });
      console.log(`\n\n--- ${imgPath} ---`);
      console.log(response.text);
    } catch (e) {
      console.error(e);
    }
  }
}
run();
