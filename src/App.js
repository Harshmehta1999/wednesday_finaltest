import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyTimer from "./Components/MyTimer";
import "bootstrap/dist/css/bootstrap.min.css";
import Emoji from "./Components/Emoji";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { running: false };
  }

  onMessageFromTimer = playingBoolean => {
   
    this.setState({ running: playingBoolean });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" style={{animationPlayState: this.state.running ? "running" : "paused"}}/>

          {/* <MyTimer updateApp={this.onMessageFromTimer}/> */}
          
          <Emoji />
        </header>
      </div>
    );
  }
}

export default App;
