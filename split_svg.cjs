const fs = require('fs');
const svg = fs.readFileSync('src/components/Logo.tsx', 'utf-8');
const dMatch = svg.match(/d="([^"]+)"/);
if (dMatch) {
    const d = dMatch[1];
    const subpaths = d.split('M').map(s => s.trim()).filter(Boolean);
    
    subpaths.forEach((sp, i) => {
        const testSvg = `<svg width="1584" height="396" viewBox="0 0 1584 396" xmlns="http://www.w3.org/2000/svg"><path d="M ${sp}" fill="black" /></svg>`;
        fs.writeFileSync(`path_${i}.svg`, testSvg);
    });
    console.log("Exported " + subpaths.length + " paths");
}
