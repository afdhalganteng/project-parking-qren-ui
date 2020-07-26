import { Component, Input, OnInit } from '@angular/core';

import { Router } from '@angular/router';

declare var $: any;

@Component({
    selector: 'app-home-menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['menu.component.sass'],
})
export class MenuComponent implements OnInit {
    @Input() modules: any[] = [
        { name: "Parking Dashboard", icon: "fas fa-car", path: "/dashboard" },
        { name: "Manage Juru Parkir", icon: "fas fa-user", path: "/juru-parkir" },
        { name: "Merchant Setting", icon: "fa fa-cog ", path: "/merchant-setting" }
    ]

    isActive = false;
    menuSelect: string;

    constructor(private route: Router) {
        this.menuSelect = route.url;

    }

    menuClick(menu) {
        for (let b of this.modules) {
            if (b.path === menu) {
                b.border = true;
            }
            else {
                b.border = false;
            }
        }
    }

    ngOnInit(): void {
        let flag: number = 0
        let flagData: any[] = [];
        if (this.modules) {
            for (let b of this.modules) {
                if (b.path.split("/")[1] === this.menuSelect.split("/")[1]) {
                    let c: any[] = b.path.split("/");
                    b.border = true;
                    flag++;
                    flagData.push(b)
                }

            }
            if (flag > 1) {
                for (let b of flagData) {
                    if (b.path.split("/")[2] === this.menuSelect.split("/")[2]) {
                        let c: any[] = b.path.split("/");
                        b.border = true;
                        flag++;
                    }
                    else {
                        b.border = false
                    }


                }
            }
        }
    }

    onToggleActive() {
        this.isActive = !this.isActive;
    }
}
