class MyCartPage
{

    constructor(page)
    {
        this.page = page;
        this.checkOutBtng =  page.locator("//button[text()='Checkout']");
    }

    async checkOutTheProduct()
    {
        await this.checkOutBtng.click();
    }

}
module.exports = {MyCartPage}