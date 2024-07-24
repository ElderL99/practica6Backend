const fs = require('fs');
let show = fs.readFileSync("package.json", { encoding: 'utf8' });

console.log(show);

