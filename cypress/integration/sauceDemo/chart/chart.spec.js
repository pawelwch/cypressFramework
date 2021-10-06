//import { describe } from "mocha";
//<script src="/home/maryna/Pulpit/cypressFramework/cypress/support/index.js"></script>

//import { it } from "mocha"

describe('Chart', () => {
    beforeEach(() => {
        cy.login()
        cy.get('.shopping_cart_link').click()
    })

    it('Chart view is displayed properly', () => {
        cy.contains('Your Cart')
        
    })
    

})