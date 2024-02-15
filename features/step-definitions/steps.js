import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page.js';
import HomePage from '../pageobjects/home.page.js';
import AdminPage from '../pageobjects/admin.page.js';
import PIMPage from '../pageobjects/pim.page.js';

const sidenav = {
  Admin: AdminPage,
  PIM: PIMPage,
};

Given(/^I am on the login page$/, async () => {
  await LoginPage.open();
});

When(/^I login with "(.*)" credential$/, async (user) => {
  await LoginPage.login(user);
});

When(/^I click "(.*)" menu$/, async (menu) => {
  await HomePage.clickMenu(menu);
});

Then(/^I can see "(.*)" page$/, async (page) => {
  await sidenav[page].validatePage();
});

Then(/^I choose to logout$/, async () => {
  await HomePage.clickLogoutMenu();
  await LoginPage.validatePage();
});
