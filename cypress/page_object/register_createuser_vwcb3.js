const locator = require('../support/locators/RegisterLocator');

class Register_Account
{   
       //Create Account
    async fillEmail(email)
    {
        cy.xpath(locator.reglocators.email_box).type(email);
    }

    async fillName(fullname)
    {
        cy.xpath(locator.reglocators.name_box).type(fullname);
    }

    async fillBirthdate(birthdate)
    {
        cy.xpath(locator.reglocators.birthdate_box).type(birthdate);
    }

    async fillGender(gender){
        cy.xpath(locator.reglocators.gender_box).select(gender);
    }

    async fillAdress(address){
        cy.xpath(locator.reglocators.address_box).type(address);
    }

    async fillSosmed(instagram){
        cy.xpath(locator.reglocators.medsos_box).type(instagram);
    }

    async fillPhone(phone_no){
        cy.xpath(locator.reglocators.phone_box).type(phone_no);
    }

    async fillUsername(username){
        cy.xpath(locator.reglocators.username_box).type(username);
    }

    async fillBirthPlace(birth_place){
        cy.xpath(locator.reglocators.birthplace_box).type(birth_place);
    }

    async fillFidOccupation(fid_occupation){
        cy.xpath(locator.reglocators.fidoccupation_box).select(fid_occupation);
    }

    async fillFidRegency(fid_regency){
        cy.xpath(locator.reglocators.fidregency_box).click();
        cy.xpath(locator.reglocators.fidregency_selectclass).select(fid_regency, {force: true});

    }

    async fillReference(reference){
        cy.xpath(locator.reglocators.reference_box).type(reference);
    }

    async fillCheckbox(){
        cy.xpath(locator.reglocators.tns_checklist).click();
    }

    async clickRegister(){
        cy.xpath(locator.reglocators.btn_register).click();
    }

    async confirmRegister(){
        cy.xpath(locator.reglocators.confirm_register).click();
    }

    
    async warningAlert(){
        cy.xpath(locator.reglocators.warning_register).should('be.visible');
    }

}

module.exports = new Register_Account();