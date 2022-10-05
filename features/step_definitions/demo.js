const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const { test, expect, chromium } = require('@playwright/test');
// const {getBeforeAll} = require ('./hook');
//  getBeforeAll();

Given('Login page', async function () {

    await page.locator('#login_field').fill('1');
      await page.locator('#password').fill('a');
   await page.locator("input[type='submit']").click();
});

When('Input {string} and {string}', function (string, string2) {
    console.log("write code here");
  });
Then('Login successull', function () {
    console.log("write code here");
});