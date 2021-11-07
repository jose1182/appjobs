import { AccounttService } from './../services/account.service';
import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {
    constructor(
        private authService: AccounttService,
        private router : Router
    ){}

    canActivate(){
        if(this.authService.isAuthenticated()){
            console.log('No estás logueado');
            // If the user is not logged in we'll send them back to the home page
            this.router.navigate(['/']);
            return false;
        }        
        console.log('Estás logueado');
        return true;
    }
}