import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared/shared.module';

import { LoggerFormComponent } from './logger-form.component';

@NgModule({
    imports: [SharedModule],
    declarations: [LoggerFormComponent],
    providers: [],
    exports: [LoggerFormComponent],
})
export class LoggerFormModule {}
