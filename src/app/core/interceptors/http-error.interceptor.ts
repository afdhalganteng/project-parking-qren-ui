import { Injectable, Injector } from '@angular/core';
import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpErrorResponse,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { EMPTY, Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { MessageBoxService } from '../services/message-box.service';
import { AuthenticationService } from '../authentication/authentication.service';
import { Store } from '@ngrx/store';
import { AppState } from '@state/app-state.interface';
import * as jwt_decode from 'jwt-decode';
import { SocketInterceptorService } from '../layouts/home/socket/socket/socket-interceptor.service';
import { Location } from '@angular/common';


/**
 *  HTTP error interceptor.
 */

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
    constructor(
        private messageBoxService: MessageBoxService,
        private authService: AuthenticationService,
        private injector: Injector,
        private socket: SocketInterceptorService,
        private loc: Location
    ) { }
    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            catchError((err: HttpErrorResponse) => {
                if (err.error instanceof Error) {
                    // A client-side or network error occurred. Handle it accordingly.
                    this.messageBoxService.showWarn(
                        err.error.message,
                        'An error occurred'
                    );
                } else {
                    // The backend returned an unsuccessful response code.
                    // The response body may contain clues as to what went wrong,
                    switch (err.status) {


                        case 400: {
                            this.messageBoxService.showWarn("Request Failed"
                            );
                            this.loc.back();
                            break;
                        }
                        case 403: {
                            this.messageBoxService.showInfo(
                                "Request Failed"
                            );
                            this.loc.back();

                            const router = this.injector.get(Router);


                            // this.socket.resetService();
                            // else {
                            //     this.authService.destroySession();
                            //     this.authService.destroyActionSession();
                            //     router.navigate(['/login']);
                            // }
                            // this.authService.destroySession();
                            // this.authService.destroyActionSession();
                            // router.navigate(['/login']);



                            break;
                        }

                        default:
                            this.loc.back();
                            this.messageBoxService.showError(
                                "Request Failed",
                                `"Request Failed": Err Backend`
                            );
                    }
                }

                // ...optionally return a default fallback value so app can continue (pick one)
                // which could be a default value (which has to be a HttpResponse here)
                // return Observable.of(new HttpResponse({body: [{name: "Default value..."}]}));
                // or simply an empty observable
                return EMPTY;
            })
        );
    }
}
