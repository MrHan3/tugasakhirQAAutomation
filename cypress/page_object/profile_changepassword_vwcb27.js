const locator = require("../support/locators/DashboardLocator");
const locatorProfile = require("../support/locators/ProfileLocators");


class profile {
    async changePassword(newPassword)
    {
        cy.xpath(locator.dashboard.dropdown_menu).click();
        cy.xpath(locatorProfile.profileLocators.dropdown_profile).click();
        cy.xpath(locatorProfile.profileLocators.btn_changepass).click();
        cy.xpath(locatorProfile.profileLocators.type_password).type(newPassword);
        cy.xpath(locatorProfile.profileLocators.retype_pass).type(newPassword);
        cy.xpath(locatorProfile.profileLocators.btn_submitpass).click();
        cy.xpath(locatorProfile.profileLocators.profile_logo).should('contain', "Profil Saya");
    }

    async changeInformation(medsos)
    {
        cy.xpath(locator.dashboard.dropdown_menu).click();
        cy.xpath(locatorProfile.profileLocators.dropdown_profile).click();
        cy.xpath(locatorProfile.profileLocators.btn_changeprofile).click();
        cy.xpath(locatorProfile.profileLocators.kolom_medson).clear().type(medsos);
        cy.xpath(locatorProfile.profileLocators.btn_submitchange).click();
        cy.xpath('//td').should('contain', medsos);
    }
}

module.exports = new profile();