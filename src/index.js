/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-26 11:33:25
 * @LastEditTime: 2019-08-19 09:07:10
 * @LastEditors: Please set LastEditors
 */
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
import WeldParameterV3 from "./JQR365/WeldParameterV3"
import Robot from './Robot/Robot';
import { Provider } from 'react-redux'
import store from './redux/store'
import * as serviceWorker from './serviceWorker';
  
ReactDOM.render(
    <Provider store={store}>
        <WeldParameterV3 />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
