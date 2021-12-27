/// <reference types="cypress" />

import HeaderPage from "../../../support/pages/HeaderPage"
import LoginPage from "../../../support/pages/LoginPage";
import SideBarMenuPage from "../../../support/pages/SideBarMenuPage"

describe('Sidebar menu testing', () => {

    const headerPage = new HeaderPage();
    const sideBarMenuPage = new SideBarMenuPage();


    beforeEach(() => {
        cy.login();
    })
    
    it('Click on the "All items" button and show whole inventory', () => {
        headerPage.clickOnHamburgerButton()
        cy.contains('All Items').should('be.visible')
        sideBarMenuPage.clickOnTheAllItemsButton();
    })

    it('Click on the "About" button and see about details', () => {
        headerPage.clickOnHamburgerButton()
        cy.contains('About').should('be.visible')
        sideBarMenuPage.clickOnTheAboutButton()
        cy.url().should('eq', 'https://saucelabs.com/')
        cy.contains('.link-list', 'Try it free')
        //todo 
    })

    it.only('Click on the "Logout" button and see if user logged out', () => {
        headerPage.clickOnHamburgerButton()
        cy.contains('Logout').should('be.visible')
        sideBarMenuPage.clickOnTheLogoutButton();

        cy.url().should('eq', 'https://www.saucedemo.com/')
        cy.get('[data-test="login-button"]').should('be.visible')
    })

    // continue after feature implementation
    // it('Click on the "Reset App State" button and see if state reseted', () => {
    //     headerPage.clickOnHamburgerButton()
    //     cy.contains('Reset App State').should('be.visible')
    //     sideBarMenuPage.clickOnTheResetAppStateButton();
    // })

})