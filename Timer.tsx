import React, { Component } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { increaseTimer } from './store';
import { TimerProps, TimerState } from './types';

export class TimerComponent extends Component<TimerProps> {
  intervalTimer: any;

  componentDidMount() {
    this.intervalTimer = setInterval(() => this.increase(), 1000);
  }

  increase = () => this.props.increaseTimer();

  componentWillUnmount() {
    clearInterval(this.intervalTimer);
  }

  render() {
    const padToTwo = (number: number): string =>
      number < 10 ? `0${number}` : number + '';

    const seconds = padToTwo(this.props.timer.seconds);
    const minutes = padToTwo(this.props.timer.minutes);

    return (
      <>
        <h1>Timer</h1>
        <p>{minutes}:{seconds}</p>
      </>
    );
  }
}

const mapStateToProps = (state: TimerState) => ({
    timer: state
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ increaseTimer }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps)(TimerComponent);
