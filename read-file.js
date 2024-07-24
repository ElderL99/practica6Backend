const fs = require('fs');
let show = fs.readFileSync("index.js", { encoding: 'utf8' });

console.log(show);

