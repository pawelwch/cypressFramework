/// <reference types="cypress" />

class SideBarMenuPage{
    
    elements = {
        allItemsButton: () => cy.get('#inventory_sidebar_link'),
        aboutButton: () => cy.get('#about_sidebar_link'),
        logoutButton: () => cy.get('#logout_sidebar_link'),
        resetAppStateButton: () => cy.get('#reset_sidebar_link'),
        
        mainTitle: () => cy.xpath('a[class="nav-image-link"]') // from Sauce Labs page
    }

    clickOnTheSideBarLink(elements){
        this.elements().click();
    }

    clickOnTheAllItemsButton(){
        this.elements.allItemsButton().click();
    }

    clickOnTheAboutButton(){
        this.elements.aboutButton().click();
    }

    clickOnTheLogoutButton(){
        this.elements.logoutButton().click();
    }

    clickOnTheResetAppStateButton(){
        this.elements.resetAppStateButton().click();
    }

}

export default SideBarMenuPage;