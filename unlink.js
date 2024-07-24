const fs = require('fs');
const deleteFile = fs.unlinkSync("nuevo_archivo");
fs.unlinkSync(deleteFile);