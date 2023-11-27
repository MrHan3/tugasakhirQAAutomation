const loginLocator = require("../support/locators/LoginLocator");
const validLogin = require("../page_object/login_valid_vwcb15");
const userData = require("../support/data/userData");

describe('Register Page Viseetor', () => {
    it('VWCB15 - Valid Login', () => {
      validLogin.setUrlLogin();
      validLogin.loginEmail(userData.usernameLogin);
      validLogin.loginPassword(userData.passwordLogin);
      validLogin.clickLogin();
      cy.xpath('//h4[@class="mb-sm-0 font-size-18"]').should('be.visible');
    })

    it('VWCB17 - Invalid Login', () => {
      validLogin.setUrlLogin();
      validLogin.loginEmail(userData.usernameLogin);
      //validLogin.loginPassword(userData.wrongPassword);
      validLogin.clickLogin();
      validLogin.incorrectLogin();
    })

    it('VWCB18 - Invalid Login with wrong email', () => {
      validLogin.setUrlLogin();
      validLogin.loginEmail(userData.wrongEmail);
      validLogin.loginPassword(userData.passwordLogin);
      validLogin.clickLogin();
      validLogin.wrongLogin();
    })
  
   
  
})