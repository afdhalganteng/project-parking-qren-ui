import { Injectable } from '@angular/core';

import {
    Session,
    User,
} from 'app/shared/models/session.interface';

import { AppConstant } from 'app/configs/app.config';

/**
 *  Authentication & Authorization
 */
@Injectable({
    providedIn: 'root',
})
export class AuthenticationService {
    privilegeMenu: any;

    constructor() { }

    /**
     *  Store anything to local storage.
     *  @param   key Local Storage Key
     *  @param   value Local Storage Value
     */
    private setLocalStorage(key: string, value: any) {
        // Store user session in local storage HTML 5
        localStorage.setItem(key, btoa(JSON.stringify(value)));
    }

    /**
     *  Retrieve anything from local storage.
     *  @param   key Local Storage Key
     */
    private getLocalStorage(key: string) {
        const item = localStorage.getItem(key);

        if (item) {
            return JSON.parse(atob(item));
        } else {
            return item;
        }
    }



    /**
     *  Check whether user is login or not
     *  @return  boolean
     */
    isLoggedIn(): boolean {
        return this.getLocalStorage(AppConstant.userSessionKey) !== null;
    }

    /**
     *  Clear current user session
     */
    destroySession() {
        localStorage.clear();
    }

    /**
     *  Clear current user action
     */
    destroyActionSession() {
        sessionStorage.removeItem(AppConstant.actionKey);
    }

    /**
     *  Get current user session
     *  @return   UserSession
     */
    getSession(): UserSession {
        return this.getLocalStorage(AppConstant.userSessionKey);
    }

    /**
     *  Get current user company
     *  @return   Company
     */

    /**
     *  Get general setting
     *  @return   setting
     */


    /**
     *  Create user session. Invoke when login.
     *  @param session   User Data from API Response
     */
    createSession(session: Session) {
        this.setLocalStorage(AppConstant.userSessionKey, session);
        localStorage.setItem("seen_badge", "false");
        // localStorage.setItem("seen_badge", "false");
        // if (localStorage.seen_badge === "false") {
        //     alert('localStorage.seen_badge === false');
        // }
    }
    setSession(token: string) {
        let b: any = this.getSession();
        b.token.accessToken = token;
        this.setLocalStorage(AppConstant.userSessionKey, b);
        console.log('user sssss', b);

    }



    /**
     *  Change User Company.
     *  @param company   User Company Data
     */

}

export class UserSession implements Session {
    user?: User;
    constructor(session: Session) {
        const { user } = session;

        this.user = user;
    }
}
