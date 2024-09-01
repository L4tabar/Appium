const PageObject = require('../PageObject');
const poHelper = require("../../utils/poHelper");
const {join} = require("path");

class SearchPage extends PageObject {
    constructor() {
        super("Search Page");
        this.elements = poHelper.readSelectors(join(__dirname, "selectors.json"));
    }
}

module.exports = SearchPage;
