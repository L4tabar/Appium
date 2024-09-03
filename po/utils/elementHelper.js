const PageManager = require('../pageManager/pageManager');

function selectorBuilder(elements, keys) {
    let currentObject = elements;
    const selectors = [];
    selectors.push(currentObject.selector);

    for (let key of keys) {
        currentObject = currentObject.children[key];
        selectors.push(
            typeof currentObject === 'string'
                ? currentObject
                : currentObject.selector
        );
    }

    return selectors.join(' ').trim();
}

function isArrayInOrder(mainArray, subArray) {
    if (mainArray.length < 1) {
        return false;
    }

    if (subArray[subArray.length - 1] !== mainArray[mainArray.length - 1]) {
        return false;
    }

    let subIndex = 0;
    for (let item of mainArray) {
        if (item === subArray[subIndex]) {
            subIndex++;
        }
        if (subIndex === subArray.length) {
            return true;
        }
    }

    return false;
}

function getElementPaths(fullPaths, fullQuery, remainingQuery, path, elementsObj) {
    for (let k in elementsObj) {
        const newPath = JSON.parse(JSON.stringify(path));
        newPath.push(k);

        if (isArrayInOrder(newPath, fullQuery)) {
            fullPaths.push(newPath);
        }

        if (fullPaths.length > 1) {
            throw new Error(`Not unique query selector!
            The ${fullQuery} can be found at multiple paths: \n
            ${fullPaths.join('\n')}`);
        }

        if (typeof elementsObj[k] === 'object' && elementsObj[k] !== null && elementsObj[k].children !== undefined) {
            getElementPaths(fullPaths, fullQuery, JSON.parse(JSON.stringify(remainingQuery)), newPath, elementsObj[k].children);
        }
    }
}


async function getElement(elementQuery) {
    const fullPath = [];
    const elements = PageManager.currentPage.elements;
    const queryParts = elementQuery.split(' in ');
    getElementPaths(fullPath, queryParts.reverse(), JSON.parse(JSON.stringify(queryParts)), [], elements.children);

    return $(selectorBuilder(elements, fullPath[0]));
}

module.exports = {
    getElement
}
