class PlaceOrderPage
{
constructor(page)
{
this.page = page;
this.country = page.locator("[placeholder='Select Country']");
this.suggesions = page.locator(".ta-results");
this.placeOrderBtng = page.locator('.action__submit')

}

async addShoppingDetails(countryNameSequentially)
{

    await this.country.pressSequentially(countryNameSequentially);
    await this.suggesions.waitFor();
    const suggesionsCount = await this.suggesions.locator('span').count();
    console.log("suggesionsCount is "+suggesionsCount)
    for (let index = 0; index <suggesionsCount; index++) {
     const option = await this.suggesions.locator("span").nth(index).textContent();
     console.log("Option is "+option);
     if (option ===" India") {
         await this.suggesions.locator("span").nth(index).click();
         break;
     } 
    }
}

async placeOrder()
{
    this.placeOrderBtng.click();
}


}
module.exports = {PlaceOrderPage};