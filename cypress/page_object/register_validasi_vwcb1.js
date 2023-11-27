const locator = require('../support/locators/RegisterLocator');

class Register
{   
    //Uji Halaman Register
    async setUrlViseetor()
    {
        cy.visit('https://appstaging.viseetor.id/register');
    }

    async setLogoViseetor()
    {
        cy.xpath(locator.reglocators.logo_viseetor).should('be.visible');  
    }

    async setDescription()
    {
        cy.xpath(locator.reglocators.desc_viseetor).should('be.visible');
    }

    async setDownloadUrl()
    {
        cy.xpath(locator.reglocators.download_pdf).should('be.visible');
    }

    async miniIconViseetorToLogin()
    {
        cy.xpath(locator.reglocators.miniicon_login).should('be.visible');
    }

    async setFormRegister()
    {
        cy.xpath(locator.reglocators.form_register).should('be.visible');
    }

    async setHyperlinkTnC()
    {
        cy.xpath(locator.reglocators.tns_hyperlink).should('be.visible');
    }

    async labelCheck()
    {
        cy.xpath(locator.reglocators.tns_check).should('be.visible');
    }

    async btnRegister()
    {
        cy.xpath(locator.reglocators.register_submit).should('be.visible');
    }

    async txtLogin()
    {
        cy.xpath(locator.reglocators.login_hyperlink_undersubmit).should('be.visible');
    }


}

module.exports = new Register();