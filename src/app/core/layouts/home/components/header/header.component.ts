import { Component, OnInit, Injectable, OnDestroy } from '@angular/core';
import { AuthenticationService, UserSession } from 'app/core/authentication/authentication.service';
import { Session } from 'protractor';
@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.sass'],
})
export class HeaderComponent implements OnInit {

    session: UserSession;
    merchant: any[] = [];
    ngOnInit(): void {
        this.session = this.aut.getSession();
        this.merchant = [{ label: this.session.user.nama, value: this.session.user.merchantApiKey }];
        console.log("this.aut.getSession().user.namaMerchant", this.aut.getSession().user.nama);

    }
    constructor(private aut: AuthenticationService) { }

    doLogout() {
        this.aut.destroySession();
    }

}