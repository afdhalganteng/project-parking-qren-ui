import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared/shared.module';

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
    imports: [SharedModule],
    declarations: [PageNotFoundComponent],
    providers: [],
})
export class ErrorModule {}
