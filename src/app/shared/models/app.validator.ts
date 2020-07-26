import {
    AbstractControl,
    FormControl,
    FormGroup,
    ValidatorFn,
} from '@angular/forms';

/**
 * Application validator collection
 */
export class AppValidator {
    /**
     * Email validator
     * @param control
     * @returns if error: {'email' : true}
     */
    static email(control: FormControl) {
        let EMAIL_REGEXP: RegExp;

        // noinspection TsLint
        /**
         * tslint:disable-next-line:max-line-length
         * @type {RegExp}
         */
        EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return EMAIL_REGEXP.test(control.value) ? null : { email: true };
    }

    /**
     * Required string validator (avoid empty input)
     * @param {FormControl} control
     * @returns {{empty: boolean}}
     */
    static requiredAndNotEmpty(control: FormControl) {
        return (control.value || '').trim().length === 0
            ? { required: true }
            : null;
    }

    static noWhitespace(control: FormControl) {
        const NO_WHITESPACE_REGEXP = /^[a-zA-Z0-9\-_]+$/;

        return NO_WHITESPACE_REGEXP.test(control.value)
            ? null
            : { noWhitespace: true };
    }

    /**
     * TODO TO BE DELETED!!!
     * effective date validators
     * @returns {(group:FormGroup)=>{[p: string]: any}}
     */
    static validateEffectiveDate(message: string) {
        return (group: FormGroup): { [key: string]: any } => {
            const beginDate = group.controls['effBegin'];
            const endDate = group.controls['effEnd'];
            if (beginDate.value > endDate.value && endDate.value) {
                return { dateError: message };
            } else {
                return null;
            }
        };
    }

    /**
     * TODO TO BE DELETED!!!
     * @param {string} beginDateControlName First control name to be compared
     * @param {string} endDateControlName Second control name to be compared
     * @param {string} keyControlName Control name where error flag will be attached
     * @returns {ValidatorFn}
     */
    static effectiveDate(
        beginDateControlName: string,
        endDateControlName: string,
        keyControlName: string
    ): ValidatorFn {
        return (control: AbstractControl) => {
            // if end date is null then always return true
            if (control.get(endDateControlName).value === '') {
                return null;
            }

            if (
                control.get(beginDateControlName).value !==
                control.get(endDateControlName).value
            ) {
                control.get(keyControlName).setErrors({ effectiveDate: true });
            } else {
                return null;
            }
        };
    }

    static multiFieldValidate(
        customValidators: MultiFieldValidatorRule[]
    ): ValidatorFn {
        return (control: AbstractControl) => {
            for (const obj of customValidators) {
                /**
                 * Effective date range validation
                 * Rule param:
                 *    new MultiFieldValidatorRule('effectiveDate', ['field_1_to_be_validate', 'field_2_to_be_validate', 'eq | gt | gte'], 'error_display_field'])
                 * Ex:
                 *    new MultiFieldValidatorRule('effectiveDate', ['effBegin', 'effEnd', 'gte'], 'effEnd'])
                 */
                if (obj.key === 'effectiveDate') {
                    const beginDate = control.get(obj.params[0]).value;
                    const endDate = control.get(obj.params[1]).value;
                    const operator = obj.params[2];

                    if (endDate === null) {
                        return null;
                    }

                    let invalid = true;
                    if (operator === 'eq' && beginDate === endDate) {
                        invalid = false;
                    } else if (operator === 'gt' && endDate > beginDate) {
                        invalid = false;
                    } else if (operator === 'gte' && endDate >= beginDate) {
                        invalid = false;
                    }

                    if (invalid) {
                        control
                            .get(obj.errorDisplayField)
                            .setErrors({ effectiveDate: true });
                    }
                }

                /**
                 * Match validation. 2 fields in param should be match. If not,it raise an error.
                 * Rule param:
                 *    new MultiFieldValidatorRule('match', ['field_1_to_be_validate', 'field_2_to_be_validate'], 'error_display_field'])
                 *    new MultiFieldValidatorRule('match', ['password', 'passwordConfirmation'], 'passwordConfirmation'])
                 */
                if (obj.key === 'match') {
                    if (
                        control.get(obj.params[0]).value !==
                        control.get(obj.params[1]).value
                    ) {
                        control
                            .get(obj.errorDisplayField)
                            .setErrors({ match: true });
                    }
                }
            }

            return null;
        };
    }
}

export class MultiFieldValidatorRule {
    constructor(
        public key: string,
        public params: string[],
        public errorDisplayField: string
    ) {}
}
