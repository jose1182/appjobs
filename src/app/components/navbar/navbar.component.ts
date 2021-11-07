import { AccounttService } from './../../services/account.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    providers:[AccounttService]
})
export class NavbarComponent implements OnInit {

    constructor(
        public accountService: AccounttService,
        public router: Router
    ) { }

    ngOnInit(): void { 
        this.getUserLogged()
    }

    getUserLogged(){
        return this.accountService.isAuthenticated()
    }
    
    logout(){
        this.accountService.logout();
        this.getUserLogged()
        this.router.navigate(['/home']);
    }
}
