import React from "react";

// npm install bootstrap--save
import "bootstrap/dist/css/bootstrap.min.css";

import { MdAlarmOn, MdAlarmOff } from "react-icons/md";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date().toLocaleString(), running: false };
  }

  startClock = event => {
    this.MyTime = setInterval(() => {
      this.setState({ time: new Date().toLocaleString() });
    }, 1000);
    this.setState({ running: true });
    this.props.updateApp(true)
  };

  stopClock = event => {
    clearInterval(this.MyTime);
    this.setState({ running: false });
    this.props.updateApp(false)
    
    
  };
  render() {
    return (
      <div>
        <h1>{this.state.time}</h1>

        <button
          style={{ margin: "12px" }}
          className={this.state.running ? "btn btn-danger" : "btn btn-success"}
          onClick={this.startClock}

        >
          <MdAlarmOn /> Start
        </button>

        <button className={this.state.running ? "btn btn-success" : "btn btn-danger"}
        onClick={this.stopClock}>
          <MdAlarmOff /> Stop
        </button>
      </div>
    );
  }
}

export default Clock;
