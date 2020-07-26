import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import {
    AuthenticationService,
    UserSession,
} from '../authentication/authentication.service';

/**
 * HTTP auth interceptor.
 * We put company ID & menu ID for every request on this interceptor.
 */

@Injectable()
export class HttpAuthInterceptor implements HttpInterceptor {
    userSession: UserSession;

    constructor(private authService: AuthenticationService) { }

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        let modified;

        this.userSession = this.authService.getSession();

        if (this.authService.isLoggedIn()) {
            modified = request.clone({ body: request.body || {} });
        } else {
            modified = request.clone({ body: request.body || {} });
        }
        return next.handle(modified).pipe(
            tap(
                (event: HttpEvent<any>) => { },
                (err: any) => { }
            )
        );
    }
}
