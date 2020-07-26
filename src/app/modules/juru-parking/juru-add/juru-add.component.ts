import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'app/core/core.module';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-juru-add',
  templateUrl: './juru-add.component.html',
  styleUrls: ['./juru-add.component.scss']
})
export class JuruAddComponent implements OnInit {
  isAddNew: boolean = true;
  title = "Juru Parkir - ADD"
  constructor(private aut: AuthenticationService, private formBuilder: FormBuilder, private auts: AuthenticationService) {
    this.createForm()
  }
  merchant: String;
  ngOnInit() {
    this.merchant = this.auts.getSession().user.nama;
  }
  formReady: FormGroup;
  createForm() {
    this.formReady = this.formBuilder.group({
      nama: [],
      email: [],
      password: [],
      merchantApiKey: this.formBuilder.group({
        merchantApiKey: [this.aut.getSession().user.merchantApiKey]
      })
    })
  }
}
