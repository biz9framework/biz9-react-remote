/*
Copyright 2016 Certified CoderZ
Author: Brandon Poole Sr. (biz9framework@gmail.com)
License GNU General Public License v3.0
Description: BiZ9 Framework: React-Remote
*/
import async from 'async';
import {get_data_adapter,post_data_adapter,delete_data_adapter} from './adapter.js';
class Remote_Field {
    static APP_ID = 'app_id';
    static MINUTE = 'minute';
    static TIME = '_time';
    static DATA = '_data';
}
class Remote_Data {
static post = (app_data) => {
        return new Promise((callback) => {
            async.series([
                async function(call){
                    let [response,data] = await Remote.post(app_data.url,app_data.form_data);
                    app_data.response = response;
                    app_data.data = data;
                },
            ],
                function(error, result){
                    callback(app_data);
                });
        });
    };
}
class Remote_Logic {
    static get_url = (app_id,host,url,param) => {
        if(!param){
            param='';
        }
        var app_id_url="?"+Remote_Field.APP_ID+"="+app_id;
        return host+"/"+url+app_id_url + param;
    };
    static get_connect = (app_id,host_name,action_url,form_data) =>{
        return {
            app_id:app_id?app_id:null,
            host_name:host_name?host_name:null,
            action_url:action_url?action_url:null,
            url:Remote_Logic.get_url(app_id?app_id:null,host_name?host_name:null,action_url?action_url:null,""),
            form_data:form_data?form_data:{},
            source:null,
            data:null,
            error:null
        };
    }
}
class Remote {
    static get = async (url) => {
        const [response,data] = await get_data_adapter(url);
        return [response,data];
    };
    static post = async (url,obj) => {
        const [response,data] = await post_data_adapter(url,obj);
        return [response,data];
    };
    static delete = async (url) => {
        const [response,data] = await delete_data_adapter(url);
        return [response,data];
    };
}
export {
    Remote_Field,
    Remote_Logic,
    Remote_Data,
    Remote
}
