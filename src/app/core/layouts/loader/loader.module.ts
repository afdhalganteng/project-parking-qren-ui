import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared/shared.module';


import { ServiceToastComponent } from './components/service-toast/service-toast.component';

@NgModule({
    imports: [SharedModule],
    declarations: [

        ServiceToastComponent,
    ],
    providers: [],
    exports: [
        ServiceToastComponent,
    ],
})
export class LoaderModule { }
