/// <reference types="cypress" />


class HeaderPage{

    elements = {
        hamburgerButton: () => cy.get('#react-burger-menu-btn'),
        cartButton: () => cy.get('#shopping_cart_container'),
        cartCounter: () => cy.get('//*[contains(@class, "shopping_cart_badge")]')
        
    }

    clickOnHamburgerButton() {
        this.elements.hamburgerButton().click();
    }

    clickOnCartButton() {
        this.elements.cartButton().click();
    }
}

export default HeaderPage;