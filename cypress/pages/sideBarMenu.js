/// <reference types="cypress" />

class sideBarMenu{
    
    elements = {
        allItemsButton: () => cy.get('#inventory_sidebar_link'),
        aboutButton: () => cy.get('#about_sidebar_link'),
        logoutButton: () => cy.get('logout_sidebar_link'),
        resetAppStateButton: () => cy.get('reset_sidebar_link')
    }

}