import { Injectable } from '@angular/core';
import {
    ActivatedRoute,
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../authentication/authentication.service';

/**
 * Guard service for protected page from unauthorized user
 */
@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        const isLoggedIn = this.authenticationService.isLoggedIn();

        /**
         *  Condition: If user is not login, then kick him!!!
         */
        if (!isLoggedIn) {
            this.router.navigate(['/login']);

            return false;
        }
        return isLoggedIn;
    }
}
