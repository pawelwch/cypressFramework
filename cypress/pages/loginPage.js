/// <reference types="cypress" />

class loginPage{

    elements = {
        userNameInput: () => cy.get('#user-name'),
        passwordInput: () => cy.get('#password'),
        loginButton: () => cy.get("#login-button"),
        errorMessageBox: () => cy.get('h3[data-test="error"]')
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

module.exports = new loginPage();