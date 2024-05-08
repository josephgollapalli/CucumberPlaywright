class OrdersPage
{
    constructor(page)
    {
        this.page = page;
        this.successMessage = page.locator('.hero-primary');
        this.orderIDText = page.locator('.em-spacer-1 label');
        this.myOrder = page.locator("button[routerlink*='myorders']");
    }

    async verifySuccessText(expect)
    {
        await expect(this.successMessage).toHaveText(" Thankyou for the order. ")
    }

    async getOrderID()
    {
        //await this.orderIDText.last().waitFor();
        const orderIdText = await this.orderIDText.last().textContent();
        const orderId = orderIdText.split(" ")[2];
        console.log("Order Id is "+orderId)
        return orderId;
    }

    async navigateToMyOrdersPage(){
        this.myOrder.click();
    }

}
module.exports = {OrdersPage};