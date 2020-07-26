import { Injectable, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MyDatePickerModule } from 'mydatepicker';

import { PrimeAppModule } from './prime-app.module';
import { HtmlPipeModule } from './pipe/html/html-pipe.module';
import { ParseTypePipeModule } from './pipe/parse-type/parse-type-pipe.module';
import { PrimeFormatPipeModule } from './pipe/prime-format/prime-format-pipe.module';
import { StringFormatPipeModule } from './pipe/string-format/string-format-pipe.module';

import { NoWhiteSpaceValidator } from './directive/no-white-space-validator.directive';
import { OnlyNumberDirective } from './directive/only-number.directive';
import { RequiredAndNotEmptyValidator } from './directive/required-and-not-empty-validator.directive';
import { DisableControlDirective } from './directive/disable-control.directive';
import { HiddenSaveDirective } from './directive/hidden-save.directive';
import { InnerpipeModule } from './pipe/innerpipe/innerpipe.module';

// import { DetailModule } from './components/detail/detail.module';
// import { FormModule } from './components/form/form.module';
// import { ListModule } from './components/list/list.module';
// import { LovModule } from './components/lov/lov.module';

@Injectable()
export class WindowWrapper extends Window { }

export function getWindow() {
    return window;
}

/**
 * Shared module to be imported in feature module.
 */
@NgModule({
    imports: [
        CommonModule,
        PrimeAppModule,
        ReactiveFormsModule,
        FormsModule,
        MyDatePickerModule,
        HtmlPipeModule,
        ParseTypePipeModule,
        PrimeFormatPipeModule,
        StringFormatPipeModule,
        InnerpipeModule,
        // DetailModule,
        // FormModule,
        // ListModule,
        // LovModule,
    ],
    declarations: [
        NoWhiteSpaceValidator,
        OnlyNumberDirective,
        HiddenSaveDirective,
        RequiredAndNotEmptyValidator,
        DisableControlDirective,
    ],
    providers: [{ provide: WindowWrapper, useFactory: getWindow }],
    exports: [
        CommonModule,
        PrimeAppModule,
        ReactiveFormsModule,
        FormsModule,
        MyDatePickerModule,
        HtmlPipeModule,
        ParseTypePipeModule,
        PrimeFormatPipeModule,
        StringFormatPipeModule,
        NoWhiteSpaceValidator,
        InnerpipeModule,
        OnlyNumberDirective,
        RequiredAndNotEmptyValidator,
        DisableControlDirective,
        TranslateModule,
        // DetailModule,
        // FormModule,
        // ListModule,
        // LovModule,
    ],
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
        };
    }
}
