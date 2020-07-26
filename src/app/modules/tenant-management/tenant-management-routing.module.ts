import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JuruParkingComponent } from '../juru-parking/juru-parking/juru-parking.component';
import { JuruListComponent } from '../juru-parking/juru-list/juru-list.component';
import { JuruDetailComponent } from '../juru-parking/juru-detail/juru-detail.component';
import { JuruEditComponent } from '../juru-parking/juru-edit/juru-edit.component';
import { JuruAddComponent } from '../juru-parking/juru-add/juru-add.component';
import { MerchantComponent } from '../merchant/merchant/merchant.component';
import { MerchantListComponent } from '../merchant/merchant-list/merchant-list.component';
import { DashboardComponent } from '../dashboard-module/dashboard/dashboard.component';
import { DashboardListComponent } from '../dashboard-module/dashboard-list/dashboard-list.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [{
      path: "",
      component: DashboardListComponent
    }]
  },
  {
    path: 'merchant-setting',
    component: MerchantComponent,
    children: [
      {
        path: "",
        component: MerchantListComponent
      }
    ]
  },
  {
    path: "juru-parkir",
    component: JuruParkingComponent,
    children: [
      {
        path: '',
        component: JuruListComponent
      },
      {
        path: 'add',
        component: JuruAddComponent
      },
      {
        path: ":uuid",
        component: JuruDetailComponent
      },
      {
        path: ":uuid/edit",
        component: JuruEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TenantManagementRoutingModule { }
