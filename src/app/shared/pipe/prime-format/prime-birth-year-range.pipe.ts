import { Pipe, PipeTransform } from '@angular/core';

import { AppConstant } from 'app/configs/app.config';

@Pipe({
    name: 'primeBirthYearRange',
})
export class PrimeBirthYearRangePipe implements PipeTransform {
    constructor() {}

    transform(value: any, args?: any): any {
        return (
            AppConstant.primeBeginBirthYearRange +
            ':' +
            AppConstant.primeEndBirthYearRange
        );
    }
}
