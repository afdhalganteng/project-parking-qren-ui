import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MerchantComponent } from './merchant/merchant.component';
import { MerchantListComponent } from './merchant-list/merchant-list.component';
import { SharedModule } from 'app/shared/shared.module';
import { LovModule } from 'app/shared/components/lov/lov.module';
import { LoggerFormModule } from 'app/shared/components/logger-form/logger-form.module';



@NgModule({
  declarations: [MerchantComponent, MerchantListComponent],
  imports: [
    CommonModule,
    SharedModule, LovModule, LoggerFormModule
  ]
})
export class MerchantModule { }
