/// <reference types="cypress"/>
export class RegisterPage{

    openUrl(url){
        cy.visit(url);
    }

    firstName(fNameLocator,fName){
        
        cy.get(fNameLocator).type(fName);
    }

    lastName(lNameLocator,lName){
        cy.get(lNameLocator).type(lName);
    }
}