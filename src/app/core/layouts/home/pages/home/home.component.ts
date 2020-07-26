import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { AuthenticationService } from 'app/core/authentication/authentication.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
})
export class HomeComponent implements OnInit {
    modules: any[] = [];
    isBurgerMenuClicked = false;
    sidebarActive: boolean;

    constructor(
        public router: Router,
        public authenticationService: AuthenticationService
    ) {
    }

    ngOnInit(): void {

    }

    /**
     *  Construct Menu from Session
     */


    onMenuButtonClick(event: Event) {
        this.sidebarActive = !this.sidebarActive;

        event.preventDefault();
    }



    over() {
        this.isBurgerMenuClicked = true;
    }

    out() {
        this.isBurgerMenuClicked = false;
    }
}
