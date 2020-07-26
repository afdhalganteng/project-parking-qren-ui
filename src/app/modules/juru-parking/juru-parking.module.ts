import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JuruParkingComponent } from './juru-parking/juru-parking.component';
import { JuruListComponent } from './juru-list/juru-list.component';
import { JuruDetailComponent } from './juru-detail/juru-detail.component';
import { JuruEditComponent } from './juru-edit/juru-edit.component';
import { JuruAddComponent } from './juru-add/juru-add.component';
import { SharedModule } from 'app/shared/shared.module';
import { LovModule } from 'app/shared/components/lov/lov.module';
import { LoggerFormModule } from 'app/shared/components/logger-form/logger-form.module';



@NgModule({
  declarations: [JuruParkingComponent, JuruListComponent, JuruDetailComponent, JuruEditComponent, JuruAddComponent],
  imports: [
    CommonModule,
    SharedModule, LovModule, LoggerFormModule
  ]
})
export class JuruParkingModule { }
