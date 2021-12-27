import { loginPage } from '../../../support/pages/LoginPage'
import { inventoryPage } from '../../../support/pages/InventoryPage'

describe('Cart tests', () => {

    beforeEach(() => {
        cy.login()
        cy.contains('[class="title"]', 'Products').should('be.visible')
    })

    it('Chart view is displayed properly', () => {
        cy.get('.shopping_cart_link').click()
        cy.get('[class="title"]').contains('Your Cart').should('be.visible')
    })

    it.only('Add to cart backpack and go through payment process ', () => {
        inventoryPage.clickOnBackpackAddToCartButton()
        cy.get('.shopping_cart_link').invoke('text').then( value => {
            expect(value).to.equal('1')
        })
        
        



    })

    it('Add to cart bike light and go through payment process ', () => {
        
    })

})