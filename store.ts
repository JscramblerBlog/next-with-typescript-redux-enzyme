import { createStore, StoreCreator } from 'redux';
import { TimerState, TimerActionTypes, INCREASE_SECONDS } from './types';

export const initialTimerState: TimerState = {
  seconds: 0,
  minutes: 0
};

export const reducer = (state = initialTimerState,
  action: TimerActionTypes): TimerState => {
  switch (action.type) {
    case INCREASE_SECONDS:
      const isOverAMinute: boolean = state.seconds >= 59;

      return {
        seconds: isOverAMinute ? 0 : state.seconds + 1,
        minutes: isOverAMinute ? state.minutes + 1 : state.minutes
      };

    default:
      return state;
  }
};

export function increaseTimer(): TimerActionTypes {
  return { type: INCREASE_SECONDS };
}

export function initializeStore(initialState: TimerState = initialTimerState): StoreCreator {
  return createStore(reducer, initialState);
}
