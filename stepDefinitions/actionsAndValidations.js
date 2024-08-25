const {Given, When, Then} = require('@cucumber/cucumber');
const assert = require('assert');
const PageManager = require('../po/pageManager/pageManager');
const elementHelper = require('../po/utils/elementHelper');

Given('The Clock app is launched', async () => {
    PageManager.setCurrentPage("Main Page");
    const element = await elementHelper.getElement("Action Bar");
    await element.waitForDisplayed({
        timeout: 5000,
        timeoutMsg: 'Element was not displayed after 5 seconds'
    });
});

When(/^The "([^"]+)" page is set$/i, async (pageName) => {
    PageManager.setCurrentPage(pageName);
});

When(/^The "([^"]+)" element is clicked$/i, async (elementToClick) => {
    const element = await elementHelper.getElement(elementToClick);
    await element.click();
});

Then(/^The "([^"]+)" should be visible$/i, async (elementToCheck) => {
    const element = await elementHelper.getElement(elementToCheck);
    const isDisplayed = await element.isDisplayed();

    assert.strictEqual(isDisplayed, true, 'The time element is not displayed');
});

Then(/^The text of "([^"]+)" element should be "([^"]+)"$/i, async (elementToCheck, textToCheck) => {
    const element = await elementHelper.getElement(elementToCheck);
    const elementText = await element.getText();

    assert.strictEqual(elementText, textToCheck);
})
