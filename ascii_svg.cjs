const fs = require('fs');
const svg = fs.readFileSync('src/components/Logo.tsx', 'utf-8');
const dMatch = svg.match(/d="([^"]+)"/);

function getPoints(sp) {
    const tokens = sp.match(/[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/g);
    const pts = [];
    if (!tokens) return pts;
    let isX = true;
    let currX = 0;
    for (const t of tokens) {
        const val = parseFloat(t);
        if (!isNaN(val)) {
            if (isX) currX = val;
            else pts.push({x: currX, y: val});
            isX = !isX;
        }
    }
    return pts;
}

if (dMatch) {
    const d = dMatch[1];
    const subpaths = d.split('M').map(s => s.trim()).filter(Boolean);
    
    subpaths.forEach((sp, i) => {
        const pts = getPoints(sp);
        if (pts.length === 0) return;
        const minX = Math.min(...pts.map(p=>p.x));
        const maxX = Math.max(...pts.map(p=>p.x));
        const minY = Math.min(...pts.map(p=>p.y));
        const maxY = Math.max(...pts.map(p=>p.y));
        
        // render an ascii grid
        const cols = 40;
        const rows = 10;
        const grid = Array(rows).fill(0).map(() => Array(cols).fill('.'));
        
        pts.forEach(p => {
            let cx = Math.floor(((p.x - minX) / (maxX - minX || 1)) * (cols - 1));
            let cy = Math.floor(((p.y - minY) / (maxY - minY || 1)) * (rows - 1));
            grid[cy][cx] = '#';
        });
        
        console.log(`\nPath ${i}: (${minX.toFixed(1)}, ${minY.toFixed(1)}) to (${maxX.toFixed(1)}, ${maxY.toFixed(1)})`);
        grid.forEach(row => console.log(row.join('')));
    });
}
