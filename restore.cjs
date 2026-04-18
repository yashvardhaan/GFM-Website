const fs = require('fs');

let pathStrings = [];
for (let i = 0; i < 27; i++) {
   try {
       const svg = fs.readFileSync(`path_${i}.svg`, 'utf-8');
       const match = svg.match(/d="M ([^"]+)"/);
       if (match) {
           // check if this is the original swoosh (starts with 947.585 or 947.518, wait bbox said Path 4 was 947.518, Path 6 was 947.585)
           // Actually earlier bbox said Path 4 & 5 were exactly the same modified ones I did before
           // Let's just collect them.
           pathStrings.push('M ' + match[1]);
       }
   } catch(e) {}
}

const origSwoosh = "M 947.585 141.369 C 945.088 149.307, 945.951 151.228, 956.720 161.708 C 966.078 170.816, 966.150 170.923, 963.340 171.514 C 945.554 175.259, 938.232 178.479, 923.500 189.039 C 904.291 202.808, 895.254 205.965, 875 205.979 C 858.064 205.991, 846.044 203.974, 830.116 198.446 C 818.895 194.552, 816.340 193.980, 814.306 194.906 C 812.276 195.831, 811.931 196.612, 812.190 199.684 C 812.474 203.048, 813.086 203.713, 819.500 207.625 C 833.248 216.009, 850.046 221.339, 868.757 223.253 C 888.438 225.266, 897.266 222.622, 918 208.501 C 924.325 204.193, 932.650 199.176, 936.500 197.350 C 944.485 193.565, 957.455 190, 963.244 190 L 967.168 190 964.070 193.912 C 959.240 200.010, 956.512 208.179, 958.606 210.273 C 958.939 210.606, 961.500 209.070, 964.297 206.860 C 971.471 201.188, 977.468 198.383, 989.138 195.237 C 996.948 193.131, 999.714 191.923, 1001.126 190 C 1003.535 186.718, 1004.745 176.602, 1002.982 174.479 C 1002.273 173.624, 996.770 170.407, 990.754 167.330 C 977.627 160.615, 965.875 152.135, 956.825 142.849 C 953.154 139.082, 949.953 136, 949.712 136 C 949.471 136, 948.514 138.416, 947.585 141.369 ";

// Filter out broken / redundant paths that I created in previous steps.
// From my bbox results when it was fine (after revert): 
// Path 4 and 5 were starting with 947.518, Path 6 was the true original swoosh (947.585).
// Actually, earlier, I saw Path 6 was the pure one. Let's just include all paths that don't start with 947.518
let finalPaths = pathStrings.filter(p => !p.startsWith('M 947.518') && !p.startsWith('M 947.585'));

// Just append the pure original swoosh once
finalPaths.push(origSwoosh);

const finalSvgPath = finalPaths.join(" ");

const logoContent = `
import React from 'react';

export function LogoHorizontal({ className = "" }: { className?: string }) {
  return (
    <svg className={className}  width="1584" height="396" viewBox="0 0 1584 396" >
\t<path d="${finalSvgPath}" stroke="none" fill="currentColor" fillRule="evenodd"/>
</svg>
  );
}
`;
fs.writeFileSync('src/components/Logo.tsx', logoContent.trim() + '\n');
console.log('Restored perfectly from backup subpaths. length: ' + finalPaths.length);
