const PageManager = require('../pageManager/pageManager');

function selectorBuilder(elementsTree, keys) {
    let currentElements = elementsTree;
    const selectors = [];
    selectors.push(currentElements.selector);

    for (let key of keys) {
        currentElements = currentElements.children[key];
        selectors.push(
            typeof currentElements === 'string'
                ? currentElements
                : currentElements.selector
        );
    }

    return selectors.join(' ').trim();
}

function isTheLastElementDifferent(firstArray, secondArray) {
    return firstArray[firstArray.length - 1] !== secondArray[secondArray.length - 1];
}

function areTheElementsProperlyNested(fullPath, relativePath) {
    if (fullPath.length < 1 || isTheLastElementDifferent(fullPath, relativePath)) return false;

    let subIndex = 0;
    for (let item of fullPath) {
        if (item === relativePath[subIndex]) {
            subIndex++;
            if (subIndex === relativePath.length) return true;
        }
    }

    return false;
}

function getPathsToAnElement(querySelectorParts, elementsObj, path = []) {
    let fullPathsToAnElement = [];
    for (let key in elementsObj) {
        const newPath = [...path, key];

        if (areTheElementsProperlyNested(newPath, querySelectorParts)) {
            fullPathsToAnElement.push(newPath);
        }

        if (typeof elementsObj[key] === 'object' && elementsObj[key] !== null && elementsObj[key].children) {
            const childPaths = getPathsToAnElement(querySelectorParts, elementsObj[key].children, newPath);
            fullPathsToAnElement = fullPathsToAnElement.concat(childPaths);
        }
    }
    return fullPathsToAnElement;
}


async function getElement(elementQuery) {
    const querySelectorParts = elementQuery.split(' in ').reverse();
    const fullPathsToAnElement = getPathsToAnElement(querySelectorParts, PageManager.currentPage.elements.children);

    if (fullPathsToAnElement.length > 1) {
        throw new Error(`Not unique query selector!
            The query '${elementQuery}' can be found at multiple paths:
            ${fullPathsToAnElement.map(path => path.join(' > ')).join('\n')}`);
    } else if (fullPathsToAnElement.length === 0) {
        throw new Error(`No matching elements found for the query '${elementQuery}'.`);
    }

    return $(selectorBuilder(PageManager.currentPage.elements, fullPathsToAnElement[0]));
}

module.exports = {
    getElement
}
