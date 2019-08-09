import "babel-polyfill";
// import "core-js/stable";
// import "regenerator-runtime/runtime";
// import "react-app-polyfill/ie11";
// import "react-app-polyfill/stable";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WeldParameterTable from "./JQR365/WeldParameterTable"
import WeldParameterV2 from "./JQR365/WeldParameterV2"
import Robot from './Robot/Robot';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<WeldParameterV2/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
