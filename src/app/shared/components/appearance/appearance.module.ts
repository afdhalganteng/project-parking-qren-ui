import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared/shared.module';

import { SubmenuComponent } from '../appearance-submenu/submenu.component';
import { PaginatorDetailComponent } from '../appearance-paginator-detail/paginator-detail.component';
import { ConfirmDialogComponent } from '../appearance-confirm-dialog/confirm-dialog.component';

@NgModule({
    imports: [SharedModule],
    declarations: [
        SubmenuComponent,
        PaginatorDetailComponent,
        ConfirmDialogComponent,
    ],
    providers: [],
    exports: [
        SubmenuComponent,
        PaginatorDetailComponent,
        ConfirmDialogComponent,
    ],
})
export class AppearanceModule {}
