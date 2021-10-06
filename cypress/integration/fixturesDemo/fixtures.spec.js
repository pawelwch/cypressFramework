describe('Fixtures Test', function () {
    beforeEach(function() {
        cy.visit('https://www.saucedemo.com/');

        cy.fixture('fixtures-demo/sauceCredentials')
        .then(credentials => {
            this.credentials = credentials;
        })
    });   

        it('Login standard user', function() {
            cy.get('[data-test="username"]').type(this.credentials.standardUser);
            cy.get('[data-test="password"]').type(this.credentials.password);
            cy.get('[data-test="login-button"]').click();

            cy.get('.title').should('contain.text', 'Products')
        })

        it('Login locked out user', function() {
            cy.get('[data-test="username"]').type(this.credentials.lockedOutUser);
            cy.get('[data-test="password"]').type(this.credentials.password);
            cy.get('[data-test="login-button"]').click();

            cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Sorry, this user has been locked out.')
        })

        it('Login with incorrect Username', function() {
            cy.get('[data-test="username"]').type(this.credentials.wrongUsername);
            cy.get('[data-test="password"]').type(this.credentials.password);
            cy.get('[data-test="login-button"]').click();

            cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service')
        })

        it('Login with incorrect Password', function() {
            cy.get('[data-test="username"]').type(this.credentials.standardUser);
            cy.get('[data-test="password"]').type(this.credentials.wrongPassword);
            cy.get('[data-test="login-button"]').click();

            cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service')
        })
    })