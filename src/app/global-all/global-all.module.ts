import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExportTableComponent } from './export-table/export-table.component';
import { SharedModule } from 'app/shared/shared.module';
import { LovModule } from 'app/shared/components/lov/lov.module';
import { LoggerFormModule } from 'app/shared/components/logger-form/logger-form.module';


@NgModule({
  declarations: [ExportTableComponent],
  imports: [
    CommonModule,
    LoggerFormModule,
    SharedModule,
    LovModule

  ],
  exports: [
    ExportTableComponent,

  ],
})
export class GlobalAllModule { }
