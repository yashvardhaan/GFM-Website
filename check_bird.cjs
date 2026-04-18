const fs = require('fs');
let code = fs.readFileSync('src/components/Logo.tsx', 'utf-8');
const dMatch = code.match(/d="([^"]+)"/);
if (dMatch) {
    const d = dMatch[1];
    const subpaths = d.split('M').map(s => s.trim()).filter(Boolean);
    const swoosh = "M " + subpaths.find(p => p.startsWith('947.585'));
    const pts = [];
    let t = swoosh.match(/[MCL]|[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/g);
    let isX = true, cx = 0;
    for(let x of t){
      if(isNaN(parseFloat(x))) continue;
      if(isX) cx = parseFloat(x);
      else pts.push({x:cx,y:parseFloat(x)});
      isX=!isX;
    }
    const arrowPts = pts.slice(25);
    console.log(arrowPts.map(p => `(${p.x}, ${p.y})`).join("\n"));
}
