/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-29 15:16:00
 * @LastEditTime: 2019-08-19 16:12:54
 * @LastEditors: Please set LastEditors
 */
import ArcData from './ArcData';
import WebService from '../Robot/WebService';

class WeldData {
    constructor() {
        this.task= "T_ROB1";
        this.module= "JQR365WeldDataModule";
        this.numIndexNo=0;
        this.weld_speed = 5;
        this.org_weld_speed = 0;
        this.main_arc = new ArcData();
        this.org_arc = new ArcData();
    }

    toString() {        
        let strWeldData = "[" + this.weld_speed
            + "," + this.org_weld_speed
            + "," + this.main_arc
            + "," + this.org_arc
            + "]";
        // console.log(strWeldData);
        return strWeldData;
    }

    parse(strWeldData) {
        let numStartIndex = 0;
        let numStopIndex = strWeldData.indexOf("[");

        // console.log(strWeldData);

        numStartIndex = numStopIndex + 1;
        numStopIndex = strWeldData.indexOf(",", numStartIndex);
        this.weld_speed = strWeldData.substring(numStartIndex, numStopIndex);

        numStartIndex = numStopIndex + 1;
        numStopIndex = strWeldData.indexOf(",", numStartIndex);
        this.org_weld_speed = strWeldData.substring(numStartIndex, numStopIndex);

        numStartIndex = numStopIndex + 1;
        numStopIndex = strWeldData.indexOf("]", numStartIndex);
        numStopIndex =numStopIndex +1;
        this.main_arc.parse(strWeldData.substring(numStartIndex, numStopIndex))

        numStartIndex = numStopIndex + 1;
        numStopIndex = strWeldData.indexOf("]", numStartIndex);
        numStopIndex =numStopIndex +1;
        this.org_arc.parse(strWeldData.substring(numStartIndex, numStopIndex))   
    }

    refreshDataFromWebServiceSync(numIndexNo) {
        this.numIndexNo=numIndexNo;
        let strWeldData = "";
        if (this.numIndexNo < 10) {
            strWeldData = WebService.GetRapidSymbolDataSync(this.task, this.module, "weld0" + this.numIndexNo)
        } else {
            strWeldData = WebService.GetRapidSymbolDataSync(this.task, this.module, "weld" +  this.numIndexNo)
        }
        //console.log(strWeldData);
        this.parse(strWeldData);
    }

    applyDataFromWebServiceSync() {
        if (this.numIndexNo < 10) {
            WebService.SetRapidSymbolDataSync(this.task, this.module, "weld0" + this.numIndexNo, this.toString())
        } else {
            WebService.SetRapidSymbolDataSync(this.task, this.module, "weld" +  this.numIndexNo,  this.toString())
        }
    }
}

export default WeldData;