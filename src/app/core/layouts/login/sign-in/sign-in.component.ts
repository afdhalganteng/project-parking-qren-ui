import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MerchantApiService } from '@core-service/merchant-service';
import { AuthenticationService } from 'app/core/authentication/authentication.service';
@Component({
  selector: 'app-login-signin',
  templateUrl: 'sign-in.component.html',
  styleUrls: ['sign-in.component.sass'],
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup
  constructor(private formBuilder: FormBuilder, private router: Router, private serv: MerchantApiService, private aut: AuthenticationService) {
    this.createForm();
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  ngOnInit(): void {
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      username: [
        '',
        [
          Validators.required,
        ],
      ],
      password: ['', Validators.required],
      // 'g-recaptcha-response': [''],
    });
  }

  onSubmit() {
    this.serv.login(this.loginForm.getRawValue()).subscribe(res => {
      console.log("res", res);

      this.aut.createSession(JSON.parse(res));
      console.log("seesison", this.aut.getSession());
      this.router.navigate(['/dashboard']);

    })
  }

}
