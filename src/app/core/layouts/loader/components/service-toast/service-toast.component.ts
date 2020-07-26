import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { AppState } from '@state/app-state.interface';
import {
    selectLoadingActive,
    selectLoadingMessage,
} from '@selectors/loading-spinner.selector';

@Component({
    selector: 'app-loader-service-toast',
    templateUrl: './service-toast.component.html',
    styleUrls: ['./service-toast.component.sass'],
})
export class ServiceToastComponent implements OnInit, OnDestroy {
    private loadingSubs: Subscription;

    isLoading$ = this.store.pipe(select(selectLoadingActive));
    loadingMsgs$ = this.store.pipe(select(selectLoadingMessage));

    constructor(
        private route: ActivatedRoute,
        private store: Store<AppState>,
        private messageService: MessageService,
        private translateService: TranslateService
    ) { }

    ngOnInit() {
        this.loadingSubs = this.isLoading$
            .pipe(filter(val => val < 2))
            .subscribe(
                isLoad => {
                    if (isLoad) {
                        this.onShowLoading();
                    } else {
                        this.messageService.clear('loading');
                    }
                },
                err => console.error('Loading Error', err)
            );
    }

    /**
     *  Show loading message
     */
    onShowLoading() {
        this.messageService.add({
            key: 'loading',
            severity: 'success',
            detail: this.translateService.instant('working') + '...',
        });
    }

    /**
     *  Clean-up resources
     */
    @HostListener('window:beforeunload')
    ngOnDestroy() {
        this.loadingSubs.unsubscribe();
    }
}
