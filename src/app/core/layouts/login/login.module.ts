import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared/shared.module';

import { LoginPageComponent } from './pages/login/login.component';
import { LaddaModule } from 'angular2-ladda';
import { CheckboxModule } from 'primeng/primeng';
import { LovModule } from 'app/shared/components/lov/lov.module';
import { LoggerFormModule } from 'app/shared/components/logger-form/logger-form.module';
import { SignInComponent } from './sign-in/sign-in.component';
// import { MyappDetailComponent } from './my-applications/myapp-detail/myapp-detail.component';
// import { MyappListComponent } from './my-applications/myapp-list/myapp-list.component';
@NgModule({
    imports: [SharedModule, LaddaModule, CheckboxModule, LovModule, LoggerFormModule],
    declarations: [
        LoginPageComponent,
        SignInComponent,
    ],
    providers: [],
})
export class LoginModule { }
