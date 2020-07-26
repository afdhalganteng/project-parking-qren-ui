import { NgModule } from '@angular/core';

import { ParseNumbToBoolPipe } from './parse-numb-to-bool.pipe';
import { ParseBoolToStatusPipe } from './parse-bool-to-status.pipe';
import { ParseBoolToValue } from './parse-bool-to-value.pipe';
import { ParseDateToValue } from './parse-date-to-value.pipe';

@NgModule({
    declarations: [
        ParseNumbToBoolPipe,
        ParseBoolToStatusPipe,
        ParseBoolToValue,
        ParseDateToValue,
    ],
    exports: [
        ParseNumbToBoolPipe,
        ParseBoolToStatusPipe,
        ParseBoolToValue,
        ParseDateToValue,
    ],
})
export class ParseTypePipeModule {}
