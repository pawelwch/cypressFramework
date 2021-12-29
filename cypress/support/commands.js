import loginPage from './page_objects/LoginPage'

const standardUser = 'standard_user'
const password = 'secret_sauce'
const wrongUsername = 'wrongusername'
const wrongPassword = 'wrongpassword'

beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
})

Cypress.Commands.add('login', () => {
    cy.get('#user-name').type(standardUser)
    cy.get('#password').type(password)
    cy.get('#login-button').click()
    cy.url().should('contain', '/inventory.html')
})

Cypress.Commands.add('loginViaPom', () => {
    loginPage.typeUsername(standardUser)
    loginPage.typePassword(password)
    loginPage.clickLoginButton();
})

Cypress.Commands.add("getByDataTestSelector", (selector, ...args) => {
    return cy.get(`[data-test=${selector}]`, ...args);
  });