import { Action } from '@ngrx/store';

export enum LoadingSpinnerTypes {
    ShowSpinner = '[UI] Show loading spinner',
    HideSpinner = '[UI] Hide loading spinner',
}

export class ShowSpinner implements Action {
    readonly type = LoadingSpinnerTypes.ShowSpinner;

    constructor(public payload: any) {}
}

export class HideSpinner implements Action {
    readonly type = LoadingSpinnerTypes.HideSpinner;

    constructor(public payload: any) {}
}

export type SpinnerAction = ShowSpinner | HideSpinner;
