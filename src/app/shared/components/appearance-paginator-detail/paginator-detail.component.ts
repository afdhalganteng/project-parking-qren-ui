import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-appearance-paginator-detail',
    templateUrl: 'paginator-detail.component.html',
})
export class PaginatorDetailComponent {
    @Input() table: any;

    constructor() {}
}
