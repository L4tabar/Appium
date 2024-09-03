const poHelper = require("../utils/poHelper");
const {join} = require("path");

class RootPage {
    constructor(name) {
        this.name = name;
        this.elements = poHelper.readSelectors(join(__dirname, "selectors.json"));
    }
}

module.exports = RootPage;
