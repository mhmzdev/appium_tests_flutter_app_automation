const { expect, browser, $ } = require('@wdio/globals')
const find = require('appium-flutter-finder')

describe('My Test Application', () => {
    it('Increment counter', async () => {
        await browser.pause(2000);

        const fabButton = find.byValueKey('increment')
        await driver.elementClick(fabButton);
        await driver.elementClick(fabButton);
        await driver.elementClick(fabButton);

        // Verify the counter text has changed
        const counterText = find.byValueKey('counter');
        const text = await driver.getElementText(counterText);
        expect(text).toBe('3');
    })
})

