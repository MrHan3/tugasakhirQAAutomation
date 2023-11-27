const locator = require('../support/locators/LoginLocator');

class validLogin
{   
       //Login
    async setUrlLogin()
    {
       cy.visit('https://appstaging.viseetor.id/login');
    }

    async loginEmail(email)
    {
        cy.xpath(locator.login.email_box).type(email);
    }

    async loginPassword(password)
    {
        cy.xpath(locator.login.password_box).type(password);
    }

    async clickLogin(){
        cy.xpath(locator.login.masuk_btn).click();
    }

    async incorrectLogin(){
        cy.xpath(locator.login.alert_box).contains("Incorrect Password!").should('be.visible');
    }

    async wrongLogin(){
        cy.xpath(locator.login.alert_box).contains("Wrong Email/Password!").should('be.visible');
    }


}

module.exports = new validLogin();