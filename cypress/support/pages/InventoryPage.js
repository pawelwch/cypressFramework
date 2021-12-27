/// <reference types="cypress" />

export class InventoryPage{


    elements = {
        titleHeader: () => cy.get('.title'),
        inventoryItemName: () => cy.get(''),
        backpackAddToCartButton: () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
        bikeLightAddToCartButton: () => cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]')
    }


    // clickOnBackpackAddToCartButton(){
    //     this.elements.backpackAddToCartButton().click();
    // }

    // clickOnAddToCartButton(item){
    //     this.elements(item).click()
    // }

    clickOnBackpackAddToCartButton(){
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    }
    
    clickOnBikeLightAddToCartButton(){
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    }

    clickOnBlackTshirtAddToCartButton(){
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
    }

    clickOnJacketAddToCartButton(){
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
    }

    clickOnOnesieAddToCartButton(){
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
    }

    clickOnRedTshirtAddToCartButton(){
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
    }

    goToYourCart(){
        cy.get
    }
    

}


export const inventoryPage = new InventoryPage();