import { NgModule } from '@angular/core';

import { PanelMenuModule } from 'primeng/components/panelmenu/panelmenu';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'app/shared/shared.module';
import { LoaderModule } from '../loader/loader.module';

import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { FavoriteMenuComponent } from './components/favorite-menu/favorite-menu.component';
import { HeaderService } from './components/header/shared/header.service';
import { AutoCompleteModule } from 'primeng/primeng';
// import { WebSocketNewService } from 'app/core/services/web-socket-new.service';

@NgModule({
    imports: [SharedModule, HomeRoutingModule, PanelMenuModule, LoaderModule, AutoCompleteModule],
    declarations: [
        HomeComponent,
        HeaderComponent,
        MenuComponent,
        FavoriteMenuComponent,
    ],
    providers: [HeaderService],
    exports: [HeaderComponent],
})
export class HomeModule { }
