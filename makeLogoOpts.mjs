import fs from 'fs';

const svg2 = fs.readFileSync('public/assets/logo2.svg', 'utf8');

function toReact(svgStr, name) {
  let content = svgStr.replace(/xmlns=".*?"/, '');
  content = content.replace(/version=".*?"/, '');
  content = content.replace(/fill-rule/g, 'fillRule');
  content = content.replace(/fill="white"/g, 'fill="currentColor"');
  // inject className prop support
  content = content.replace(/<svg /, '<svg className={className} ');
  return `export function ${name}({ className = "" }: { className?: string }) {\n  return (\n    ${content}\n  );\n}`;
}

const out = `
import React from 'react';

${toReact(svg2, 'LogoHorizontal')}
`;

fs.writeFileSync('src/components/Logo.tsx', out);
console.log('Created Logo.tsx with currentColor');
