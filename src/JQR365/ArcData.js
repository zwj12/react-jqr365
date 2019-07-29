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
        var strArcData = "[" + this.sched
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
        var numStartIndex = 0;
        var numStopIndex = strArcData.indexOf("[");

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