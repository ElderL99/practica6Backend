const fs = require('fs');
const deleteFile = fs.unlinkSync("koders.json");
fs.unlinkSync(deleteFile);