const locator = require("../support/locators/DashboardLocator")

class validDashboard {

    async assertDashboard()
    {
        cy.xpath(locator.dashboard.logo_dashboard).should('be.visible');
    }

    async logoutDashboard()
    {
        cy.xpath(locator.dashboard.dropdown_menu).click();
        cy.xpath(locator.dashboard.logout_btn).click();
    }
}

module.exports = new validDashboard();