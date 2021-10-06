class inventoryPage{

    elements = {
        titleHeader: () => cy.get('.title'),
        chartIcon: () => cy.get('#shopping_cart_container'),
        chartCounter: () => cy.get('//*[contains(@class, "shopping_cart_badge")]')
    }

    clickOnChartIcon() {
        this.elements.chartIcon.click();
    }

}


module.exports = new inventoryPage();