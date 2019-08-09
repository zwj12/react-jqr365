/*
 * @Description: In User Settings Edit
 * @Author: Michael
 * @Date: 2019-07-29 14:32:43
 * @LastEditTime: 2019-07-30 10:04:19
 * @LastEditors: Please set LastEditors
 */

import WebService from '../Robot/WebService';
import SeamData from './SeamData';
import WeldData from './WeldData';
import WeaveData from './WeaveData';
import React, { Component } from 'react';
import './WeldParameter.css';

class WeldParameter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: "T_ROB1",
            module: "JQR365WeldDataModule",
            numIndexNo: this.props.numIndexNo,
            seamData: new SeamData(),
            weldData: new WeldData(),
            weaveData: new WeaveData(),            
        };
     }

    toString() {
        var strWeldParameter = this.state.weldData.toString();
        // console.log(strWeldParameter);
        return strWeldParameter;
    }

    static getWeldParameters() {
        let weldParameters = new Array(0);
        for (let i = 0; i < 32; i++) {
            let weldParameter = new WeldParameter();
            // console.log(WeldParameter.toString());
            weldParameters[weldParameters.length] = weldParameter;
        }
        return weldParameters;
    }

    render() {
        this.state.seamData.refreshDataFromWebServiceSync(this.state.numIndexNo);
        this.state.weldData.refreshDataFromWebServiceSync(this.state.numIndexNo);
        this.state.weaveData.refreshDataFromWebServiceSync(this.state.numIndexNo);

        return (
            <tr>
                <td>{this.state.numIndexNo}</td>
                <td>{this.state.weldData.weld_speed}</td>
                <td>{this.state.weldData.main_arc.mode}</td>
                <td>{this.state.weldData.main_arc.current}</td>
                <td>{this.state.weldData.main_arc.voltage}</td>
                <td>{this.state.seamData.preflow_time}</td>
                <td>{this.state.seamData.postflow_time}</td>
                <td>{this.state.seamData.scrape_start}</td>
                <td>{this.state.weaveData.weave_shape}</td>
                <td>{this.state.weaveData.weave_type}</td>
                <td>{this.state.weaveData.weave_length}</td>
                <td>{this.state.weaveData.weave_width}</td>
                <td>{this.state.weaveData.weave_height}</td>
                <td>{this.state.weaveData.weave_bias}</td>
                <td>{this.state.weaveData.weave_dir}</td>
                <td>{this.state.weaveData.weave_tilt}</td>
                <td>{this.state.weaveData.weave_ori}</td>
                <td>{this.state.weaveData.dwell_left}</td>
                <td>{this.state.weaveData.dwell_center}</td>
                <td>{this.state.weaveData.dwell_right}</td>
            </tr>
        );
    }
}

export default WeldParameter;