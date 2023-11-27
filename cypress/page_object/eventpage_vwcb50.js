const locator = require("../support/locators/PromoLocator");
const eventloc = require("../support/locators/EventLocator.js");

class eventPage {
    async addEvent(tipeEvent, klienKamu, regencyEvent, judulEvent, descEvent, dateEvent, timeEvent, locEvent, venueEvent, addressEvent, ytCode, address2Event, templateEvent){
        cy.xpath(locator.promotion.dashboard).should('be.visible');
        cy.xpath(eventloc.event.event_dropdown).click();
        cy.xpath(eventloc.event.upcoming_event).click();
        cy.xpath(eventloc.event.add_event).click();

        cy.xpath(eventloc.event.tipe_event).select(tipeEvent, {force: true});
        cy.xpath(eventloc.event.klien_kamu).select(klienKamu, {force: true});
        cy.xpath(eventloc.event.lokasi).select(regencyEvent, {force: true});
        cy.xpath(eventloc.event.btn_next1).click();

        cy.xpath(eventloc.event.judul_event).type(judulEvent);
        cy.xpath(eventloc.event.desc_event).type(descEvent);
        cy.xpath(eventloc.event.date_event).type(dateEvent);
        cy.xpath(eventloc.event.time_event).type(timeEvent);
        cy.xpath(eventloc.event.locat_event).type(locEvent);
        cy.xpath(eventloc.event.venue).type(venueEvent);
        cy.xpath(eventloc.event.event_address).type(addressEvent);
        cy.xpath(eventloc.event.yt_code).type(ytCode);
        cy.xpath(eventloc.event.event_address2).type(address2Event);
        cy.xpath(eventloc.event.btn_next2).click();
        cy.wait(2000);
        cy.xpath(eventloc.event.template).should('contain', templateEvent).click({multiple: true});
        cy.xpath(eventloc.event.confirm_btn_event).click({force: true});

        cy.xpath(eventloc.event.locator_detail_event).should('contain', "Detail Event");
    }
}

module.exports = new eventPage();