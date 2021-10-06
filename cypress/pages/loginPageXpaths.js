class loginPageXpaths{

    elements = {
        userNameInput: () => cy.xpath('//input[@data-test="username"]'),
        passwordInput: () => cy.xpath('//input[@data-test="password"]'),
        loginButton: () => cy.xpath('//*[@type="submit"]'),
        errorMessageBox: () => cy.xpath('//h3')
    }

    typeUsername(username) {
        this.elements.userNameInput().type(username);
    }

    typePassword(password) {
        this.elements.passwordInput().type(password);
    }

    clickLoginButton(){
        this.elements.loginButton().click();
    }


}

module.exports = new loginPageXpaths();