/// <reference types="cypress"/>
let tdata;
import {RegisterPage} from "../Pages/RegisterPage";
import { TopMenu } from "../Pages/TopMenu";
describe("User registration",() => {

    before( () => {
        cy.fixture('/TestData/registerPage').then(function (data) {
            tdata=data
        })
    })

    it('Registration Page', () => {
        let rp =new RegisterPage();     
        rp.openUrl();
        rp.verifyTitle();
        rp.firstName(tdata.fName)
        rp.lastName(tdata.lName);
        rp.address(tdata.address);
        rp.email(tdata.email);
        rp.phone(tdata.phone);
        rp.selectGendre(tdata.gendre);
        rp.selectHobbies(tdata.hobbies);
        rp.selectLanguages(tdata.languages);
        rp.selectSkills(tdata.skill);
        rp.Country(tdata.country);
        rp.selectCountry(tdata.searchCountry);
        rp.selectDOB(tdata.year,tdata.month,tdata.day);
        rp.password(tdata.password)
        rp.submit().xyz();
        let tm = new TopMenu();
        tm.webTable();
        tm.register();
    })
})