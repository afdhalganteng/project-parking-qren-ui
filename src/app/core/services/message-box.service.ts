import { Injectable } from '@angular/core';

import { MessageService } from 'primeng/components/common/messageservice';

export interface ErrorValidationApi {
    key: string;
    message: any[];
}

/**
 * A convenient service for showing notification message box
 */
@Injectable({
    providedIn: 'root',
})
export class MessageBoxService {
    constructor(private messageService: MessageService) {}

    public showWarn(message: string, title: string = 'Warning') {
        this.showMessage('warn', title, message);
    }

    public showSuccess(message: string, title: string = 'Success') {
        this.showMessage('success', title, message);
    }

    public showInfo(message: string, title: string = 'Information') {
        this.showMessage('info', title, message);
    }

    public showError(message: string, title: string = 'Error') {
        this.showMessage('error', title, message);
    }

    private showMessage(severity: string, title: string, message: string) {
        this.messageService.add({
            severity,
            summary: title,
            detail: message,
        });
    }

    /**
     * This method is used to handle 422 HTTP status response from API
     * with status code = 444 (JSON Format validation violation)
     * @param   errorValidationApi List of Error Validation API
     * @returns any[]
     */
    public showMessageValidationFromApi(
        errorValidationApi: ErrorValidationApi[]
    ): void {
        const msgs: any[] = [];

        for (const summary of errorValidationApi) {
            for (const detail of summary.message) {
                msgs.push({
                    severity: 'warn',
                    summary: summary.key,
                    detail,
                });
            }
        }

        this.messageService.addAll(msgs);
    }
}
