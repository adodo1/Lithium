import nsGmx from './nsGmx.js';
import {
    parseResponse,
    sendCrossDomainJSONRequest,
    sendCrossDomainPostRequest,
} from './utilities.js';

var UPDATE_INTERVAL = 2000;

var sendGmxRequest = function(requestType, url, params) {
    var def = $.Deferred();
    
    var processResponse = function(response) {
        if (!response.Result || !response.Result.TaskID) {
            if (response.Status === 'ok' && !response.ErrorInfo) {
                def.resolve(response);
            } else {
                parseResponse(response);
                def.reject(response);
            }
            return;
        }
        
        def.notify(response.Result);
        
        var taskID = response.Result.TaskID;
        
        var interval = setInterval(function(){
            sendCrossDomainJSONRequest(window.serverBase + "AsyncTask.ashx?WrapStyle=func&TaskID=" + taskID, 
                function(response)
                {
                    var res = response.Result;
                    if (response.Status !== 'ok' || res.ErrorInfo)
                    {
                        res.Status = 'error';
                        parseResponse(res);
                        clearInterval(interval);
                        def.reject(res);
                    }
                    else if (res.Completed)
                    {
                        clearInterval(interval);
                        def.resolve(res);
                    }
                    else
                    {
                        def.notify(res);
                    }
                }, null, 
                function() {
                    clearInterval(interval);
                    def.reject();
                }
            );
        }, UPDATE_INTERVAL);
    }
    
    if (requestType === 'get') {
    
        params = params || {};
    
        var paramStrItems = [];
        
        for (var p in params) {
            paramStrItems.push(p + '=' + encodeURIComponent(params[p]));
        }
        
        var sepSym = url.indexOf('?') == -1 ? '?' : '&';
        
        
        sendCrossDomainJSONRequest(
            url + sepSym + paramStrItems.join('&'), 
            processResponse, null, def.reject.bind(def)
        );
    } else if (requestType === 'post') {
        var localParams = $.extend({WrapStyle: 'message'}, params);
        sendCrossDomainPostRequest(url, localParams, processResponse);
    } else {
        throw 'Wrong request type';
    }
    
    return def.promise();
};

nsGmx.asyncTaskManager = {
    sendGmxJSONPRequest: sendGmxRequest.bind(null, 'get'),
    sendGmxPostRequest: sendGmxRequest.bind(null, 'post')
};