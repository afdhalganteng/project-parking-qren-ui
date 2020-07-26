import { Component, Input, ViewEncapsulation, OnInit, OnChanges } from '@angular/core';
import $ from 'jquery';

import { Router } from '@angular/router';

@Component({
    selector: 'app-appearance-submenu',
    templateUrl: 'submenu.component.html',
    styleUrls: ['submenu.component.sass'],
    encapsulation: ViewEncapsulation.Emulated
})
export class SubmenuComponent implements OnInit, OnChanges {
    @Input() subMenu: any[] = []

    parentActive: boolean;
    menuSelect: any;
    flagBorder: boolean = false;

    constructor(private route: Router) {
        this.levelTwo();
        this.menuSelect = route.url;
    }

    ngOnChanges(): void {
        this.ngOnInit()
    }

    ngOnInit(): void {
        if (this.subMenu) {
            for (let b of this.subMenu) {
                for (let g of b.childs) {
                    if (g.link === this.menuSelect) {
                        b.border = true;
                    }
                }
            }
        }
    }

    /**
     *  Multi Level dropdowns
     */
    levelTwo() {
        $(document).ready(function () {
            $("ul.dropdown-menu [data-toggle='dropdown']").on('click', function (
                event
            ) {
                event.preventDefault();
                event.stopPropagation();

                $(this)
                    .siblings()
                    .toggleClass('show');

                if (
                    !$(this)
                        .next()
                        .hasClass('show')
                ) {
                    $(this)
                        .parents('.dropdown-menu')
                        .first()
                        .find('.show')
                        .removeClass('show');
                }
                $(this)
                    .parents('li.nav-item.dropdown.show')
                    .on('hidden.bs.dropdown', function (e) {
                        $('.dropdown-submenu .show').removeClass('show');
                    });
            });
        });
    }
}
