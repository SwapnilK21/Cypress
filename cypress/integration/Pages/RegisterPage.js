/// <reference types="cypress"/>
export class RegisterPage {
    //WebElemnents
    // var firstName="klk";

    openUrl(url) {
        cy.visit(url);
    }

    firstName(fNameLocator, fName) {

        cy.get(fNameLocator).type(fName);
    }

    lastName(lNameLocator, lName) {
        cy.get(lNameLocator).type(lName);
    }

    address(adressLocator, address) {
        cy.get(adressLocator).type(address);
    }

    email(emailLocator, email) {
        cy.get(emailLocator).type(email);
    }

    phone(phoneLocator, phone) {
        cy.get(phoneLocator).type(phone);
    }

    selectGendreMale(gendreMaleLocator){
        cy.get(gendreMaleLocator).click().should('be.checked');
    }

    selectGendreFemale(gendreFemaleLocator){
        cy.get(gendreFemaleLocator).click().should('be.checked');
    }

   
}