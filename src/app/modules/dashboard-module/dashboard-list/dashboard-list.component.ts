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
  colums: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
  dataDashboard$: Observable<any>;
  formReady: FormGroup
  dataCount$: Observable<any>;

  constructor(private dasboardService: DashboardService, private autService: AuthenticationService
    , private formBuilder: FormBuilder, private datepipe: DatePipe) {
    this.onLoadData();
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.formReady = this.formBuilder.group({
      start: [],
      end: [],
      merchant: [this.autService.getSession().user.merchantApiKey]
    })
  }

  onLoadData() {
    this.dataDashboard$ = this.dasboardService.geJuruList(this.autService.getSession().user.merchantApiKey);
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
    this.dataDashboard$ = this.dasboardService.geJuruList(this.autService.getSession().user.merchantApiKey);

  }
}
