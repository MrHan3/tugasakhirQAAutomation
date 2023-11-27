const locator = require("../support/locators/PromoLocator")

class pagePromotion {

    async validPromo()
    {
      cy.xpath(locator.promotion.dashboard).should('be.visible');
      cy.xpath(locator.promotion.dashboard_promo).click();
      cy.xpath(locator.promotion.logo_promo).contains('Viseetor Promo');
      cy.xpath(locator.promotion.code_promo).click();
      cy.xpath(locator.promotion.copy_notif).contains("Code promo already coppied to clipboard").should('be.visible');
    }

    async downloadImage()
    {
      cy.xpath(locator.promotion.dashboard_content).click();
      cy.xpath(locator.promotion.download_image_content).should('have.attr', 'href', 'https://cdnstaging.viseetor.id/socmed/1697700432456.jpeg').click();
    }

    async pesanDashboard()
    {
      cy.xpath(locator.promotion.dashboard_content).click();
      cy.xpath(locator.promotion.dashboard_message).click();
      cy.xpath(locator.promotion.logo_message).contains("Pesan").should('be.visible');
    }
}

module.exports = new pagePromotion();