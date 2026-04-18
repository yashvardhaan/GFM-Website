const fs = require('fs');

const pathStr = "M 837 146.937 L 837 169 840.500 169 L 844 169 844 158.955 C 844 149.622, 844.174 148.735, 846.455 146.455 C 849.896 143.014, 855.144 143.096, 857.927 146.635 C 859.706 148.896, 860 150.669, 860 159.135 L 860 169 863.500 169 L 867 169 867 158.468 C 867 142.420, 864.282 138, 854.412 138 C 850.750 138, 848.523 138.587, 846.676 140.040 L 844.082 142.081 843.791 133.790 L 843.500 125.500 840.250 125.187 L 837 124.873 837 146.937";

const tokens = pathStr.match(/[MCL]|[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/g);
const pts = [];
let isX = true, cx = 0;
for(let t of tokens){
  const v = parseFloat(t);
  if(!isNaN(v)){ if(isX) cx=v; else pts.push({x:cx,y:v}); isX=!isX; }
}

const w = 40, h = 20;
const minX = Math.min(...pts.map(p=>p.x)), maxX = Math.max(...pts.map(p=>p.x));
const minY = Math.min(...pts.map(p=>p.y)), maxY = Math.max(...pts.map(p=>p.y));

const grid = Array(h).fill(0).map(()=>Array(w).fill('.'));
pts.forEach(p => {
  let x = Math.floor((p.x - minX)/(maxX - minX)*(w-1));
  let y = Math.floor((p.y - minY)/(maxY - minY)*(h-1));
  grid[y][x] = '#';
});
console.log("Path 0 (X: 837 - 867)");
grid.forEach(r => console.log(r.join('')));
