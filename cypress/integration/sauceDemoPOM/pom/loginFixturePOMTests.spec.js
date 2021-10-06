const loginPage = require('../../../pages/loginPageXpaths')
import inventoryPage from '../../../pages/inventoryPage.js'
//import { describe } from 'mocha'

const tests = require('../../../fixtures/data-driven/users.json')

describe('Testing data driven', () => {
  
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    });
    
    tests.forEach(test => {
    
        it(test.name, () => {
            loginPage.typeUsername(test.username);
            loginPage.typePassword(test.password);
            loginPage.clickLoginButton();
    
            if(test.name === 'Try login to inventory page'){
                inventoryPage.elements.titleHeader().should('have.text', test.expected)
            }else{
                loginPage.elements.errorMessageBox().should('have.text', test.expected)
            }
    
        })
    })
})