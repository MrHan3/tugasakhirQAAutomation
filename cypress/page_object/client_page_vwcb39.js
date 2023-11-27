const locator = require("../support/locators/PromoLocator");
const clientLocator = require("../support/locators/ClientLocator");


class clientPage {
    async addClient(industryType, clientName, description, address, regency, contact, email, phone, webs, statusClient){
        cy.xpath(locator.promotion.dashboard).should('be.visible');
        cy.xpath(clientLocator.client.client_dropdown).click();
        cy.xpath(clientLocator.client.client_active).click();
        cy.xpath(clientLocator.client.btn_addclient).click();
        cy.xpath(clientLocator.client.select_industry).select(industryType, {force: true});
        cy.xpath(clientLocator.client.company_name).type(clientName);
        cy.xpath(clientLocator.client.description).type(description);   
        cy.xpath(clientLocator.client.address_box).type(address);
        cy.xpath(clientLocator.client.regency_select).select(regency, {force: true});
        cy.xpath(clientLocator.client.contact_p).type(contact);
        cy.xpath(clientLocator.client.email_cl).type(email);
        cy.xpath(clientLocator.client.phone_no).type(phone);
        cy.xpath(clientLocator.client.website).type(webs);
        cy.xpath(clientLocator.client.status).select(statusClient, {force: true});
        cy.xpath(clientLocator.client.btn_submit).click();
        cy.xpath(clientLocator.client.assert_clientname).should('contain', clientName);
        
    }
}

module.exports = new clientPage();