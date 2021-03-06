/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-29 15:15:51
 * @LastEditTime: 2019-08-19 16:12:47
 * @LastEditors: Please set LastEditors
 */
import ArcData from './ArcData';
import WebService from '../Robot/WebService';

class SeamData {
    constructor() {
        this.task = "T_ROB1";
        this.module = "JQR365WeldDataModule";
        this.numIndexNo = 0;
        this.purge_time = 0;
        this.preflow_time = 0;
        this.ign_arc = new ArcData();
        this.ign_move_delay = 0;
        this.scrape_start = 0;
        this.heat_speed = 0;
        this.heat_time = 0;
        this.heat_distance = 0;
        this.heat_arc = new ArcData();
        this.cool_time = 0;
        this.fill_time = 0;
        this.fill_arc = new ArcData();
        this.bback_time = 0;
        this.rback_time = 0;
        this.bback_arc = new ArcData();
        this.postflow_time = 0;
    }

    toString() {
        let strSeamData = "[" + this.purge_time
            + "," + this.preflow_time
            + "," + this.ign_arc
            + "," + this.ign_move_delay
            + "," + this.scrape_start
            + "," + this.heat_speed
            + "," + this.heat_time
            + "," + this.heat_distance
            + "," + this.heat_arc
            + "," + this.cool_time
            + "," + this.fill_time
            + "," + this.fill_arc
            + "," + this.bback_time
            + "," + this.rback_time
            + "," + this.bback_arc
            + "," + this.postflow_time
            + "]";
        // console.log(strSeamData);
        return strSeamData;
    }

    parse(strSeamData) {
        let numStartIndex = 0;
        let numStopIndex = strSeamData.indexOf("[");

        // console.log(strSeamData);

        numStartIndex = numStopIndex + 1;
        numStopIndex = strSeamData.indexOf(",", numStartIndex);
        this.purge_time = strSeamData.substring(numStartIndex, numStopIndex);

        numStartIndex = numStopIndex + 1;
        numStopIndex = strSeamData.indexOf(",", numStartIndex);
        this.preflow_time = strSeamData.substring(numStartIndex, numStopIndex);

        numStartIndex = numStopIndex + 1;
        numStopIndex = strSeamData.indexOf("]", numStartIndex);
        numStopIndex = numStopIndex + 1;
        this.ign_arc.parse(strSeamData.substring(numStartIndex, numStopIndex))

        numStartIndex = numStopIndex + 1;
        numStopIndex = strSeamData.indexOf(",", numStartIndex);
        this.ign_move_delay = strSeamData.substring(numStartIndex, numStopIndex);

        numStartIndex = numStopIndex + 1;
        numStopIndex = strSeamData.indexOf(",", numStartIndex);
        this.scrape_start = strSeamData.substring(numStartIndex, numStopIndex);

        numStartIndex = numStopIndex + 1;
        numStopIndex = strSeamData.indexOf(",", numStartIndex);
        this.heat_speed = strSeamData.substring(numStartIndex, numStopIndex);

        numStartIndex = numStopIndex + 1;
        numStopIndex = strSeamData.indexOf(",", numStartIndex);
        this.heat_time = strSeamData.substring(numStartIndex, numStopIndex);

        numStartIndex = numStopIndex + 1;
        numStopIndex = strSeamData.indexOf(",", numStartIndex);
        this.heat_distance = strSeamData.substring(numStartIndex, numStopIndex);

        numStartIndex = numStopIndex + 1;
        numStopIndex = strSeamData.indexOf("]", numStartIndex);
        numStopIndex = numStopIndex + 1;
        this.heat_arc.parse(strSeamData.substring(numStartIndex, numStopIndex))

        numStartIndex = numStopIndex + 1;
        numStopIndex = strSeamData.indexOf(",", numStartIndex);
        this.cool_time = strSeamData.substring(numStartIndex, numStopIndex);

        numStartIndex = numStopIndex + 1;
        numStopIndex = strSeamData.indexOf(",", numStartIndex);
        this.fill_time = strSeamData.substring(numStartIndex, numStopIndex);

        numStartIndex = numStopIndex + 1;
        numStopIndex = strSeamData.indexOf("]", numStartIndex);
        numStopIndex = numStopIndex + 1;
        this.fill_arc.parse(strSeamData.substring(numStartIndex, numStopIndex))

        numStartIndex = numStopIndex + 1;
        numStopIndex = strSeamData.indexOf(",", numStartIndex);
        this.bback_time = strSeamData.substring(numStartIndex, numStopIndex);

        numStartIndex = numStopIndex + 1;
        numStopIndex = strSeamData.indexOf(",", numStartIndex);
        this.rback_time = strSeamData.substring(numStartIndex, numStopIndex);

        numStartIndex = numStopIndex + 1;
        numStopIndex = strSeamData.indexOf("]", numStartIndex);
        numStopIndex = numStopIndex + 1;
        this.bback_arc.parse(strSeamData.substring(numStartIndex, numStopIndex))

        numStartIndex = numStopIndex + 1;
        numStopIndex = strSeamData.indexOf("]", numStartIndex);
        this.postflow_time = strSeamData.substring(numStartIndex, numStopIndex);
    }

    refreshDataFromWebServiceSync(numIndexNo) {
        this.numIndexNo = numIndexNo;
        let strSeamData = "";
        if (this.numIndexNo < 10) {
            strSeamData = WebService.GetRapidSymbolDataSync(this.task, this.module, "seam0" + this.numIndexNo)
        } else {
            strSeamData = WebService.GetRapidSymbolDataSync(this.task, this.module, "seam" + this.numIndexNo)
        }
        //console.log(strSeamData);
        this.parse(strSeamData);
    }

    applyDataFromWebServiceSync() {
        if (this.numIndexNo < 10) {
            WebService.SetRapidSymbolDataSync(this.task, this.module, "seam0" + this.numIndexNo, this.toString())
        } else {
            WebService.SetRapidSymbolDataSync(this.task, this.module, "seam" +  this.numIndexNo,  this.toString())
        }
    }
}

export default SeamData;