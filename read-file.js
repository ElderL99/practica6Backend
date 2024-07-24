const fs = require('fs');
let show = fs.readFileSync("koders.json", { encoding: 'utf8' });

console.log(show);

