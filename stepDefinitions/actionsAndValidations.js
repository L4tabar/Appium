const {Given, When, Then} = require('@cucumber/cucumber');
const assert = require('assert');
const PageManager = require('../po/pageManager/pageManager');

Given('The Clock app is launched', async () => {
    const element = await $(PageManager.pages["Main Page"].elements["Action Bar"]);
    await element.waitForDisplayed({
        timeout: 5000,
        timeoutMsg: 'Element was not displayed after 5 seconds'
    });
});

When(/^The "([^"]+)" page is set$/i, async (pageName) => {
    PageManager.setCurrentPage(pageName);
});

When(/^The "([^"]+)" element is clicked$/i, async (elementToClick) => {
    const element = await $(PageManager.currentPage.elements[elementToClick]);
    await element.click();
});

Then(/^The "([^"]+)" should be visible$/i, async (elementToCheck) => {
    const element = await $(PageManager.currentPage.elements[elementToCheck]);
    const isDisplayed = await element.isDisplayed();

    assert.strictEqual(isDisplayed, true, 'The time element is not displayed');
});

Then(/^The text of "([^"]+)" element should be "([^"]+)"$/i, async (elementToCheck, textToCheck) => {
    const element = await $(PageManager.currentPage.elements[elementToCheck]);
    const elementText = await element.getText();

    assert.strictEqual(elementText, textToCheck);
})

Then('I should see the current time', async () => {
    const timeElement = await $('//*[@resource-id="com.google.android.deskclock:id/digital_clock"]');
    const isDisplayed = await timeElement.isDisplayed();
    const dateAndNextAlarm = await $('//*[@resource-id="com.google.android.deskclock:id/date_and_next_alarm"]')
    const text = await dateAndNextAlarm.getText();

    assert.strictEqual(isDisplayed, true, 'The time element is not displayed');
    assert.strictEqual(text, "Tue, Aug 6")
});

When('The add button is clicked', async () => {
    const addButton = await $('//android.widget.Button[@content-desc="Add city"]');
    await addButton.click();
});

Then('The search should be visible', async () => {
    const searchIcon = await $('//*[@resource-id="com.google.android.deskclock:id/search_empty_view"]');
    await searchIcon.waitForDisplayed({
        timeout: 5000,
        timeoutMsg: 'Element was not displayed after 5 seconds'
    });
});
