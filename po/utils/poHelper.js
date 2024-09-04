const fs = require('fs');
const path = require('path');

function readJson(filePath) {
    return JSON.parse(fs.readFileSync(filePath));
}

function mergeObjects(baseObj, extendObj) {
    let newObj = {...baseObj};
    for (const key in extendObj) {
        if (newObj.hasOwnProperty(key) && typeof newObj[key] === 'object' && typeof extendObj[key] === 'object') {
            newObj[key] = mergeObjects(newObj[key], extendObj[key]);
        } else {
            newObj[key] = extendObj[key];
        }
    }
    return newObj;
}

function resolveExtends(obj, basePath) {
    let newObj = {...obj};
    for (const key in newObj) {
        if (newObj[key] && typeof newObj[key] === 'object') {
            if (newObj[key].extends) {
                const extendedPath = path.resolve(basePath, newObj[key].extends);
                const extendedData = readJson(extendedPath);
                delete newObj[key].extends;
                newObj[key] = mergeObjects(newObj[key], extendedData);
            } else {
                newObj[key] = resolveExtends(newObj[key], basePath);
            }
        }
    }
    return newObj;
}

function readSelectors(filePath) {
    return resolveExtends(readJson(filePath), filePath);
}

module.exports = {
    readSelectors
}
