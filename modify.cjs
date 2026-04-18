const fs = require('fs');

let code = fs.readFileSync('src/components/Logo.tsx', 'utf-8');

const startStr = "M 947.585 141.369";
const endStr = "M 590 153.500";
const startIdx = code.indexOf(startStr);
const endIdx = code.indexOf(endStr);

if (startIdx !== -1 && endIdx !== -1) {
    const swoosh = code.substring(startIdx, endIdx);
    
    // Remove the old arrow shape
    let newCode = code.replace(swoosh, "");
    
    // Create a new upward curving graph-like arrow starting from under the 'M'
    const newArrow = `
    <path d="M 810 198 Q 950 198 1050 70" fill="none" stroke="currentColor" strokeWidth="18" strokeLinecap="round" />
    <path d="M 1010 70 L 1050 70 L 1050 110" fill="none" stroke="currentColor" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" />
`;

    // Insert it right before the closing SVG tag
    newCode = newCode.replace('</svg>', newArrow + '</svg>');
    
    fs.writeFileSync('src/components/Logo.tsx', newCode);
    console.log("Logo updated with upward graph arrow!");
} else {
    console.log("Pattern not found!");
}
