var alertsLocator="li.dropdown:nth-child(4) > ul:nth-child(3) > li:nth-child(1) > a";
var windowsLocator="li.dropdown:nth-child(4) > ul:nth-child(3) > li:nth-child(2) > a";
var framesLocator="li.dropdown:nth-child(4) > ul:nth-child(3) > li:nth-child(3) > a";
import { AlertsPage } from "../Pages/AlertsPage";
import { WindowsPage } from "../Pages/WindowsPage";
import { FramesPage } from "../Pages/FramesPage";

export class SwitchToPage{

    alerts(){
        cy.get(alertsLocator).click();
        return new AlertsPage();
    }

    windows(){
        cy.get(windowsLocator).click();
        return new WindowsPage();
    }

    frames(){
        cy.get(framesLocator).click();
        return new FramesPage();
    }
}