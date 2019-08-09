import React, { Component } from 'react';
// import { version, Button } from "antd";
import './Robot.css';
import View from './View/View';
import StatusBar from './StatusBar/StatusBar';
import WeldParameterTable from '../JQR365/WeldParameterTable';
import WebService from './WebService'
import Button from '@material-ui/core/Button';

class Robot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      operatingMode: "UNDEF",
      controllerState: "init",
      runningSpeed: "100",
      programState: "stopped",
      systemName: WebService.GetRWSResourceSync("/rw/system?json=1", "name"),
      controllerName: WebService.GetRWSResourceSync("/ctrl/identity?json=1", "ctrl-name"),
    };
  }

  subscription() {
    var rWebServiceRequest = new XMLHttpRequest();

    rWebServiceRequest.onreadystatechange = () => {
      //readyState: 0 - UNSENT, 1 - OPENed, 2 - HEADERS_RECEIVED, 3 - LOADING, 4 - DONE
      //status: 200, 201 - CREATED
      if (rWebServiceRequest.readyState === 4 && rWebServiceRequest.status === 201) {
        var strLocation = rWebServiceRequest.getResponseHeader("Location");
        this.parseSubscriptionEvent(rWebServiceRequest.responseText)

        //must add sub-protocol "robapi2_subscription"
        var ws = new WebSocket(strLocation, "robapi2_subscription");

        ws.onopen = () => {
          console.log("onopen");
        };

        ws.onmessage = (evt) => {
          this.parseSubscriptionEvent(evt.data)
        };

        ws.onclose = () => {
          console.log("onclose");
        };

        ws.onerror = () => {
          console.log("onerror");
        };
      }
    }

    rWebServiceRequest.open("POST", "/subscription", true);
    rWebServiceRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    var strEntityBody = "resources=1&1=/rw/panel/ctrlstate&1-p=0"
      + "&resources=2&2=/rw/panel/opmode&2-p=0"
      + "&resources=3&3=/rw/panel/speedratio&3-p=0"
      + "&resources=4&4=/rw/rapid/execution;ctrlexecstate&4-p=0"
      ;
    rWebServiceRequest.send(strEntityBody);
  }

  componentDidMount() {
    this.subscription();
  }

  componentWillUnmount() {
  }

  parseSubscriptionEvent(received_msg) {
    function resolver(prefix) {
      switch (prefix) {
        default: return "http://www.w3.org/1999/xhtml";
      }
    }

    console.log(received_msg);
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(received_msg, "text/xml");
    var nodes = xmlDoc.evaluate("//xmlns:li[@class='pnl-ctrlstate-ev']/xmlns:span", xmlDoc, resolver, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    if (nodes.singleNodeValue != null) {
      this.setState({
        controllerState: nodes.singleNodeValue.innerHTML,
      });
    }
    nodes = xmlDoc.evaluate("//xmlns:li[@class='pnl-opmode-ev']/xmlns:span", xmlDoc, resolver, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    if (nodes.singleNodeValue != null) {
      this.setState({
        operatingMode: nodes.singleNodeValue.innerHTML,
      });
    }
    nodes = xmlDoc.evaluate("//xmlns:li[@class='pnl-speedratio-ev']/xmlns:span", xmlDoc, resolver, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    if (nodes.singleNodeValue != null) {
      this.setState({
        runningSpeed: nodes.singleNodeValue.innerHTML,
      });
    }
    nodes = xmlDoc.evaluate("//xmlns:li[@class='rap-ctrlexecstate-ev']/xmlns:span", xmlDoc, resolver, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    if (nodes.singleNodeValue != null) {
      this.setState({
        programState: nodes.singleNodeValue.innerHTML,
      });
    }
  }

  requestMastership() {
    WebService.RequestManualModePrivileges();
  }

  releaseMastership() {
    WebService.CancelManualModePrivileges();
  }

  render() {
    return (
      <div className="Robot">
        <StatusBar operatingMode={this.state.operatingMode}
          controllerState={this.state.controllerState}
          systemName={this.state.systemName}
          controllerName={this.state.controllerName}
          programState={this.state.programState}
          runningSpeed={this.state.runningSpeed} />
        <View numIndexNo="1" />
        <button onClick={this.requestMastership}>
          Request Mastership Lasers
        </button>
        <button onClick={this.releaseMastership}>
          Release Mastership Lasers
        </button>
        © Copyright 2019 FPD WAC ABB
      </div>
    );
  }
}

export default Robot;