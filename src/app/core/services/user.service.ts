import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

import { ApiService } from '../http/api.service';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    // private dateFormat: string = this.session.getSession().dateFormat;

    constructor(
        private apiService: ApiService,
        private authService: AuthenticationService,
        // private datePipe: DatePipe
    ) {}

    /**
     * Api get generated password
     * @returns Observable<AppResponse>
     */
    generatePassword() {
        return this.apiService.get('um/generatePassword');
    }

    /**
     * Api user change password
     * @param   form Form data
     * @returns Observable<AppResponse>
     */
    changePassword(form: any) {
        return this.apiService.post('um/user/changePassword', form);
    }

    /**
     * User list value mapper
     * @param   list List of Data
     * @returns any
     */
    userListValueMapper(list: any[]) {
        return list.map(item => {
            // item.effBegin = this.datePipe.transform(
            //     item.effBegin,
            //     this.dateFormat
            // );
            // item.effEnd = this.datePipe.transform(item.effEnd, this.dateFormat);
            // return item;
        });
    }

    /**
     * Role list value mapper
     * @param   list List of Data
     * @returns any
     */
    roleLovListMapper(list: any[]) {
        return list.map(item => {
            item.label = `${item.name} - ${item.companyName}`;
            item.value = {
                id: item.id,
                name: item.name,
                companyName: item.companyName,
            };
            return item;
        });
    }

    getUsers() {
        return null;
    }
}
