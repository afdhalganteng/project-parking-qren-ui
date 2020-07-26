import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AgmCoreModule } from '@agm/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { LaddaModule } from 'angular2-ladda';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { PrimeAppModule } from './shared/prime-app.module';

import { AppComponent } from './app.component';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { LoaderModule } from './core/layouts/loader/loader.module';
import { TableModule } from 'primeng/table';

export const createTranslateLoader = (http: HttpClient) => {
    return new TranslateHttpLoader(http, '../translations/', '.json');
};

@NgModule({
    declarations: [
        AppComponent,

    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        SharedModule.forRoot(),
        PrimeAppModule.forRoot(),
        CoreModule,
        LoaderModule,
        RichTextEditorAllModule,
        FullCalendarModule,
        NgApexchartsModule,
        TableModule,
        AgmCoreModule.forRoot({
            apiKey: '',
        }),
        NgMultiSelectDropDownModule.forRoot(),
        LaddaModule.forRoot({
            style: 'slide-left',
            spinnerSize: 25,
            spinnerLines: 12,
        }),
        DeviceDetectorModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient],
            },
        }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
