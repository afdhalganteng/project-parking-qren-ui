import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppearanceModule } from 'app/shared/components/appearance/appearance.module';
import { SharedModule } from 'app/shared/shared.module';
import { GlobalAllModule } from 'app/global-all/global-all.module';
import { LovModule } from 'app/shared/components/lov/lov.module';
import { LoggerFormModule } from 'app/shared/components/logger-form/logger-form.module';
import { DashboardListComponent } from './dashboard-list/dashboard-list.component';



@NgModule({
  declarations: [DashboardComponent, DashboardListComponent],
  imports: [
    CommonModule,
    AppearanceModule, SharedModule, GlobalAllModule, LovModule, LoggerFormModule

  ]
})
export class DashboardModule { }
