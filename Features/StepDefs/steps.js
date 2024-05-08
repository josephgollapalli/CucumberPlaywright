const {Given,When,Then} = require('@cucumber/cucumber')
const {POManager} = require('../../pageobjects/POManager')
const {expect} = require('@playwright/test')
const playwright = require('@playwright/test')
const countryName = "Ind"

Given('Login to ecommerce application with {string} and {string}',{timeout: 10 * 5000}, async function (username, password) {
    const browser = await playwright.chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()
    this.poManager = new POManager(page)
    const loginPage = this.poManager.getLoginPage()
    await page.goto("https://rahulshettyacademy.com/client/")
    await loginPage.validLogin(username,password)
});

When('add {string} to the cart', async function (productName) {
    const dashboardPage = this.poManager.getDashboardPage();
    await dashboardPage.searchProduct(productName);
    await dashboardPage.navigateToCardPage();
});

Then('verify {string} is displayed in the cart',{timeout: 10 * 5000}, async function (string) {
    const myCartPage = this.poManager.getMyCartPage();
    await myCartPage.checkOutTheProduct();
});

When('Enter valid details and place the Order', async function () {
    const placeOrderPage = this.poManager.getPlaceOrderPage();
    await placeOrderPage.addShoppingDetails(countryName);
    await placeOrderPage.placeOrder();
});

Then('verify order in present in the order history', async function () {
    const ordersPage = this.poManager.getOrdersPage();
    ordersPage.verifySuccessText(expect);
    console.log("Order Id is "+ await ordersPage.getOrderID());
    await ordersPage.navigateToMyOrdersPage();
});
