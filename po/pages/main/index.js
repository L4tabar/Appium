const RootPage = require('../rootPage');
const poHelper = require('../../utils/poHelper');
const {join} = require("path");

class MainPage extends RootPage {
    constructor() {
        super("Main Page");
        this.elements.children["Main Page"] = poHelper.readSelectors(join(__dirname, "selectors.json"));
    }
}

module.exports = MainPage;
