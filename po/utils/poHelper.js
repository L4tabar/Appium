const fs = require('fs');

function readSelectors(path) {
    return JSON.parse(fs.readFileSync(path));
}

module.exports = {
    readSelectors
}
