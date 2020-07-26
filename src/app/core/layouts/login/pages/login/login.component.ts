import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceDetectorService, DeviceInfo } from 'ngx-device-detector';

import { AuthenticationService } from 'app/core/authentication/authentication.service';
import { SelectItem } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.sass'],
})
export class LoginPageComponent {
    deviceInfo: DeviceInfo;

    isDesktop = false;
    isMobile = false;
    isTablet = false;

    language: SelectItem[];
    selectedLang = 'En';

    constructor(
        private router: Router,
        private deviceService: DeviceDetectorService,
        public translate: TranslateService,
        private authService: AuthenticationService
    ) {
        translate.addLangs(['en', 'id']);

        if (this.onCheckLogin()) {
            this.router.navigate(['/dashboard']);
        }

        this.language = [
            { label: 'EN', value: 'En' },
            { label: 'ID', value: 'Id' },
        ];

        this.deviceInfo = deviceService.getDeviceInfo();
        this.isDesktop = deviceService.isDesktop();
        this.isMobile = deviceService.isMobile();
        this.isTablet = deviceService.isTablet();
    }

    onCheckLogin(): boolean {
        return this.authService.isLoggedIn();
    }
}
