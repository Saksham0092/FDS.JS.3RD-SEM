
const fs = require('fs');
function sizeChecker(fileName) {
    const limit = 2 * 1024 * 1024; 
    const stats = fs.statSync(fileName);

    if (stats.size > limit) {
        console.log(`File should be less than ${limit} bytes. `);
    }
    else {
        console.log(`File has been submitted `);
    }

}
sizechecker("notes.txt")