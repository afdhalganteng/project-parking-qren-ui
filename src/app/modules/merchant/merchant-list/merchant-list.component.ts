import { Component, OnInit } from '@angular/core';
import { MerchantApiService } from '@core-service/merchant-service';
import { AuthenticationService } from 'app/core/core.module';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-merchant-list',
  templateUrl: './merchant-list.component.html',
  styleUrls: ['./merchant-list.component.scss']
})
export class MerchantListComponent implements OnInit {
  title = "Merchant - Setting"
  constructor(private mers: MerchantApiService, private autService: AuthenticationService, private formBuilder: FormBuilder) {
    this.createFormTarif()
    this.onLoadData()
  }
  isView = true;
  merchant: any;
  tarifData: any[] = [];
  formReady: FormGroup;
  jur: boolean = false;
  ngOnInit() {
  }

  onLoadData() {
    let merpKey = this.autService.getSession().user.merchantApiKey;
    this.mers.findDaftarTarif(merpKey).subscribe(res => {
      this.merchant = res;
      this.formReady.patchValue(res);
      console.log("tarid", this.formReady.getRawValue());

    })
    this.mers.getAllDaftarTArif().subscribe(res => {
      let b: any[] = res;
      this.tarifData = b.map(item => {
        return { label: "Motor : " + item.motor + " Mobil : " + item.mobil + " Truk : " + item.truk + " No Ticket : " + item.noTicket, value: item }
      })
    }, (err) => {

    }, () => {
      this.jur = !this.jur;
    })
  }

  onSelectTarif(event) {

    console.log("event", event);
    this.formReady.get("idTarif").patchValue(event.value);
    console.log("form Change", this.formReady.getRawValue());



  }

  createFormTarif() {
    this.formReady = this.formBuilder.group({
      idDaftar: [],
      idTarif: this.formBuilder.group({
        idTarif: []
      }),
      merchantApiKey: this.formBuilder.group({
        merchantApiKey: []
      }),
    })
  }


}
