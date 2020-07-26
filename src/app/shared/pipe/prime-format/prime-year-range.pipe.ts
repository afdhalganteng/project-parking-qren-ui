import { Pipe, PipeTransform } from '@angular/core';

import { AppConstant } from 'app/configs/app.config';

@Pipe({
    name: 'primeYearRange',
})
export class PrimeYearRangePipe implements PipeTransform {
    constructor() {}

    transform(value: any, args?: any): any {
        return (
            AppConstant.primeBeginYearRange +
            ':' +
            AppConstant.primeEndYearRange
        );
    }
}
