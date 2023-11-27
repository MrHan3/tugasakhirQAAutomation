const validLogin = require("../page_object/login_valid_vwcb15");
const userData = require("../support/data/userData");
const event = require("../page_object/eventpage_vwcb50");

describe('Dashboard Page Viseetor', () => {
    beforeEach(() => {
      validLogin.setUrlLogin();
      validLogin.loginEmail(userData.usernameLogin);
      validLogin.loginPassword(userData.passwordLogin);
      validLogin.clickLogin();
    })
   
    it('VWCB39 - Validasi Create New Client Viseetor', () => {
        event.addEvent(userData.tipeEvent, userData.klienKamu, userData.regencyEvent, userData.judulEvent, userData.descEvent, userData.dateEvent, userData.timeEvent, userData.locEvent, userData.venueEvent, userData.addressEvent, userData.ytCode, userData.address2Event, userData.templateEvent);
      })
  
})