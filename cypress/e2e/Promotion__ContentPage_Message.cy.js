const validLogin = require("../page_object/login_valid_vwcb15");
const validPromo = require("../page_object/promotion_contentpage_message._vwcb36");
const userData = require("../support/data/userData");

describe('Dashboard Page Viseetor', () => {
    beforeEach(() => {
      validLogin.setUrlLogin();
      validLogin.loginEmail(userData.usernameLogin);
      validLogin.loginPassword(userData.passwordLogin);
      validLogin.clickLogin();
    })
   
    it('VWCB36 - Validasi Page Promosi Viseetor', () => {
      validPromo.validPromo();
    })

    it('VWCB37 - Validasi Page Konten Marketing Viseetor', () => {
      validPromo.downloadImage();
    })

    it.only('VWCB38 - Validasi Page Message Viseetor', () => {
      validPromo.pesanDashboard();
    })
  
})

