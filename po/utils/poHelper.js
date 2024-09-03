const fs = require('fs');
const path = require('path');

function readJson(filePath) {
    const fileData = fs.readFileSync(filePath);

    return JSON.parse(fileData);
}

function mergeObjects(baseObj, extendObj) {
    for (const key in extendObj) {
        if (baseObj.hasOwnProperty(key) && typeof baseObj[key] === 'object' && typeof extendObj[key] === 'object') {
            mergeObjects(baseObj[key], extendObj[key]);
        } else if (!baseObj.hasOwnProperty(key)) {
            baseObj[key] = extendObj[key];
        }
    }
}

function resolveExtends(obj, basePath) {
    for (const key in obj) {
        if (obj[key] && typeof obj[key] === 'object') {
            if (obj[key].extends) {
                const extendedPath = path.resolve(basePath, obj[key].extends);
                const extendedData = readJson(extendedPath);
                delete obj[key].extends;
                mergeObjects(obj[key], extendedData);
            } else {
                resolveExtends(obj[key], basePath);
            }
        }
    }
}
function readSelectors(filePath) {
    const data = readJson(filePath);
    resolveExtends(data, filePath);

    return data;
}

module.exports = {
    readSelectors
}
