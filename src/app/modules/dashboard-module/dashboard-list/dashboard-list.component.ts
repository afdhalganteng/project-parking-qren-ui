import { Component, OnInit } from '@angular/core';
import { DashboardService } from '@core-service/dashboard-service';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'app/core/core.module';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.sass'],
  providers: [DatePipe]
})
export class DashboardListComponent implements OnInit {
  title = "Parking Dashboard"
  colums: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  actions: any[] = [
    { label: "ALL", value: null },
    { label: "Success", value: "Suc" },
    { label: "Pending", value: "Pending" }
  ];
  dataDashboard$: Observable<any>;
  formReady: FormGroup
  dataCount$: Observable<any>;
  fileName: string;

  constructor(private dasboardService: DashboardService, private autService: AuthenticationService
    , private formBuilder: FormBuilder, private datepipe: DatePipe) {
    this.fileName = "Report Parking " + this.autService.getSession().user.nama + " " + this.datepipe.transform(new Date(), "yyyy-MM-dd");
    this.onLoadData();
    this.createForm();
  }
  data: any[] = []
  showExport: boolean = false;
  ngOnInit() {
  }

  onSelectAction(event) {
    console.log("event", event);
    this.dataDashboard$ = this.dasboardService.geJuruListStatus(event.value);

  }

  createForm() {
    this.formReady = this.formBuilder.group({
      start: [],
      end: [],
      merchant: [this.autService.getSession().user.merchantApiKey]
    })
  }

  onLoadData() {
    this.dasboardService.getJuruAll().subscribe(res => {
      this.data = res.map(data => {
        return {
          "invoice": data.invoiceId ? data.invoiceId : "-",
          "Amount": data.amount ? data.amount : "-",
          "Tanggal Masuk": data.enteredDate ? data.enteredDate : "-",
          "Tanggal Keluar": data.exitDate ? data.exitDate : "-",
          "Jenis Kendaraan": data.jenisKendaraan ? data.jenisKendaraan : "-",
          "Payment Method": data.paymentMethod ? data.paymentMethod : "-",
          "No Plat": data.platNo ? data.platNo : "-",
          "QREN Invoice": data.qrenInvoice ? data.qrenInvoice : "-",
          "Source of Fund ": data.sourceOfFund ? data.sourceOfFund : "-",
          "Status": data.status ? data.status : "Pending",
          "Juru Parkir": data.idjuru.nama ? data.idjuru.nama : "-"
        }
      })
      this.showExport = true;
      console.log("asdasd", this.data);

    })
    this.dataDashboard$ = this.dasboardService.geJuruListStatus();
    this.dataCount$ = this.dasboardService.getCount();

  }

  onSearch() {
    const form = this.formReady.getRawValue();
    let date = new Date(form.end);
    const dateEff: Date = new Date(form.end);
    dateEff.setDate(dateEff.getDate() + 1);
    form.end = this.datepipe.transform(dateEff, "yyyy-MM-dd");
    console.log('new Date', dateEff);
    this.dataDashboard$ = this.dasboardService.geJuruListDate(form);

  }

  getValue(event) {

    console.log("eee", event);


  }
  onRefresh() {
    this.dataDashboard$ = this.dasboardService.geJuruListStatus();

  }
}
