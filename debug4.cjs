const fs = require('fs');

const pathStr = "M 947.518 140.287 C 945.046 148.510, 945.901 150.337, 956.487 159.209 C 965.506 166.260, 965.574 166.349, 962.888 167.624 C 945.508 174.412, 938.225 178.242, 923.500 189.039 C 904.291 202.808, 895.254 205.965, 875.000 205.979 C 858.064 205.991, 846.044 203.974, 830.116 198.446 C 818.895 194.552, 816.340 193.980, 814.306 194.906 C 812.276 195.831, 811.931 196.612, 812.190 199.684 C 812.474 203.048, 813.086 203.713, 819.500 207.625 C 833.248 216.009, 850.046 221.339, 868.757 223.253 C 888.438 225.266, 897.266 222.622, 918.000 208.501 C 924.325 204.193, 932.650 199.151, 936.497 197.202 C 944.448 192.831, 957.202 187.362, 962.796 186.132 L 966.543 185.165";

const tokens = pathStr.match(/[MCL]|[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/g);
const pts = [];
let isX = true, cx = 0;
for(let t of tokens){
  const v = parseFloat(t);
  if(!isNaN(v)){ if(isX) cx=v; else pts.push({x:cx,y:v}); isX=!isX; }
}

const w = 80, h = 40;
const minX = Math.min(...pts.map(p=>p.x)), maxX = Math.max(...pts.map(p=>p.x));
const minY = Math.min(...pts.map(p=>p.y)), maxY = Math.max(...pts.map(p=>p.y));

const grid = Array(h).fill(0).map(()=>Array(w).fill('.'));
pts.forEach(p => {
  let x = Math.floor((p.x - minX)/(maxX - minX)*(w-1));
  let y = Math.floor((p.y - minY)/(maxY - minY)*(h-1));
  grid[y][x] = '#';
});
console.log("Path 4 (X: 811.9 - 966.5)");
grid.forEach(r => console.log(r.join('')));
