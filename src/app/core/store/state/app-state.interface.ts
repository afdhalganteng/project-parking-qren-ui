import { RouterReducerState } from '@ngrx/router-store';

import { SpinnerState } from './loading-spinner.state';


export interface AppState {

    router: RouterReducerState;
    loading: SpinnerState;

}
