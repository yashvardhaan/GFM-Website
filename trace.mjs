import potrace from 'potrace';
import fs from 'fs';

fs.mkdirSync('public/assets', { recursive: true });

potrace.trace('public/logo2.png', { color: 'white', optTolerance: 0.2 }, function(err, svg) {
  if (err) throw err;
  fs.writeFileSync('public/assets/logo2.svg', svg);
  console.log('Traced logo2.svg');
});

potrace.trace('public/logo3.png', { color: 'white', optTolerance: 0.2 }, function(err, svg) {
  if (err) throw err;
  fs.writeFileSync('public/assets/logo3.svg', svg);
  console.log('Traced logo3.svg');
});
