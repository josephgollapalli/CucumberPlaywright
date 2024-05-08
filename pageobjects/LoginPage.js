class LoginPage
{

constructor(page)
{
this.page = page;
this.userName = page.locator('#userEmail');
this.password =  page.locator('#userPassword');
this.signInBtng = page.locator('#login');
}

async openURL(){
    await this.page.goTo("https://rahulshettyacademy.com/client/");
}

async validLogin(email,password)
{
    await this.userName.fill(email);
    await this.password.fill(password);
    await this.signInBtng.click();
    await this.page.waitForLoadState('networkidle');
}
}
module.exports = {LoginPage};