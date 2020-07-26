import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from 'app/shared/shared.module';
import { LovModule } from 'app/shared/components/lov/lov.module';
import { LoggerFormModule } from 'app/shared/components/logger-form/logger-form.module';
import { DashboardListComponent } from './dashboard-list/dashboard-list.component';



@NgModule({
  declarations: [DashboardComponent, DashboardListComponent],
  imports: [
    CommonModule,
    SharedModule, LovModule, LoggerFormModule

  ]
})
export class DashboardModule { }
