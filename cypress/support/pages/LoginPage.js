/// <reference types="cypress" />

export class LoginPage{

    elements = {
        userNameInput: () => cy.get('[data-test="username"]'),
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



export const loginPage = new LoginPage()