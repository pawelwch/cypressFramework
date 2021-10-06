import loginPage from '../../../pages/loginPage.js'
import inventoryPage from '../../../pages/inventoryPage.js'
//import { describe } from 'mocha'


const standardUser = 'standard_user'
const password = 'secret_sauce'
const wrongUsername = 'wrongusername'
const wrongPassword = 'wrongpassword'
const lockedOutUser = 'locked_out_user'
const problemUser = 'problem_user'

describe('Testing Login POM', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    });

    it('Try login to inventory page', () => {
        loginPage.typeUsername(standardUser);
        loginPage.typePassword(password);
        loginPage.clickLoginButton();

        inventoryPage.elements.titleHeader().should('have.text', 'Products');
    });

    it('Try login as locked user', () => {
        loginPage.typeUsername(lockedOutUser);
        loginPage.typePassword(password);
        loginPage.clickLoginButton();

        loginPage.elements.errorMessageBox().should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
    });

    it('Try login with incorrect Username', () => {
        loginPage.typeUsername(wrongUsername);
        loginPage.typePassword(password);
        loginPage.clickLoginButton();

        loginPage.elements.errorMessageBox().should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    });

    it('Try login with incorrect Password', () => {
        loginPage.typeUsername(standardUser);
        loginPage.typePassword(wrongPassword);
        loginPage.clickLoginButton();

        loginPage.elements.errorMessageBox().should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    });
});