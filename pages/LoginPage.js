class LoginPage {

    constructor(page){
        this.page = page;

        this.username = '#user-name';
        this.password = '#password';
        this.loginButton = '#login-button';
        this.productTitle = '.title';
    }

    async launchApplication(){
        await this.page.goto('https://www.saucedemo.com/');
    }

    async enterCredentials(user, pass){
        await this.page.fill(this.username, user);
        await this.page.fill(this.password, pass);
    }

    async clickLogin(){
        await this.page.click(this.loginButton);
    }

    async verifyHomePage(){
        await this.page.waitForSelector(this.productTitle);
    }
}

module.exports = LoginPage;