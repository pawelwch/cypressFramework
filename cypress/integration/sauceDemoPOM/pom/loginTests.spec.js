import { loginPage } from '../../../support/pages/LoginPage'
import { inventoryPage } from '../../../support/pages/InventoryPage'

describe('Testing Login POM', () => {


    const homeUrl = 'https://www.saucedemo.com/'
    const inventoryPath = '/inventory.html'


    beforeEach(function() {
        cy.visit('https://www.saucedemo.com/');
        cy.fixture('fixtures-demo/loginCredentials').then(credentials => {
            this.credentials = credentials;
        })
        cy.fixture('fixtures-demo/loginValidation').then(loginErrors => {
            this.loginErrors = loginErrors;
        })
    });

    it.only('Login to application passing valid Username and valid Password', function() {
        loginPage.typeUsername(this.credentials.standardUser);
        loginPage.typePassword(this.credentials.password);
        loginPage.clickLoginButton();

        inventoryPage.elements.titleHeader().should('have.text', 'Products');
        cy.url().should('contain', inventoryPath)
        cy.url().should('contain', '/inventory.html')
    });

    it('Login to application with no Username and no Password', function() {
        loginPage.clickLoginButton();

        loginPage.elements.errorMessageBox().should('have.text', this.loginErrors.usernameIsRequiredError)
        loginPage.elements.errorMessageBox().should('have.text', 'Epic sadface: Username is required')
        cy.url().should('equal', homeUrl)
    });

    it('Login to application passing only Username', function() {
        loginPage.typeUsername(this.credentials.standardUser);
        loginPage.clickLoginButton();

        loginPage.elements.errorMessageBox().should('have.text', this.loginErrors.passwordIsRequiredError)
        loginPage.elements.errorMessageBox().should('have.text', 'Epic sadface: Password is required')
        cy.url().should('equal', homeUrl)
    });

    it('Login to application only passing only Password', function() {
        loginPage.typePassword(this.credentials.password);
        loginPage.clickLoginButton();

        loginPage.elements.errorMessageBox().should('have.text', this.loginErrors.usernameIsRequiredError)
        loginPage.elements.errorMessageBox().should('have.text', 'Epic sadface: Username is required')
        cy.url().should('equal', homeUrl)
    });

    it('Login to application passing as lockedout user credentials', function() {
        loginPage.typeUsername(this.credentials.lockedOutUser);
        loginPage.typePassword(this.credentials.password);
        loginPage.clickLoginButton();

        loginPage.elements.errorMessageBox().should('have.text', this.loginErrors.userIsLockedoutError)
        loginPage.elements.errorMessageBox().should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
        cy.url().should('equal', homeUrl)

    });

    it('Login to application passing invalid Username and valid Password', function() {
        loginPage.typeUsername(this.credentials.wrongUsername);
        loginPage.typePassword(this.credentials.password);
        loginPage.clickLoginButton();

        loginPage.elements.errorMessageBox().should('have.text', this.loginErrors.usernameAndPasswordDoesNotMatchError)
        loginPage.elements.errorMessageBox().should('have.text', 'Epic sadface: Username and password do not match any user in this service')
        cy.url().should('equal', homeUrl)
    });

    it('Login to application passing valid Username and invalid Password', function() {
        loginPage.typeUsername(this.credentials.standardUser);
        loginPage.typePassword(this.credentials.wrongPassword);
        loginPage.clickLoginButton();


        loginPage.elements.errorMessageBox().should('have.text', this.loginErrors.usernameAndPasswordDoesNotMatchError)
        cy.url().should('equal', homeUrl)
        loginPage.elements.errorMessageBox().should('have.text', 'Epic sadface: Username and password do not match any user in this service')
        cy.url().should('equal', homeUrl)
    });
});