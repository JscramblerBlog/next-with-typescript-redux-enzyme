import { AppProps } from 'next/app';
import { Store } from 'redux';

export interface TimerState {
  seconds: number;
  minutes: number;
}

export const INCREASE_SECONDS = 'INCREASE_SECONDS';

interface IncreaseTimerAction {
  type: typeof INCREASE_SECONDS;
}

export type TimerActionTypes = IncreaseTimerAction;

export interface TimerProps {
  timer: TimerState;
  increaseTimer: () => void;
}

export interface ReduxAppProps extends AppProps {
  reduxStore: Store;
}
