const PageObject = require('../PageObject');

class SearchPage extends PageObject {
    constructor() {
        super("Search Page");
        this.elements = {
            "Search Bar": "//*[@resource-id=\"com.google.android.deskclock:id/search_empty_view\"]",
        }
    }
}

module.exports = SearchPage;
