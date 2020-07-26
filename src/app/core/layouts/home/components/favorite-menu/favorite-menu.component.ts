import { AfterViewInit, Component, Input, OnInit } from '@angular/core';


@Component({
    selector: 'app-home-favorite-menu',
    templateUrl: 'favorite-menu.component.html',
    styleUrls: ['favorite-menu.component.sass'],
})
export class FavoriteMenuComponent implements AfterViewInit {
    @Input() favMenus: any[] = [{ name: "Qren Parking - Telkom" }]

    constructor() { }

    ngAfterViewInit() {
        // this.modules.forEach(item => {
        //     this.onConstructFavMenu(item.parentMenu);
        // });
    }

    /**
     *  Construct Favorite Menu
     *  @param  parentMenu  List of Parent Menu
     */
}
