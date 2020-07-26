export interface SpinnerState {
    actionsInProgress: any[];
    active: number;
}

export const initialState: SpinnerState = {
    actionsInProgress: [],
    active: 0,
};
