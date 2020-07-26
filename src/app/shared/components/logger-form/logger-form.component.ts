import { Component, Input, isDevMode } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-component-logger-form',
    template: `
        <ng-container *ngIf="isDev">
            <h3>{{ 'store' | translate }}</h3>
            <code>
                {{ storeItem | json }}
            </code>
            <hr />
            <h3>{{ 'formState' | translate }}</h3>
            <code>
                {{ formValue.getRawValue() | json }}
            </code>
        </ng-container>
    `,
})
export class LoggerFormComponent {
    @Input() storeItem: any;
    @Input() formValue: FormGroup | FormArray;

    constructor() {}

    get isDev(): boolean {
        return isDevMode();
    }
}
