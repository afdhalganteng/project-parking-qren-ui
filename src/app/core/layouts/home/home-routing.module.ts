import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuard } from 'app/core/guards/auth.guard';

import { HomeComponent } from './pages/home/home.component';

import { MODULE_ROUTES } from 'app/configs/routes.config';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: MODULE_ROUTES,
        canActivate: [AuthGuard],
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ],
    exports: [RouterModule],
})
export class HomeRoutingModule {}
