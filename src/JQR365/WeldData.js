import ArcData from './ArcData';
import WebService from '../Robot/WebService';

class WeldData {
    constructor() {
        this.task= "T_ROB1";
        this.module= "JQR365WeldDataModule";
        this.numIndexNo=0;
        this.weld_speed = 0;
        this.org_weld_speed = 0;
        this.main_arc = new ArcData();
        this.org_arc = new ArcData();
    }

    toString() {        
        var strWeldData = "[" + this.weld_speed
            + "," + this.org_weld_speed
            + "," + this.main_arc
            + "," + this.org_arc
            + "]";
        // console.log(strWeldData);
        return strWeldData;
    }

    parse(strWeldData) {
        var numStartIndex = 0;
        var numStopIndex = strWeldData.indexOf("[");

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
        var strWeldData = "";
        if (this.numIndexNo < 10) {
            strWeldData = WebService.GetRapidSymbolDataSync(this.task, this.module, "weld0" + this.numIndexNo)
        } else {
            strWeldData = WebService.GetRapidSymbolDataSync(this.task, this.module, "weld" +  this.numIndexNo)
        }
        //console.log(strWeldData);
        this.parse(strWeldData);
    }
}

export default WeldData;