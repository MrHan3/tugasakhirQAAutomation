const validLogin = require("../page_object/login_valid_vwcb15");
const userData = require("../support/data/userData");
const client = require("../page_object/client_page_vwcb39");

describe('Dashboard Page Viseetor', () => {
    beforeEach(() => {
      validLogin.setUrlLogin();
      validLogin.loginEmail(userData.usernameLogin);
      validLogin.loginPassword(userData.passwordLogin);
      validLogin.clickLogin();
    })
   
    it('VWCB39 - Validasi Create New Client Viseetor', () => {
      client.addClient(userData.industryType, userData.clientName, userData.description, userData.address, userData.regency, userData.contact, userData.clientEmail, userData.clientPhone, userData.clientweb, userData.statusClient);
    })
  
})