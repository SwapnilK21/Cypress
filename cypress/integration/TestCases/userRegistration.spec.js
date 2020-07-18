/// <reference types="cypress"/>
let tdata;
let locators;
import {RegisterPage} from "../Pages/RegisterPage";
describe("User registration",() => {

    before( () => {
        cy.fixture('/PagesLocators/registerPage').then(function (data) {
           locators=data
        })
        cy.fixture('/TestData/registerPage').then(function (data) {
            tdata=data
        })
    })

    it('Registration Page', () => {
        let rp =new RegisterPage();        
        rp.openUrl(locators.url);
        rp.firstName(locators.fNameLocator,tdata.fName)
        rp.lastName(locators.lNameLocator,tdata.lName);
    })
})