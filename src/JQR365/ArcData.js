/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-29 14:43:34
 * @LastEditTime: 2019-08-10 07:51:07
 * @LastEditors: Please set LastEditors
 */
class ArcData {
    constructor() {
        this.sched = 0;
        this.mode = 0;
        this.voltage = 0;
        this.wirefeed = 0;
        this.control = 0;
        this.current = 0;
        this.voltage2 = 0;
        this.wirefeed2 = 0;
        this.current2 = 0;
    }

    toString() {        
        let strArcData = "[" + this.sched
            + "," + this.mode
            + "," + this.voltage
            + "," + this.wirefeed
            + "," + this.control
            + "," + this.current
            + "," + this.voltage2
            + "," + this.wirefeed2
            + "," + this.current2
            + "]";
        // console.log(strArcData);
        return strArcData;
    }

    parse(strArcData) {
        let numStartIndex = 0;
        let numStopIndex = strArcData.indexOf("[");

        // console.log(strArcData);

        numStartIndex = numStopIndex + 1;
        numStopIndex = strArcData.indexOf(",", numStartIndex);
        this.sched = strArcData.substring(numStartIndex, numStopIndex);

        numStartIndex = numStopIndex + 1;
        numStopIndex = strArcData.indexOf(",", numStartIndex);
        this.mode = strArcData.substring(numStartIndex, numStopIndex);

        numStartIndex = numStopIndex + 1;
        numStopIndex = strArcData.indexOf(",", numStartIndex);
        this.voltage = strArcData.substring(numStartIndex, numStopIndex);

        numStartIndex = numStopIndex + 1;
        numStopIndex = strArcData.indexOf(",", numStartIndex);
        this.wirefeed = strArcData.substring(numStartIndex, numStopIndex);
        
        numStartIndex = numStopIndex + 1;
        numStopIndex = strArcData.indexOf(",", numStartIndex);
        this.control = strArcData.substring(numStartIndex, numStopIndex);

        numStartIndex = numStopIndex + 1;
        numStopIndex = strArcData.indexOf(",", numStartIndex);
        this.current = strArcData.substring(numStartIndex, numStopIndex);
        
        numStartIndex = numStopIndex + 1;
        numStopIndex = strArcData.indexOf(",", numStartIndex);
        this.voltage2 = strArcData.substring(numStartIndex, numStopIndex);

        numStartIndex = numStopIndex + 1;
        numStopIndex = strArcData.indexOf(",", numStartIndex);
        this.wirefeed2 = strArcData.substring(numStartIndex, numStopIndex);
       
        numStartIndex = numStopIndex + 1;
        numStopIndex = strArcData.indexOf("]", numStartIndex);
        this.current2 = strArcData.substring(numStartIndex, numStopIndex);     
   
    }
}

export default ArcData;