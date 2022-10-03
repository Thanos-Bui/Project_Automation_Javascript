const assert = require('assert');
const { test, expect, chromium } = require('@playwright/test');
const { Given, When, Then, BeforeAll } = require('cucumber');
BeforeAll(
    (async () => {
        const browser = await chromium.launch({ headless: false });
        const context = await browser.newContext({
            viewport: {
              width: 1280, 
              height: 720,
            }} );
        const page = await context.newPage();
        page.goto('https://translate.google.com/?hl=vi&sl=en&tl=vi&op=translate');
    })
)
Given('Login page into', function () {
    console.log("write code here");
});

When('Input username and password', function () {
    console.log("write code here");
});
Then('Login successull', function () {
    console.log("write code here");
});