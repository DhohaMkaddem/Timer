import React, { Component } from "react";

class TestState extends Component {
  state = {
    timer: 0,
    isStarted: false
  };

  startTimerHandler = () => {
    this.startTimer = setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  };

  pauseTimerHandler = () => {
    clearInterval(this.startTimer);
  };

  toggleTimerHandler = () => {
    this.setState({ isStarted: !this.state.isStarted });
    if (this.state.isStarted) {
      this.pauseTimerHandler();
    } else {
      this.startTimerHandler();
    }
  };
  resetTimer = () => {
    clearInterval(this.startTimer);
    this.setState({ timer: 0, isStarted: false });
  };
  render() {
    const { timer, isStarted } = this.state;
    const hour = Math.floor(timer / 3600).toString();
    const min = Math.floor((timer % 3600) / 60).toString();
    const second = ((timer % 3600) % 60).toString();

    return (
      <div>
        <h1>timer</h1>
        <p>
          {hour.length === 1 ? `0${hour}` : hour}:
          {min.length === 1 ? `0${min}` : min}:
          {second.length === 1 ? `0${second}` : second}
        </p>
        <button onClick={this.resetTimer}>reset</button>
        <button onClick={this.toggleTimerHandler}>
          {isStarted ? "pause" : "start"}
        </button>
      </div>
    );
  }
}

export default TestState;
