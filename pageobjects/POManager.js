const {LoginPage} = require('./LoginPage');
const {DashboardPage} = require('./DashboardPage');
const {MyCartPage} = require('./MyCartPage');
const {PlaceOrderPage} = require('./PlaceOrderPage');
const {OrdersPage} = require('./OrdersPage');

class POManager
{
    constructor(page)
    {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.dashboardPage = new DashboardPage(this.page);
        this.myCartPage = new MyCartPage(this.page);
        this.placeOrderPage = new PlaceOrderPage(this.page);
        this.ordersPage = new OrdersPage(this.page);
    }

    getLoginPage(){
        return this.loginPage;
    }

    getDashboardPage(){
        return this.dashboardPage;
    }

    getMyCartPage(){
        return this.myCartPage;
    }

    getPlaceOrderPage(){
        return this.placeOrderPage;
    }

    getOrdersPage(){
        return this.ordersPage;
    }
    
}
module.exports = {POManager};