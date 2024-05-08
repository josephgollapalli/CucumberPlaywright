class DashboardPage
{
    constructor(page)
    {
       this.products = page.locator('.card-body');
       this.addToCart = page.locator("[routerlink='/dashboard/cart']");
    }

    async searchProduct(productName)
    {
        const count = await this.products.count();
        console.log("Procunct conunt is "+count);

        for (let index = 0; index < count; index++) {
        const productText = await this.products.nth(index).locator("b").textContent();
        if (productText==(productName)) {
        await this.products.nth(index).locator("text= Add To Cart").click();
        break;
        }
        }
    }

    async navigateToCardPage()
    {
        await this.addToCart.click();
    }
}
module.exports = {DashboardPage};