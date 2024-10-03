const RootPage = require('../rootPage');
const poHelper = require("../../utils/poHelper");
const {join} = require("path");

class SearchPage extends RootPage {
    constructor() {
        super("Search Page");
        this.elements.children["Search Page"] = poHelper.readSelectors(join(__dirname, "selectors.json"));
    }
}

module.exports = SearchPage;
