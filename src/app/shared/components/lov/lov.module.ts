import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared/shared.module';

import { CoreLovService } from 'app/core/services/core-lov.service';
import { CoreComponent } from './core-component';
// import { PayrollLovService } from 'app/core/services/payroll-lov.service';
// import { PayrollGroupLovService } from 'app/core/services/payroll-group-lov.service';
// import { PayrollPeriodDetailLovService } from 'app/core/services/payroll-period-detail-lov.service';
// import { TimeLovService } from 'app/core/services/time-lov.service';

@NgModule({
    imports: [SharedModule],
    declarations: [CoreComponent
    ],
    providers: [
        CoreLovService,
    ],
    exports: [
        CoreComponent
    ],
})
export class LovModule { }
