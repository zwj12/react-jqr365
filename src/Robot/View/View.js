import React, { Component } from 'react';
import './View.css';
import WeldParameter from '../../JQR365/WeldParameter';

class View extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div className="View">
        <table>
          <caption>LayerParameters</caption>
          <tr>
            <th>index</th>
            <th>Weld Speed</th>
          </tr>
          <WeldParameter numIndexNo="1"/>
        </table>
      </div>
    );
  }
}

export default View;