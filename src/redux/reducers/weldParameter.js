/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-11 12:47:03
 * @LastEditTime: 2019-08-11 14:00:17
 * @LastEditors: Please set LastEditors
 */
import { UPDATE_WELDSPEED } from "../actionTypes";
import SeamData from '../../JQR365/SeamData';
import WeldData from '../../JQR365/WeldData';
import WeaveData from '../../JQR365/WeaveData';

const initialState = {
    count: 56,
    seamData: new SeamData(),
    weldData: new WeldData(),
    weaveData: new WeaveData(),
};

export default function weldParameterReducer(state = initialState, action) {
    console.log(state);
    console.log(345);
    switch (action.type) {
        case UPDATE_WELDSPEED:
            state.weldData.weld_speed = action.weld_speed;
            return state;
        default:
            console.log(state);
            return state;
    }
}