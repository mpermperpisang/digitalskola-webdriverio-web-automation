import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page.js';
import HomePage from '../pageobjects/home.page.js';

Given(/^I am on the login page$/, async () => {
  await LoginPage.open();
});

When(/^I login with "(.*)" credential$/, async (user) => {
  await LoginPage.login(user);
});

Then(/^I should see home page$/, async () => {
  await HomePage.validateHomePage();
});
