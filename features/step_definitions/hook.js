const { Given, When, Then, Before } = require('@cucumber/cucumber');
const { BeforeAll } = require('@cucumber/cucumber');
const { test, expect, chromium } = require('@playwright/test');
BeforeAll(
    async () => {
        const browser = await chromium.launch({ headless: false });
        const context = await browser.newContext({
            viewport: {
                width: 1280,
                height: 720,
            }
        });
        page = await context.newPage();
        await page.goto('https://github.com/login');
    }
)

