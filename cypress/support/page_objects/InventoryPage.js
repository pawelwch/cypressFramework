/// <reference types="cypress" />

export class InventoryPage{


    elements = {
        backpackAddToCartButton: 'add-to-cart-sauce-labs-backpack',
        bikeLightAddToCartButton: 'add-to-cart-sauce-labs-bike-light',
        blackTshirtAddToCartButton: 'add-to-cart-sauce-labs-bolt-t-shirt',
        jacketAddToCartButton: 'add-to-cart-sauce-labs-fleece-jacket',
        onesieAddToCartButton: 'add-to-cart-sauce-labs-onesie',
        redTshirtAddToCartButton: 'add-to-cart-test.allthethings()-t-shirt-(red)'
    }


    // clickOnBackpackAddToCartButton(){
    //     this.elements.backpackAddToCartButton().click();
    // }

    // clickOnAddToCartButton(item){
    //     this.elements(item).click()
    // }
    clickAddToCartButton(item){
        cy.getByDataTestSelector(item).click()
    }
    

    // clickOnBackpackAddToCartButton(){
    //     cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    // }
    
    // clickOnBikeLightAddToCartButton(){
    //     cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    // }

    // clickOnBlackTshirtAddToCartButton(){
    //     cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
    // }

    // clickOnJacketAddToCartButton(){
    //     cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
    // }

    // clickOnOnesieAddToCartButton(){
    //     cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
    // }

    // clickOnRedTshirtAddToCartButton(){
    //     cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
    // }
    

}


export const inventoryPage = new InventoryPage();