/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-26 12:50:30
 * @LastEditTime: 2019-08-19 15:59:41
 * @LastEditors: Please set LastEditors
 */
class WebService {
    // constructor() {
    // }

    static GetRapidSymbolDataSync(strTask, strModule, strName) {
        var rwServiceResource = new XMLHttpRequest();
        var strResource = "/rw/rapid/symbol/data/RAPID/" + strTask + "/" + strModule + "/" + strName + "?json=1";
        // console.log(strResource);
        rwServiceResource.open("GET", strResource, false);
        rwServiceResource.send();
        if (rwServiceResource.status === 200) {
            // console.log(rwServiceResource.responseText);
            var obj = JSON.parse(rwServiceResource.responseText);
            var service = obj._embedded._state[0];
            return service.value;
        }
    }

    static SetRapidSymbolDataSync(strTask, strModule, strName, strValue) {
        var rwServiceResource = new XMLHttpRequest();
        var strResource = "/rw/rapid/symbol/data/RAPID/" + strTask + "/" + strModule + "/" + strName + "?action=set";
        // console.log(strResource);
        rwServiceResource.open("POST", strResource, false);
        rwServiceResource.send("value=" + strValue);
        if (rwServiceResource.status === 204) {
            // console.log("Success");
        }else{
            // console.log(rwServiceResource.status);
        }
    }

    static GetRWSResourceSync(resource, key) {
        var rwServiceResource = new XMLHttpRequest();
        rwServiceResource.open("GET", resource, false);
        rwServiceResource.send();
        if (rwServiceResource.status === 200) {
            var obj = JSON.parse(rwServiceResource.responseText);
            var service = obj._embedded._state[0];
            return service[key];
        }
    }
    
    static RequestManualModePrivileges() {
        let rwServiceResource = new XMLHttpRequest();
        let strResource = "/users/rmmp";
        rwServiceResource.open("POST", strResource, false);
        rwServiceResource.setRequestHeader("CONTENT-TYPE", "application/x-www-form-urlencoded");
        rwServiceResource.send("privilege=modify");
        if (rwServiceResource.status === 202) {
            console.log("RequestManualModePrivileges OK");
        } else {
            console.log("RequestManualModePrivileges NOT OK - " + rwServiceResource.status);
        }
    }

    static CancelManualModePrivileges() {
        let rwServiceResource = new XMLHttpRequest();
        let strResource = "/users/rmmp?action=cancel";
        rwServiceResource.open("POST", strResource, false);
        rwServiceResource.setRequestHeader("CONTENT-TYPE", "application/x-www-form-urlencoded");
        rwServiceResource.send();
        if (rwServiceResource.status === 204) {
            console.log("CancelManualModePrivileges OK");
        } else {
            console.log("CancelManualModePrivileges NOT OK - " + rwServiceResource.status);
        }
    }
}

export default WebService;