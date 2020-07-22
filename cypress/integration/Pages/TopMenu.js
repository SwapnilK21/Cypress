import {HomePage} from '../Pages/HomePage';
import { RegisterPage } from '../Pages/RegisterPage';
import { WebTablePage } from "../Pages/WebTablePage";
import { SwitchToPage } from "../Pages/SwitchToPage";
import { WidgetsPage } from "../Pages/WidgetsPage";
import { InteractionsPage } from "../Pages/InteractionsPage";
import { VideoPage } from "../Pages/VideoPage";
import { WYSIWYGPage } from "../Pages/WYSIWYGPage";
import { MorePage } from "../Pages/MorePage";
import { PraciceSitePage } from "../Pages/PraciceSitePage";
var homeLocator=".nav > li:nth-child(1) > a:nth-child(1)";
var registerLocator=".nav > li:nth-child(2) > a:nth-child(1)";
var webTableLocator=".nav > li:nth-child(3) > a:nth-child(1)";
var switchToLocator="li.dropdown:nth-child(4) > a:nth-child(1)";
var widgetsLocator="li.dropdown:nth-child(5) > a";
var interactionsLocator="li.dropdown:nth-child(6) > a";
var videoLocator="li.dropdown:nth-child(7) > a";
var wysiwygLocator="li.dropdown:nth-child(8) > a:nth-child(1)";
var moreLocator="li.dropdown:nth-child(9) > a:nth-child(1)";
var practiceSiteLocator=".nav > li:nth-child(10) > a:nth-child(1)";
export class TopMenu{

    home(){
        cy.get(homeLocator).click();
        return new HomePage();
    }

    register(){
        cy.get(registerLocator).click();
        return new RegisterPage();
    }

    webTable(){
        cy.get(webTableLocator).click();
        return new WebTablePage();
    }

    switchTo(){
        cy.get(switchToLocator).click();
        return new SwitchToPage();
    }

    widgets(){
        cy.get(widgetsLocator).click();
        return new WidgetsPage();
    }

    interactions(){
        cy.get(interactionsLocator).click();
        return new InteractionsPage();
    }

    video(){
        cy.get(videoLocator).click();
        return new VideoPage();
    }

    wysiwyg(){
        cy.get(wysiwygLocator).click();
        return new WYSIWYGPage();
    }

    more(){
        cy.get(moreLocator).click();
        return new MorePage();
    }

    praciceSite(){
        cy.get(practiceSiteLocator).click();
        return new PraciceSitePage();
    }
}   