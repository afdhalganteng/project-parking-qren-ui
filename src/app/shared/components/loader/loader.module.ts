import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared/shared.module';

import { LoaderComponent } from './loader.component';

@NgModule({
    imports: [SharedModule],
    declarations: [LoaderComponent],
    providers: [],
    exports: [LoaderComponent],
})
export class LoaderModule {}
