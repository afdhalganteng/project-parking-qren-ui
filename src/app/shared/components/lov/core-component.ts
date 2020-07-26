import {
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isEmpty } from 'lodash-es';

import { CoreLov } from 'app/shared/models/core-lov.interface';

import { CoreLovService } from 'app/core/services/core-lov.service';

/**
 *  LOV for Core values.
 */
@Component({
    selector: 'lov-core',
    template: `
        <span *ngIf="withLabel">
            {{ label | translate }}
            <small class="text-danger" *ngIf="required">*</small>
        </span>
        <p-dropdown
            [(ngModel)]="selectedData"
            (onChange)="onChange($event.value)"
            [options]="list.getValue()"
            [style]="{
                border: 'none',
                'border-bottom': line,
                'border-radius': '0'
            }"
            [disabled]="disabled"
            [filter]="filter"
            [readonly]="readonly"
            appendTo="body"
            optionLabel="value"
            placeholder="{{ label | translate }}"
            class="form-dropdown"
            dropdownIcon="fas fa-caret-down"
        ></p-dropdown>
    `,
    providers: [CoreLovService],
})
export class CoreComponent implements OnInit, OnChanges {
    @Input() required = false;
    @Input() withLabel = true;
    @Input() line = '1px solid #DDDDDD';

    @Input() label: string;
    @Input() haveNullValue = false;
    @Input() chaining = false;
    @Input() uri: string;
    @Input() value: string;
    @Input() readonly = false;
    @Input() disabled = false;
    @Input() style: any;

    @Input() banned: string[] = [];
    @Input() filter = true;

    selectedData: CoreLov;
    @Output() selected = new EventEmitter<CoreLov>();

    list = new BehaviorSubject<any[]>(null);

    constructor(private coreLovService: CoreLovService) { }

    ngOnChanges(): void {
        // Condition: Lov is chain with another lov
        if (this.chaining) {
            this.ngOnInit();
        } else {
            if (this.value && !isEmpty(this.list.getValue())) {
                this.selectedData = this.list
                    .getValue()
                    .find(data => data.key === this.value);
            }
        }
    }

    ngOnInit(): void {

        this.coreLovService.getAll(this.uri).subscribe((list: CoreLov[]) => {
            list.map(item => {
                item.id = item.key;

                return item;
            });

            // TODO: for banned selection, fix later
            // this.listData = resp.filter(
            //     item => this.banned.indexOf(item.key) === -1
            // );

            this.list = new BehaviorSubject<any[]>([]);
            this.list.next(this.list.getValue().concat(list));

            if (!this.chaining) {
                this.ngOnChanges();
            }

            // add null value if need
            if (this.haveNullValue) {
                const nullVal: CoreLov[] = [
                    {
                        id: '',
                        key: '',
                        value: '-',
                    },
                ];
                this.list.next(nullVal.concat(this.list.getValue()));
            }
        });
    }

    onChange(lov: CoreLov): void {
        this.selected.emit(lov);
    }
}
