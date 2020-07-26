import { Directive, Input } from '@angular/core';
import {
    AbstractControl,
    FormControl,
    NG_VALIDATORS,
    Validator,
} from '@angular/forms';

import { AppValidator } from '../models/app.validator';

@Directive({
    selector: '[validatorNoWhitespace]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: NoWhiteSpaceValidator,
            multi: true,
        },
    ],
})
export class NoWhiteSpaceValidator implements Validator {
    @Input() forbiddenName: string;

    validate(control: AbstractControl) {
        return AppValidator.noWhitespace(<FormControl>control);
    }
}
