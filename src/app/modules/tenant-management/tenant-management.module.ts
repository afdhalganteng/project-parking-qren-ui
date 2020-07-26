import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TenantManagementRoutingModule } from './tenant-management-routing.module';
import { JuruParkingModule } from '../juru-parking/juru-parking.module';
import { MerchantModule } from '../merchant/merchant.module';
import { DashboardModule } from '../dashboard-module/dashboard-module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardModule,
    TenantManagementRoutingModule,
    JuruParkingModule,
    MerchantModule
  ]
})
export class TenantManagementModule { }
