const fs = require('fs');

const orig = "M 947.585 141.369 C 945.088 149.307, 945.951 151.228, 956.720 161.708 C 966.078 170.816, 966.150 170.923, 963.340 171.514 C 945.554 175.259, 938.232 178.479, 923.500 189.039 C 904.291 202.808, 895.254 205.965, 875 205.979 C 858.064 205.991, 846.044 203.974, 830.116 198.446 C 818.895 194.552, 816.340 193.980, 814.306 194.906 C 812.276 195.831, 811.931 196.612, 812.190 199.684 C 812.474 203.048, 813.086 203.713, 819.500 207.625 C 833.248 216.009, 850.046 221.339, 868.757 223.253 C 888.438 225.266, 897.266 222.622, 918 208.501 C 924.325 204.193, 932.650 199.176, 936.500 197.350 C 944.485 193.565, 957.455 190, 963.244 190 L 967.168 190 964.070 193.912 C 959.240 200.010, 956.512 208.179, 958.606 210.273 C 958.939 210.606, 961.500 209.070, 964.297 206.860 C 971.471 201.188, 977.468 198.383, 989.138 195.237 C 996.948 193.131, 999.714 191.923, 1001.126 190 C 1003.535 186.718, 1004.745 176.602, 1002.982 174.479 C 1002.273 173.624, 996.770 170.407, 990.754 167.330 C 977.627 160.615, 965.875 152.135, 956.825 142.849 C 953.154 139.082, 949.953 136, 949.712 136 C 949.471 136, 948.514 138.416, 947.585 141.369 ";

let tokensStr = orig.replace("L 967.168 190 964.070 193.912", "L 967.168 190 L 964.070 193.912");
const tokens = tokensStr.match(/[MCL]|[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/g);

const pivotX = 940;
function bend(x, y) {
    if (x <= pivotX) return { x, y };
    const dx = x - pivotX;
    
    // A bird taking flight: aggressive exponential tip curve.
    // Bend up by a significant but smooth quadratic amount.
    const bendFactor = 0.015; // 0.015 * 60^2 ~ 54 px upwards
    const sweepUp = bendFactor * dx * dx;
    
    // Compress inward locally so the tail doesn't elongate out of proportion
    // (A swooping curve usually foreshortens horizontally)
    const angle = Math.atan2(bendFactor * 2 * dx, 1);
    const xCompress = dx * (1 - Math.cos(angle)) * 0.5;

    return { x: x - xCompress, y: y - sweepUp };
}

let newTokens = [];
let i = 0;
while (i < tokens.length) {
    const t = tokens[i];
    if (t === 'M' || t === 'L') {
        newTokens.push(t);
        const x = parseFloat(tokens[i+1]);
        const y = parseFloat(tokens[i+2]);
        const b = bend(x, y);
        newTokens.push(b.x.toFixed(3), b.y.toFixed(3));
        i += 3;
    } else if (t === 'C') {
        newTokens.push("C");
        for (let j = 0; j < 3; j++) {
            const x = parseFloat(tokens[i + 1 + j*2]);
            const y = parseFloat(tokens[i + 2 + j*2]);
            const b = bend(x, y);
            newTokens.push(b.x.toFixed(3) + (j < 2 ? "," : ""));
            newTokens.push(b.y.toFixed(3) + (j < 2 ? "," : ""));
        }
        i += 7;
    } else {
        break;
    }
}

let newStr = newTokens.join(' ').replace(/, /g, ',').replace(/ ,/g, ',') + " ";

let code = fs.readFileSync('src/components/Logo.tsx', 'utf-8');
code = code.replace(orig, newStr);
fs.writeFileSync('src/components/Logo.tsx', code);
console.log("Arrow bird curve applied!");
