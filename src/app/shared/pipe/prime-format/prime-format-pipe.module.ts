import { NgModule } from '@angular/core';

import { PrimeYearRangePipe } from './prime-year-range.pipe';
import { PrimeDateFormatPipe } from './prime-date-format.pipe';
import { PrimeBirthYearRangePipe } from './prime-birth-year-range.pipe';
import { PrimeCalendarLocalePipe } from './prime-calendar-locale.pipe';

@NgModule({
    declarations: [
        PrimeYearRangePipe,
        PrimeBirthYearRangePipe,
        PrimeDateFormatPipe,
        PrimeCalendarLocalePipe,
    ],
    exports: [
        PrimeYearRangePipe,
        PrimeBirthYearRangePipe,
        PrimeDateFormatPipe,
        PrimeCalendarLocalePipe,
    ],
})
export class PrimeFormatPipeModule {}
