import { Component, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Subject } from 'rxjs';

import { AuthenticationService } from './core/authentication/authentication.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.sass'],
})
export class AppComponent {
    title = 'QREN - Parking';
    userActivity;
    userInactive: Subject<any> = new Subject();

    constructor(
        private translate: TranslateService,
        private router: Router,
        private authService: AuthenticationService,
        private messageService: MessageService
    ) {
        translate.addLangs(['en', 'id']);
        if (localStorage.getItem('locale')) {
            const browserLang = localStorage.getItem('locale');
            translate.use(browserLang.match(/en|id/) ? browserLang : 'en');
        } else {
            localStorage.setItem('locale', 'en');
            translate.setDefaultLang('en');
        }

        this.setTimeout();
        this.userInactive.subscribe(() => this.router.navigate(['login']));
    }

    setTimeout() {
        this.userActivity = setTimeout(
            () => this.userInactive.next(undefined),
            1800 * 1000
        );
        // console.log(this.userActivity);
    }

    @HostListener('window:mousemove') refreshUserState() {
        clearTimeout(this.userActivity);
        this.setTimeout();
    }
}
