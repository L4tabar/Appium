const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

Given('I launch the clock app', async () => {
    const title = await $('//*[@resource-id="com.google.android.deskclock:id/action_bar_title"]');
    await title.waitForDisplayed({
        timeout: 5000,
        timeoutMsg: 'Element was not displayed after 5 seconds'
    });
});

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
