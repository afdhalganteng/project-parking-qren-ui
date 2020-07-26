import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MessageBoxService } from 'app/core/core.module';
import { ConfirmationService } from 'primeng/api';
import { MerchantApiService } from '@core-service/merchant-service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.scss']
})
export class MerchantComponent implements OnInit {
  title: string;
  isInDetail: boolean;
  isView: boolean;
  isAddNew: boolean;
  formReady: FormGroup;
  id: String;
  subMenu: any[] = []
  jur: boolean = true;
  constructor(private message: MessageBoxService, private confirmation: ConfirmationService, private service: MerchantApiService,
    private loc: Location) { }

  ngOnInit() {
  }

  onRouterOutletActivate(event) {
    this.title = event.title;
    this.isView = event.isView;
    this.isInDetail = event.isInDetail;
    this.isAddNew = event.isAddNew;
    this.formReady = event.formReady;
    this.id = event.id;
  }

  onAdd() {
    this.confirmation.confirm({
      message: 'Are you sure want to Change Tarif ?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        let b = this.formReady.getRawValue();
        this.service.putTarif(b.idDaftar, b).subscribe(
          res => {
            this.message.showSuccess(res);
          }
        ), (err) => {

        }, () => {
        }
      },
    });
  }

  onBack() {
    this.loc.back();

  }

}
