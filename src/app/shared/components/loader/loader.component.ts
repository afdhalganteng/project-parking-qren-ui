import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-component-loader',
    template: `
        <span *ngIf="isLoading | parseNumbToBool" class="ml-3">
            <span class="pr-2">
                <p-progressSpinner
                    [style]="{ width: '20px', height: '20px' }"
                ></p-progressSpinner>
            </span>
            <ng-container *ngFor="let msg of loadingMsgs">
                <span class="badge badge-success">{{ msg }}</span>
            </ng-container>
            <div *ngIf="payloadMsg">
                <span class="badge badge-danger">{{ payloadMsg }}</span>
            </div>
        </span>
    `,
})
export class LoaderComponent {
    @Input() payloadMsg: any;
    @Input() isLoading: number;
    @Input() loadingMsgs: string[];

    constructor() {}
}
