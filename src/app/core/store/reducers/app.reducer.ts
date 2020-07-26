import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

import { AppState } from '@state/app-state.interface';

import { spinnerReducer } from './loading-spinner.reducer';



export const appReducer: ActionReducerMap<AppState> = {
    // Master Reducer
    router: routerReducer,
    // notifications: notificationReducer,
    loading: spinnerReducer,

    // Module Reducer

};
