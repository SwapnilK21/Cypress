var skipSignInLocator="#btn2";

import { TopMenu } from "../Pages/TopMenu";
export class HomePage{

    skipSignIn(){
        cy.get(skipSignInLocator).click();
    }
}