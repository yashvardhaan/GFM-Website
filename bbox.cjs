const fs = require('fs');

const svg = fs.readFileSync('src/components/Logo.tsx', 'utf-8');
const dMatch = svg.match(/d="([^"]+)"/);
if (dMatch) {
    const d = dMatch[1];
    const subpaths = d.split('M').map(s => s.trim()).filter(Boolean);
    
    subpaths.forEach((sp, i) => {
        const tokens = sp.match(/[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/g);
        if (!tokens) return;
        let minX = Infinity, maxX = -Infinity;
        // SVG paths often alternate x, y unless it's a V or H etc, but here it's all absolute (presumably M, L, C).
        // A rough approximation is to just take every pair, it might be off by one if there are single numbers but let's try.
        let isX = true;
        for (const t of tokens) {
            const val = parseFloat(t);
            if (!isNaN(val)) {
                if (val > 100) { // arbitrary threshold to ignore small params
                    // actually let's just parse it properly.
                    // Instead, let's just look at the first few numbers to see where it roughly is.
                    if (isX) {
                        minX = Math.min(minX, val);
                        maxX = Math.max(maxX, val);
                    }
                }
                isX = !isX;
            }
        }
        console.log(`Path ${i}: starts at ${tokens.slice(0, 4).join(',')} | minX: ${minX.toFixed(1)}, maxX: ${maxX.toFixed(1)}`);
    });
}
