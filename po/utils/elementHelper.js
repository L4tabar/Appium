const PageManager = require('../pageManager/pageManager');

async function getElement(element) {
    return $(PageManager.currentPage.elements[element]);
}

module.exports = {
    getElement
}
