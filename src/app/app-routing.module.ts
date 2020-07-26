import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

// import { ForgotPasswordComponent } from './components/Authentication/forgot-password/forgot-password.component';


import { LoginPageComponent } from './core/layouts/login/pages/login/login.component';


import { SignInComponent } from './core/layouts/login/sign-in/sign-in.component';



const routes: Routes = [
    // TopBar Routes

    // Authetication Routes

    {
        path: 'login',
        component: LoginPageComponent,
        children: [{
            path: '',
            component: SignInComponent
        }]

    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule { }
