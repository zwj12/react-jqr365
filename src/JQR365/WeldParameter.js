/*
 * @Description: In User Settings Edit
 * @Author: Michael
 * @Date: 2019-07-29 14:32:43
 * @LastEditTime: 2019-07-29 16:01:02
 * @LastEditors: Please set LastEditors
 */

import WebService from '../Robot/WebService';
import ArcData from './ArcData';
import WeldData from './WeldData';
import React, { Component } from 'react';
import './WeldParameter.css';

class WeldParameter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: "T_ROB1",
            module: "JQR365WeldDataModule",
            numIndexNo: this.props.numIndexNo,
            weldData: new WeldData(),
        };
        this.refreshDataFromWebServiceSync();
    }

    toString() {
        var strWeldParameter = this.state.weldData.toString();
        // console.log(strWeldParameter);
        return strWeldParameter;
    }

    refreshDataFromWebServiceSync() {
        var strWeldData = "";
        if (this.state.numIndexNo < 10) {
            strWeldData = WebService.GetRapidSymbolDataSync(this.state.task, this.state.module, "weld0" + this.state.numIndexNo)
        } else {
            strWeldData = WebService.GetRapidSymbolDataSync(this.state.task, this.state.module, "weld" +  this.state.numIndexNo)
        }
        console.log(strWeldData);
        this.state.weldData.parse(strWeldData);
    }

    // static getWeldParameters() {
    //     var WeldParameters = new Array(0);
    //     for (var i = 0; i < 40; i++) {
    //         var WeldParameter = new WeldParameter();
    //         WeldParameter.refreshDataFromWebServiceSync(i+1);
    //         // console.log(WeldParameter.toString());
    //         WeldParameters[WeldParameters.length] = WeldParameter;
    //     }
    //     return WeldParameters;
    // }

    render() {
        return (
            <tr>
                <td>{this.state.numIndexNo}</td>
                <td>{this.state.weldData.weld_speed}</td>
            </tr>
        );
    }
}

export default WeldParameter;