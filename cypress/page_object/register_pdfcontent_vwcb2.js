const locator = require('../support/locators/RegisterLocator');

class Register_PDF
{   
       //PDF Download
    async clickDownloadUrl()
    {
        cy.xpath(locator.reglocators.download_pdf).should('have.attr', 'href', 'https://cdnstaging.viseetor.id/download/partnership-program-v1.pdf').click();
        
    }


}

module.exports = new Register_PDF();