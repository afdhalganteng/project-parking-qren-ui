import { AppState } from '../state/app-state.interface';

export const selectLoadingActive = (state: AppState) => state.loading.active;
export const selectLoadingMessage = (state: AppState) =>
    state.loading.actionsInProgress;
