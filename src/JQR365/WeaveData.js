import WebService from '../Robot/WebService';

class WeaveData {
    constructor() {
        this.task= "T_ROB1";
        this.module= "JQR365WeldDataModule";
        this.numIndexNo=0;
        this.weave_shape = 0;
        this.weave_type = 0;
        this.weave_length = 0;
        this.weave_width = 0;
        this.weave_height = 0;
        this.dwell_left = 0;
        this.dwell_center = 0;
        this.dwell_right = 0;
        this.weave_dir = 0;
        this.weave_tilt = 0;
        this.weave_ori = 0;
        this.weave_bias = 0;
        this.org_weave_width = 0;
        this.org_weave_height = 0;
        this.org_weave_bias = 0;
    }

    toString() {
        var strWeaveData = "[" + this.weave_shape
            + "," + this.weave_type
            + "," + this.weave_length
            + "," + this.weave_width
            + "," + this.weave_height
            + "," + this.dwell_left
            + "," + this.dwell_center
            + "," + this.dwell_right
            + "," + this.weave_dir
            + "," + this.weave_tilt
            + "," + this.weave_ori
            + "," + this.weave_bias
            + "," + this.org_weave_width
            + "," + this.org_weave_height
            + "," + this.org_weave_bias
            + "]";
        // console.log(strWeaveData);
        return strWeaveData;
    }

    parse(strWeaveData) {
        var numStartIndex = 0;
        var numStopIndex = strWeaveData.indexOf("[");

        // console.log(strWeaveData);

        numStartIndex = numStopIndex + 1;
        numStopIndex = strWeaveData.indexOf(",", numStartIndex);
        this.weave_shape = strWeaveData.substring(numStartIndex, numStopIndex);

        numStartIndex = numStopIndex + 1;
        numStopIndex = strWeaveData.indexOf(",", numStartIndex);
        this.weave_type = strWeaveData.substring(numStartIndex, numStopIndex);

        numStartIndex = numStopIndex + 1;
        numStopIndex = strWeaveData.indexOf(",", numStartIndex);
        this.weave_length = strWeaveData.substring(numStartIndex, numStopIndex);

        numStartIndex = numStopIndex + 1;
        numStopIndex = strWeaveData.indexOf(",", numStartIndex);
        this.weave_width = strWeaveData.substring(numStartIndex, numStopIndex);

        numStartIndex = numStopIndex + 1;
        numStopIndex = strWeaveData.indexOf(",", numStartIndex);
        this.weave_height = strWeaveData.substring(numStartIndex, numStopIndex);

        numStartIndex = numStopIndex + 1;
        numStopIndex = strWeaveData.indexOf(",", numStartIndex);
        this.dwell_left = strWeaveData.substring(numStartIndex, numStopIndex);

        numStartIndex = numStopIndex + 1;
        numStopIndex = strWeaveData.indexOf(",", numStartIndex);
        this.dwell_center = strWeaveData.substring(numStartIndex, numStopIndex);

        numStartIndex = numStopIndex + 1;
        numStopIndex = strWeaveData.indexOf(",", numStartIndex);
        this.dwell_right = strWeaveData.substring(numStartIndex, numStopIndex);

        numStartIndex = numStopIndex + 1;
        numStopIndex = strWeaveData.indexOf(",", numStartIndex);
        this.weave_dir = strWeaveData.substring(numStartIndex, numStopIndex);

        numStartIndex = numStopIndex + 1;
        numStopIndex = strWeaveData.indexOf(",", numStartIndex);
        this.weave_tilt = strWeaveData.substring(numStartIndex, numStopIndex);

        numStartIndex = numStopIndex + 1;
        numStopIndex = strWeaveData.indexOf(",", numStartIndex);
        this.weave_ori = strWeaveData.substring(numStartIndex, numStopIndex);

        numStartIndex = numStopIndex + 1;
        numStopIndex = strWeaveData.indexOf(",", numStartIndex);
        this.weave_bias = strWeaveData.substring(numStartIndex, numStopIndex);

        numStartIndex = numStopIndex + 1;
        numStopIndex = strWeaveData.indexOf(",", numStartIndex);
        this.org_weave_width = strWeaveData.substring(numStartIndex, numStopIndex);

        numStartIndex = numStopIndex + 1;
        numStopIndex = strWeaveData.indexOf(",", numStartIndex);
        this.org_weave_height = strWeaveData.substring(numStartIndex, numStopIndex);

        numStartIndex = numStopIndex + 1;
        numStopIndex = strWeaveData.indexOf("]", numStartIndex);
        this.org_weave_bias = strWeaveData.substring(numStartIndex, numStopIndex);
    }

    refreshDataFromWebServiceSync(numIndexNo) {
        this.numIndexNo = numIndexNo;
        var strWeaveData = "";
        if (this.numIndexNo < 10) {
            strWeaveData = WebService.GetRapidSymbolDataSync(this.task, this.module, "weave0" + this.numIndexNo)
        } else {
            strWeaveData = WebService.GetRapidSymbolDataSync(this.task, this.module, "weave" + this.numIndexNo)
        }
        //console.log(strWeaveData);
        this.parse(strWeaveData);
    }
}

export default WeaveData;