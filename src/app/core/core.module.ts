import {
    NgModule,
    Optional,
    SkipSelf
} from '@angular/core';
import {
    CommonModule
} from '@angular/common';
import {
    HTTP_INTERCEPTORS,
    HttpClientModule
} from '@angular/common/http';
import {
    StoreModule
} from '@ngrx/store';
import {
    EffectsModule
} from '@ngrx/effects';
import {
    StoreRouterConnectingModule
} from '@ngrx/router-store';
import {
    StoreDevtoolsModule
} from '@ngrx/store-devtools';

import {
    MessageService
} from 'primeng/api';

import {
    ErrorModule
} from './layouts/error/error.module';
import {
    LoginModule
} from './layouts/login/login.module';
import {
    HomeModule
} from './layouts/home/home.module';

import {
    AuthGuard
} from './guards/auth.guard';
import {
    ApiService
} from './http/api.service';
import {
    FakeApiService
} from './http/fake-api.service';
import {
    AuthenticationService
} from './authentication/authentication.service';

import {
    CoreLovService
} from './services/core-lov.service';
import {
    LoaderService
} from './layouts/loader/shared/loader.service';
import {
    LoaderInterceptor
} from './interceptors/loader.interceptor';
import {
    LoggerService
} from './logger.service';
import {
    HttpAuthInterceptor
} from './interceptors/http-auth-interceptor';
import {
    HttpErrorInterceptor
} from './interceptors/http-error.interceptor';

// TODO: move later to Core->ModuleService

import {
    UserService
} from './services/user.service';

import {
    LoadingSpinnerEffects
} from '@effects/loading-spinner.effect';


import {
    appReducer
} from '@reducers/app.reducer';
import {
    metaReducers
} from '@reducers/meta.reducer';
import {
    environment
} from 'app/../environments/environment';
import {
    MessageBoxService
} from './services/message-box.service';
import {
    HeaderService
} from './layouts/home/components/header/shared/header.service';
import { TableModule } from 'primeng/table';

// TODO: optimize later or remove later
export {
    AuthGuard,
    ApiService,
    FakeApiService,
    AuthenticationService,
    CoreLovService,
    LoggerService,
    MessageBoxService,
    // TODO: optimize later, Core->Moduleservice

    // Organization Service



    HeaderService,
    // UM Service
    UserService,
    // Recruitment Service

};

export const interceptorProviders = [{
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptor,
    multi: true,
},
{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpAuthInterceptor,
    multi: true,
},
{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true,
},
];

@NgModule({
    imports: [
        CommonModule, // Common Angular
        HttpClientModule, // HttpClient Angular
        TableModule,
        // TODO: move later to appReducer
        // StoreModule.forRoot({
        //     companies: reducer,
        //     notifications: notificationReducer,
        // }),

        // Store
        StoreModule.forRoot(appReducer, {
            metaReducers
        }),

        // Effects
        EffectsModule.forRoot([
            LoadingSpinnerEffects,
            // ConfigEffect,

            // UM Service

        ]),

        StoreDevtoolsModule.instrument({
            name: 'QREN - Parking',
            maxAge: 25,
            logOnly: environment.production,
        }),
        StoreRouterConnectingModule.forRoot({
            stateKey: 'router'
        }),

        // Layout Page
        ErrorModule,
        LoginModule,
        HomeModule,
    ],
    declarations: [],
    providers: [LoaderService, MessageService, interceptorProviders],
})
export class CoreModule {
    constructor(
        @Optional() @SkipSelf() parentModule: CoreModule
    ) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import only in AppModule'
            );
        }
    }
}
