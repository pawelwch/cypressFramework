
const standardUser = 'standard_user'
const password = 'secret_sauce'
const wrongUsername = 'wrongusername'
const wrongPassword = 'wrongpassword'

Cypress.Commands.add('login', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type(standardUser)
    cy.get('#password').type(password)
    cy.get('#login-button').click()
    cy.url().should('contain', '/inventory.html')
})
