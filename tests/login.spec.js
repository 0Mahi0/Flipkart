const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

test('Flipkart Login Automation', async ({ page }) => {

    const login = new LoginPage(page);

    await login.launchApplication();

    await login.enterCredentials(
        'standard_user',
        'secret_sauce'
    );

    await login.clickLogin();

    await login.verifyHomePage();

    await expect(page.locator('.title')).toHaveText('Products');

});