import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { version, Button } from "antd";
// import "antd/dist/antd.css";
import './View.css';
import WeldParameter from '../../JQR365/WeldParameter';
import WeldParameterTable from '../../JQR365/WeldParameterTable';

class View extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componenthidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div className="View">
        <WeldParameterTable></WeldParameterTable>
      </div>
    );
  }
}

export default View;