import assert   from "assert";
import { Remote }  from "./";
import { Log,Guid,Test,DateTime }  from "biz9-utility";
//const { Log,Guid,Test,DateTime } = require("biz9-utility");

//
/* --- TEST CONFIG START --- */
const ID='0';
//const ID='e05dc367-7232-483a-99e2-059d44a5a250';
const APP_TITLE_ID='feb28';
const DATA_TYPE='dt_blank';
const PORT_ID="1904";
const TEST_URL="https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json";
const URL="http://localhost:"+PORT_ID;
/* --- TEST CONFIG END --- */
/* --- TEST DATA CONFIG START --- */
const biz9_config ={
    APP_TITLE_ID:APP_TITLE_ID,
    MONGO_IP:'0.0.0.0',
    MONGO_USERNAME_PASSWORD:'',
    MONGO_PORT_ID:"27019",
    MONGO_SERVER_USER:'admin',
    MONGO_CONFIG_FILE_PATH:'/etc/mongod.conf',
    SSH_KEY:"",
    REDIS_URL:"0.0.0.0",
    REDIS_PORT_ID:"27019"
};
/* --- TEST DATA CONFIG END --- */
/* availble
 * connect
 * update_item
 * get_item
 * delete_item
 * get_list
 */

//9_connect
test('connect', async () => {
        console.log('CONNECT-START');
        let cloud_url = get_cloud_url(APP_TITLE_ID,URL,'main/test/connect/','');
        let item_test = Test.get_item(DATA_TYPE,ID);
        Log.w('cloud_url',cloud_url);
        Log.w('item_test',item_test);
        let [error,data] = await Remote.get(cloud_url,item_test);
        assert.notStrictEqual(data, null);
        Log.w('error',error);
        Log.w('data',data);
        console.log('REMOTE-CONNECT-SUCCESS');
        console.log('REMOTE-CONNECT-DONE');
});

//9_item_update
test('item_update', async () => {
        console.log('ITEM-UPDATE-START');
        let cloud_url = get_cloud_url(APP_TITLE_ID,URL,'main/crud/update/'+DATA_TYPE+"/"+ID,'');

        let item_test = Test.get_item(DATA_TYPE,ID);
        Log.w('cloud_url',cloud_url);
        Log.w('item_test',item_test);
        let [error,data] = await Remote.post(cloud_url,item_test);
        assert.notStrictEqual(data, null);
        Log.w('error',error);
        Log.w('data',data);
        console.log('ITEM-UPDATE-SUCCESS');
        console.log('ITEM-UPDATE-DONE');
});

/*
//9_item_get
describe('item_get', async () => {
    it('_item_get', async () => {
        console.log('ITEM-GET-START');
        let cloud_url = CLOUD_URL+'/main/crud/get/'+DATA_TYPE+"/"+ID;
        Log.w('cloud_url',cloud_url);
        let [error,data] = await Remote.get(cloud_url);
        assert.notStrictEqual(data, null);
        Log.w('error',error);
        Log.w('data',data);
        console.log('ITEM-GET-SUCCESS');
        console.log('ITEM-GET-DONE');
    });
});

//9_item_delete
describe('item_delete', async () => {
    it('_item_delete', async () => {
        console.log('ITEM-DELETE-START');
        let cloud_url = CLOUD_URL+'/main/crud/delete/'+DATA_TYPE+"/"+ID;
        Log.w('cloud_url',cloud_url);
        let [error,data] = await Remote.delete(cloud_url);
        assert.notStrictEqual(data, null);
        Log.w('error',error);
        Log.w('data',data);
        console.log('ITEM-DELETE-SUCCESS');
        console.log('ITEM-DELETE-DONE');
    });
});

//9_get_list
describe('item_list_get', async () => {
    it('_item_list_get', async () => {
        console.log('ITEM-LIST-GET-START');
        let cloud_url = CLOUD_URL+'/main/crud/get_list/'+DATA_TYPE;
        Log.w('cloud_url',cloud_url);
        let filter_obj = {data_type:'dt_blank',filter:{data_type:'dt_blank'},sort_by:{'title':-1},page_current:1,page_size:10};
        let [error,data] = await Remote.post(cloud_url,filter_obj);
        assert.notStrictEqual(data, null);
        Log.w('error',error);
        Log.w('data',data);
        console.log('ITEM-LIST-GET-SUCCESS');
        console.log('ITEM-LIST-GET-DONE');
    });
});

*/
const get_cloud_url = (app_title_id,domain_url,action_url,params) =>{
    if(!params){
        params='';
    }
    var app_title_id_url='?app_title_id='+app_title_id;
    return domain_url+"/"+action_url+app_title_id_url + params;
}


