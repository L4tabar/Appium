const RootPage = require('../rootPage');
const poHelper = require("../../utils/poHelper");
const {join} = require("path");

class AlarmPage extends RootPage {
    constructor() {
        super("Alarm Page");
        this.elements.children["Alarm Page"] = poHelper.readSelectors(join(__dirname, "selectors.json"));
    }
}

module.exports = AlarmPage;
