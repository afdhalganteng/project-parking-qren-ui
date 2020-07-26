import {
    LoadingSpinnerTypes,
    SpinnerAction,
} from '../actions/loading-spinner.action';
import { initialState, SpinnerState } from '../state/loading-spinner.state';

export function spinnerReducer(
    state = initialState,
    action: SpinnerAction
): SpinnerState {
    switch (action.type) {
        case LoadingSpinnerTypes.ShowSpinner: {
            const isActionAlreadyInProgress = state.actionsInProgress.filter(
                (currentAction: any) => currentAction === action.payload.type
            ).length;

            // If the action in already in progress and is registered
            // we don't modify the state
            if (isActionAlreadyInProgress) {
                return state;
            }
            // Adding the action type in our actionsInProgress array
            const newActionsInProgress = [
                ...state.actionsInProgress,
                action.payload.type,
            ];

            return Object.assign(state, {
                active: newActionsInProgress.length,
                actionsInProgress: newActionsInProgress,
            });
        }

        case LoadingSpinnerTypes.HideSpinner: {
            // We remove trigger action from actionsInProgress array
            const newActionsInProgress = action.payload.triggerAction
                ? state.actionsInProgress.filter(
                      (currentAction: any) =>
                          currentAction !== action.payload.triggerAction
                  )
                : state.actionsInProgress;

            return Object.assign(state, {
                actionsInProgress: newActionsInProgress,
                active: state.active > 0 ? newActionsInProgress.length : 0,
            });
        }

        default:
            return state;
    }
}
