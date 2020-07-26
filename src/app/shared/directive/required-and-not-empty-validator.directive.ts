import { Directive, Input } from '@angular/core';
import {
    AbstractControl,
    FormControl,
    NG_VALIDATORS,
    Validator,
} from '@angular/forms';

import { AppValidator } from '../models/app.validator';

@Directive({
    selector: '[validatorRequiredAndNotEmpty]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: RequiredAndNotEmptyValidator,
            multi: true,
        },
    ],
})
export class RequiredAndNotEmptyValidator implements Validator {
    @Input() forbiddenName: string;

    validate(control: AbstractControl) {
        return AppValidator.requiredAndNotEmpty(<FormControl>control);
    }
}
