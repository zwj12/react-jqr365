import React, { Component } from 'react';
import './StatusBar.css';

class StatusBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      operatingMode: "UNDEF",
      controllerState: "init",
      runningSpeed: "100",
      programState: "stopped",
      systemName: "",
      controllerName: "",
    };
  }

  componentDidMount() {
    //console.log("componentDidMount by StatusBar");
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
     this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className="StatusBar">
        <table>
          <tr>
            <td>{this.props.operatingMode}</td>
            <td>{this.props.controllerState}</td>
            <td>{this.state.date.toLocaleTimeString()}</td>
          </tr>
          <tr>
            <td>{this.props.systemName}&nbsp;({this.props.controllerName})</td>
            <td>{this.props.programState}</td>
            <td>{this.props.runningSpeed}%</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default StatusBar;