/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-11 12:47:03
 * @LastEditTime: 2019-08-19 16:11:01
 * @LastEditors: Please set LastEditors
 */
import * as UPDATE_WELDPARAMETER from "../actionTypes";
import SeamData from '../../JQR365/SeamData';
import WeldData from '../../JQR365/WeldData';
import WeaveData from '../../JQR365/WeaveData';

const initialState = {
    seamData: new SeamData(),
    weldData: new WeldData(),
    weaveData: new WeaveData(),
};

export default function weldParameterReducer(state = initialState, action) {
    // console.log(state);
    // console.log(action);
    switch (action.type) {
        case UPDATE_WELDPARAMETER.UPDATE_INDEX:
            state.seamData.numIndexNo = action.index;
            state.weldData.numIndexNo = action.index;
            state.weaveData.numIndexNo = action.index;
            state.seamData.refreshDataFromWebServiceSync(action.index)
            state.weldData.refreshDataFromWebServiceSync(action.index)
            state.weaveData.refreshDataFromWebServiceSync(action.index)
            // state.seamData.parse("[0,0.5,[0,0,0,0,0,0,0,0,0],0,0,0,0,0,[0,0,0,0,0,0,0,0,0],0,0,[0,0,0,0,0,0,0,0,0],0,0,[0,0,0,0,0,0,0,0,0],0.5]");
            // state.weldData.parse("[10,0,[38,0,25,0,0,200,0,0,0],[0,0,0,0,0,0,0,0,0]]");
            // state.weaveData.parse("[2,0,3,6,5,0,0,0,0,0,0,0,0,0,0]");
            return state;
        case UPDATE_WELDPARAMETER.UPDATE_WELD_SPEED:
            state.weldData.weld_speed = action.weld_speed;
            return state;
        case UPDATE_WELDPARAMETER.UPDATE_MODE:
            state.weldData.main_arc.mode = action.mode;
            return state;
        case UPDATE_WELDPARAMETER.UPDATE_CURRENT:
            state.weldData.main_arc.current = action.current;
            return state;
        case UPDATE_WELDPARAMETER.UPDATE_VOLTAGE:
            state.weldData.main_arc.voltage = action.voltage;
            return state;
        case UPDATE_WELDPARAMETER.UPDATE_PREFLOW_TIME:
            state.seamData.preflow_time = action.preflow_time;
            return state;
        case UPDATE_WELDPARAMETER.UPDATE_POSTFLOW_TIME:
            state.seamData.postflow_time = action.postflow_time;
            return state;
        case UPDATE_WELDPARAMETER.UPDATE_WEAVE_SHAPE:
            state.weaveData.weave_shape = action.weave_shape;
            return state;
        case UPDATE_WELDPARAMETER.UPDATE_WEAVE_LENGTH:
            state.weaveData.weave_length = action.weave_length;
            return state;
        case UPDATE_WELDPARAMETER.UPDATE_WEAVE_WIDTH:
            state.weaveData.weave_width = action.weave_width;
            return state;
        case UPDATE_WELDPARAMETER.UPDATE_WEAVE_HEIGHT:
            state.weaveData.weave_height = action.weave_height;
            return state;
        case UPDATE_WELDPARAMETER.UPDATE_WEAVE_DIR:
            state.weaveData.weave_dir = action.weave_dir;
            return state;
        case UPDATE_WELDPARAMETER.UPDATE_WEAVE_TILT:
            state.weaveData.weave_tilt = action.weave_tilt;
            return state;
        case UPDATE_WELDPARAMETER.UPDATE_WEAVE_ORI:
            state.weaveData.weave_ori = action.weave_ori;
            return state;
        case UPDATE_WELDPARAMETER.UPDATE_DWELL_LEFT:
            state.weaveData.dwell_left = action.dwell_left;
            return state;
        case UPDATE_WELDPARAMETER.UPDATE_DWELL_CENTER:
            state.weaveData.dwell_center = action.dwell_center;
            return state;
        case UPDATE_WELDPARAMETER.UPDATE_DWELL_RIGHT:
            state.weaveData.dwell_right = action.dwell_right;
            return state;
        default:
            return state;
    }
}