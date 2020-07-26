import { Injectable } from '@angular/core';

import { ApiService } from 'app/core/http/api.service';
import { Notifications } from './header.model';
import { HttpParams } from '@angular/common/http';
import { AuthenticationService } from 'app/core/authentication/authentication.service';

@Injectable()
export class HeaderService {
    public selectedUuid: string;
    public notifications: Notifications[] = [];
    public notification: Notifications;

    constructor(private api: ApiService,
        private aut: AuthenticationService) { }

    /**
     * 	Api get all Working Condition Type
     */
    getAll(pi) {
        let param = new HttpParams()
            .set('page', pi.pageInfo)
            .set('limit', pi.pageLimit)
        return this.api.get('notifications', param);
    }
    getAllByCompany() {
        return this.api.get('notifications?page=1&limit=3');
    }
    getAllByTenant() {
        return this.api.get('notifications?page=1&limit=3');
    }
    getAllByPersonal() {
        return this.api.get('notifications?page=1&limit=3');
    }

    refreshToken(any, actionPayload) {
        this.aut.setSession(actionPayload)
        return this.api.post('refresh', any);
    }




    /**
     * 	Api get one Working Condition Type
     *  @param   uuid Working Condition Type UUID
     */
    getOne(uuid: string) {
        return this.api.get('notification/' + uuid);
    }

    /**
     * 	Api save Working Condition Type
     *  @param   workingConditionType Working Condition Type data
     */
    save(notification: any) {
        return this.api.postNotif('notification-filter?page=1&limit=3', notification);
    }

    /**
     * 	Api update Working Condition Type
     *  @param   workingConditionType Working Condition Type data
     */
    // update(notification: Notifications) {
    //     return this.api.put('notification', notification);
    // }

    update(uuid: string) {
        return this.api.put('notification/' + uuid, null);
    }

    /**
     * 	Api delete Working Condition Type
     *  @param   uuid Working Condition Type UUID
     */
    delete(uuid: string) {
        return this.api.delete('notification/' + uuid);
    }
}
