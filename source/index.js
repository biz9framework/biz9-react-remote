import dayjs from 'dayjs';
import { get_data_adapter,post_data_adapter,delete_data_adapter }  from './adapter.js';
import { Memory_Logic }  from './memory.js';
import {Obj,Str} from "biz9-utility";
class Remote_Field {
    static APP_ID = 'app_id';
    static MINUTE = 'minute';
    static TIME = '_time';
    static DATA = '_data';
}
class Storage_Logic {
    static post = (key,value,option) => {
         option = !Obj.check_is_empty(option) ? option : {};
        if(!key){
            key = '';
        }
        key = Str.get_title_url(key);
        if(option.time_limit){
            Memory_Logic.post(key+Remote_Field.TIME,dayjs().add(option.time_limit,Remote_Field.MINUTE));
            Memory_Logic.post(key+Remote_Field.DATA,value);
        }else{
            Memory_Logic.post(key,value);
        }
    }
    static delete_all = () => {
        Memory_Logic.delete_all();
    }
    static delete = (key) => {
        if(!key){
            key = '';
        }
        key = Str.get_title_url(key);
        Memory_Logic.delete(key);
        Memory_Logic.delete(key+Remote_Field.TIME);
        Memory_Logic.delete(key+Remote_Field.TIME);
    }
    static get = (key,option) => {
        option = !Obj.check_is_empty(option) ? option : {};
        if(!key){
            key = '';
        }
        key = Str.get_title_url(key);
        if(option.time_limit){
            let time = Memory_Logic.get(key+Remote_Field.TIME);
            if(dayjs(time).isValid() && dayjs().isBefore(dayjs(time).add(option.time_limit))){
                return Memory_Logic.get(key+Remote_Field.DATA);
            }else{
                return null;
            }
        }else{
            return Memory_Logic.get(key);
        }
    }
}
class Remote_Logic {
    static get_url = (app_id,host,url,param) => {
        if(!param){
            param='';
        }
        var app_id_url="?"+Remote_Field.APP_ID+"="+app_id;
        return host+"/"+url+app_id_url + param;
    };
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
    Storage_Logic,
    Remote_Field,
    Remote_Logic,
    Remote
}
