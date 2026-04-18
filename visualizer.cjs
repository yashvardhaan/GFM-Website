const fs = require('fs');
const svg = fs.readFileSync('src/components/Logo.tsx', 'utf-8');
const dMatch = svg.match(/d="([^"]+)"/);
if (dMatch) {
    const d = dMatch[1];
    const subpaths = d.split('M').map(s => s.trim()).filter(Boolean).map(s => 'M ' + s);
    const html = `
    <html><body>
    ${subpaths.map((sp, i) => `
        <div style="margin-bottom: 20px; border: 1px solid red; display: inline-block;">
            <div>Path ${i}</div>
            <svg width="2000" height="400" viewBox="0 0 1584 396">
                <path d="${sp}" fill="black" />
            </svg>
        </div>
    `).join('')}
    </body></html>
    `;
    fs.writeFileSync('paths.html', html);
    
    // Also log the index and bbox roughly
    // Wait, let's just log each subpath directly
}
