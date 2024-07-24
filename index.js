const fs = require('fs');

fs.writeFileSync("nuevo_archivo.txt", '{name : adan , age : 25}', { encoding: 'utf8' });
