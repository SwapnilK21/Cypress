/// <reference types="cypress"/>
//All Elemnts are stored in this page tried working with Fixture for storing WebElements but didn't worked.
var url = "http://demo.automationtesting.in/Register.html";
var fNameLocator = ":nth-child(1) > :nth-child(2) > .form-control";
var lNameLocator = ":nth-child(1) > :nth-child(3) > .form-control";
var addressLocator = ".col-md-8 > .form-control";
var emailLocator = "#eid > .form-control";
var phoneLocator = ":nth-child(4) > .col-md-4 > .form-control";
var gendreMaleLocator = "input[value=Male]";
var gendreFemaleLocator = "input[value=FeMale]";
var hobbiesLocator = "input[type=checkbox]";
var languagesLocator = "#msdd";
var checkLanguagesLocator = "ul > .ng-scope > a";
var skillsLocator = "#Skills";
var countryLocator = "#countries";
var selectCountryLocator ="#select2-country-container";
var searchCountryLocator=".select2-search__field";
var yearLocator="#yearbox";
var monthLocator="select[placeholder=Month]";
var dayLocator="#daybox";
var firstPasswordLocator="#firstpassword";
var secondPasswordLocator="#secondpassword";
var refreshLocator="#Button1";

import { signinPage } from "../Pages/signinPage";

export class RegisterPage {

    openUrl() {
        cy.visit(url);
        // locators="d";
    }

    verifyTitle(){
        cy.title().should('eq','Register')
    }

    firstName(fName) {

        cy.get(fNameLocator).type(fName);
        cy.get(fNameLocator)
    }

    lastName(lName) {
        cy.get(lNameLocator).type(lName);
    }

    address(address) {
        cy.get(addressLocator).type(address);
    }

    email(email) {
        cy.get(emailLocator).type(email);
    }

    phone(phone) {
        cy.get(phoneLocator).type(phone);
    }

    selectGendre(gendre) {
        gendre = gendre.toUpperCase();;
        if (gendre.startsWith("F")) {
            cy.get(gendreFemaleLocator).click().should('be.checked').and('have.value', "FeMale");
        } else {
            cy.get(gendreMaleLocator).click().should('be.checked').and('have.value', "Male");
        }
    }

    selectHobbies(hobbies) {
        cy.get(hobbiesLocator).check(hobbies).should('be.checked');
    }

    selectLanguages(languages) {
        cy.get(languagesLocator).click();
        cy.get(checkLanguagesLocator).each(($element) => {
            if (languages.includes($element.text())) {
                cy.get($element).click();
            }

        })
    }

    selectSkills(skill) {
        cy.get(skillsLocator).select(skill, { force: true }).should('have.value', skill).invoke('val').should('eq', skill);
    }

    Country(country) {
        cy.get(countryLocator).select(country).should('have.value', country).invoke('val').should('eq', country);
    }

    selectCountry(country){
        cy.get(selectCountryLocator).click({force: true});
        cy.get(searchCountryLocator).type(country+"{Enter}");
    }

    selectDOB(year, month, day){
        cy.get(yearLocator).select(year).should('have.value', year).invoke('val').should('eq', year);
        cy.get(monthLocator).select(month).should('have.value', month).invoke('val').should('eq', month);
        cy.get(dayLocator).select(day).should('have.value', day).invoke('val').should('eq', day);
    }

    password(password){
        cy.get(firstPasswordLocator).type(password);
        cy.get(secondPasswordLocator).type(password);
    }

    refresh(){
        cy.get(refreshLocator).click();
    }

    submit() {

        return new signinPage();
    }
}
