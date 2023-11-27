const validLogin = require("../page_object/login_valid_vwcb15");
const profile = require("../page_object/profile_changepassword_vwcb27");
const userData = require("../support/data/userData");

describe('Dashboard Page Viseetor', () => {
    beforeEach(() => {
      validLogin.setUrlLogin();
      validLogin.loginEmail(userData.usernameLogin);
      validLogin.loginPassword(userData.passwordLogin);
      validLogin.clickLogin();
    })
   
    it('VWCB27 - Validasi Change Password User Viseetor', () => {
      profile.changePassword(userData.newPassword);
    })

    it('VWCB27 - Validasi Change Password User Viseetor, Example Change Sosmed', () => {
      profile.changeInformation(userData.newMedsos);
    })
  
})