import { Action } from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export function CounterReducer(state: number = 0, action: Action) {
    switch (action.type) {
        case INCREMENT: {
            const newState: number = state;
            return newState + 1;
        }

        case DECREMENT: {
            const newState: number = state;
            return newState - 1;
        }

        case RESET: {
            return 0;
        }

        default: {
            return state;
        }
    }
}
