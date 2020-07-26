import { Component, OnInit } from '@angular/core';
import { AuthenticationService, MessageBoxService } from 'app/core/core.module';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JuruService } from '@core-service/juru-parkiri-service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-juru-detail',
  templateUrl: './juru-detail.component.html',
  styleUrls: ['./juru-detail.component.scss']
})
export class JuruDetailComponent implements OnInit {
  merchant: String;
  id: String = this.route.snapshot.params.uuid;
  isInDetail: boolean = true;
  jur: boolean = false;
  title = "Juru Parkir - Detail"
  constructor(private aut: AuthenticationService, private formBuilder: FormBuilder, private service: JuruService, private route: ActivatedRoute, private loc: Location,
    private message: MessageBoxService) {
    this.merchant = this.aut.getSession().user.nama;
    this.createForm()
  }
  formReady: FormGroup
  createForm() {
    this.formReady = this.formBuilder.group({
      idJuru: [],
      nama: [],
      email: [],
      password: [],
      token: [],
      merchantApiKey: this.formBuilder.group({
        merchantApiKey: ['']
      })
    })
  }
  ngOnInit() {
    this.onLoadData()
  }

  onLoadData() {
    let id = this.route.snapshot.params.uuid
    this.service.getByIdJuru(id).subscribe(res => {
      this.formReady.patchValue(res);
    }, (err) => {
    }, () => {
      this.jur = !this.jur;
    })

  }

}
