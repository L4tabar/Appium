const PageObject = require('../pageObject');

class MainPage extends PageObject {
    constructor() {
        super("Main Page");
        this.elements = {
            "Action Bar": "//*[@resource-id=\"com.google.android.deskclock:id/action_bar_title\"]",
            "Clock": "//*[@resource-id=\"com.google.android.deskclock:id/digital_clock\"]",
            "Date": "//*[@resource-id=\"com.google.android.deskclock:id/date_and_next_alarm\"]",
            "Add Button": "//android.widget.Button[@content-desc=\"Add city\"]"
        }
    }
}

module.exports = MainPage;
