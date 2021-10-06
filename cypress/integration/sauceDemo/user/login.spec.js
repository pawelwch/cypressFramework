// const { should } = require("chai")
// const { contains } = require("cypress/types/jquery")

//const { contains } = require("cypress/types/jquery")

//const { it } = require("mocha")

const standardUser = 'standard_user'
const password = 'secret_sauce'
const wrongUsername = 'wrongusername'
const wrongPassword = 'wrongpassword'

describe('Login in', () =>{

    beforeEach(() => {
        cy.visit('')
    })

    it('Login using correct credentials', () => {
        cy.get('#user-name').type(standardUser)
        cy.get('#password').type(password)
        cy.get('#login-button').click()
        cy.url().should('contain', '/inventory.html')
        .and
        cy.get('.title').should('be.be.visible')
    })

    it('Login passing no credentials', () => {
        cy.get('#login-button').click()
        cy.get('div>h3').should('contain', 'Username is required')

    })

    it('Login passing only Login', () =>{
        cy.get('#user-name').type(standardUser)
        cy.get('#login-button').click()
        cy.get('div>h3').should('contain', 'Password is required')
    })

    it('Login passing only Password', () =>{
        cy.get('#password').type(password)
        cy.get('#login-button').click()
        cy.get('div>h3').should('contain', 'Username is required')
    })

    it('Login passing correct username and wrong password', () =>{
        cy.get('#user-name').type(standardUser)
        cy.get('#password').type(wrongPassword)
        cy.get('#login-button').click()
        cy.get('div>h3').should('contain', 'Username and password do not match any user in this service')
    })

    it('Login passing wrong username and correct password', () =>{
        cy.get('#user-name').type(wrongUsername)
        cy.get('#password').type(password)
        cy.get('#login-button').click()
        cy.get('div>h3').should('contain', 'Username and password do not match any user in this service')
    })
    
})