const validLogin = require("../page_object/login_valid_vwcb15");
const dashboardFunc = require("../page_object/dashboard_valid_vwcb21");
const userData = require("../support/data/userData");

describe('Dashboard Page Viseetor', () => {
    beforeEach(() => {
      validLogin.setUrlLogin();
      validLogin.loginEmail(userData.usernameLogin);
      validLogin.loginPassword(userData.passwordLogin);
      validLogin.clickLogin();
    })
  
    it('VWCB21 - Validasi Dashboard Viseetor', () => {
      dashboardFunc.assertDashboard();
    })

    it('VWCB40 - Logout Dashboard Viseetor', () => {
      dashboardFunc.logoutDashboard();
    })
  
})

