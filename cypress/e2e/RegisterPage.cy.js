const userData = require('../support/data/userData');
const sameUsername = require('../support/data/sameUsername');
const Register = require('../page_object/register_validasi_vwcb1');
const Register_PDF = require('../page_object/register_pdfcontent_vwcb2');
const Register_Account = require('../page_object/register_createuser_vwcb3');
const RegisterLocator = require('../support/locators/RegisterLocator');

describe('Register Page Viseetor', () => {
  it('VWCB1 - Access Validation', () => {
    Register.setUrlViseetor();
    Register.setLogoViseetor();
    Register.setDescription();
    Register.setDownloadUrl();
    Register.miniIconViseetorToLogin();
    Register.setFormRegister();  
    Register.setHyperlinkTnC();
    Register.labelCheck();
    Register.btnRegister();
    Register.txtLogin();
  })

  it('VWCB2 - PDF Content', () => {
    Register.setUrlViseetor();
    Register_PDF.clickDownloadUrl();
  })

  it('VWCB3 - Create Account', () => {
    Register.setUrlViseetor();
    Register_Account.fillEmail(userData.email);
    Register_Account.fillName(userData.name);
    Register_Account.fillBirthdate(userData.birthdate);
    Register_Account.fillGender(userData.gender);
    Register_Account.fillAdress(userData.address);
    Register_Account.fillSosmed(userData.sosmed);
    Register_Account.fillPhone(userData.phone);
    Register_Account.fillUsername(userData.username);
    Register_Account.fillBirthPlace(userData.birthPlace);
    Register_Account.fillFidOccupation(userData.fidOccupation);
    Register_Account.fillFidRegency(userData.fidRegency);
    Register_Account.fillCheckbox();
    Register_Account.clickRegister();
    Register_Account.confirmRegister();
    cy.url().should('eq', 'https://appstaging.viseetor.id/register-success');
  })

  it('VWCB9 - Create Account Same Username', () => {
    Register.setUrlViseetor();
    Register_Account.fillEmail(sameUsername.email);
    Register_Account.fillName(sameUsername.name);
    Register_Account.fillBirthdate(sameUsername.birthdate);
    Register_Account.fillGender(sameUsername.gender);
    Register_Account.fillAdress(sameUsername.address);
    Register_Account.fillSosmed(sameUsername.sosmed);
    Register_Account.fillPhone(sameUsername.phone);
    Register_Account.fillUsername(userData.username); //main case same username
    Register_Account.fillBirthPlace(sameUsername.birthPlace);
    Register_Account.fillFidOccupation(sameUsername.fidOccupation);
    Register_Account.fillFidRegency(sameUsername.fidRegency);
    Register_Account.fillCheckbox();
    Register_Account.clickRegister();
    Register_Account.confirmRegister();
    Register_Account.warningAlert();
  })
})


//