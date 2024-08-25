const PageObject = require('../pageObject');
const poHelper = require('../../utils/poHelper');
const {join} = require("path");

class MainPage extends PageObject {
    constructor() {
        super("Main Page");
        this.elements = poHelper.readSelectors(join(__dirname, "selectors.json"));
    }
}

module.exports = MainPage;
