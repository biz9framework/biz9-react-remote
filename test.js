/*
Copyright 2016 Certified CoderZ
Author: Brandon Poole Sr. (biz9framework@gmail.com)
License GNU General Public License v3.0
Description: BiZ9 Framework: React-Remote - Test
*/
import async from 'async';
import { Remote_Field,Remote_Logic,Remote_Data}  from './index.js';
import {DateTime,Log,Num,Str,Obj,Response_Logic,Response_Field,Status_Type}  from '/home/think1/www/doqbox/biz9-framework/biz9-utility/source/index.js';
import {Data_Logic,Data_Value_Type,Data_Table,Data_Field,Data_Url,Data_Response_Field}  from '/home/think1/www/doqbox/biz9-framework/biz9-data-logic/source/index.js';
/*
 * availble tests
- connect
*/
/* --- TEST CONFIG START --- */
let APP_ID = "test-stage-april";
let URL = "http://localhost:1904";
let PORT_ID = "1904";
/* --- TEST CONFIG END --- */
const Config = {
    TITLE:'Website-Data-Test',
    APP_ID:APP_ID,
    PORT_ID:PORT_ID,
    URL:URL,
    HAS_MONGO_DB:'true',
    MONGO_IP:"0.0.0.0",
    MONGO_USERNAME_PASSWORD:"",
    MONGO_PORT_ID:"27019",
    MONGO_SERVER_USER:"admin",
    MONGO_CONFIG_FILE_PATH:'/etc/mongod.conf',
    MONGO_SSH_KEY:"",
    REDIS_URL:"0.0.0.0",
    REDIS_PORT_ID:"27020"
}
class Project_Table {
    static BLANK='blank_biz';
    static BLOG_POST='blog_post_biz';
    static PRODUCT='product_biz';
}

/* --- DATA CONFIG END --- */
//9_connect - 9_test_connect
describe('connect', function(){ this.timeout(25000);
    it("_connect", function(done){
        let error=null;
        let database = {};
        let data = {};
        async.series([
            async function(call){
                console.log('CONNECT-DATA-START');
                let option = {};
                let data = {};
                let parent = {first_name:'first_name_apple',last_name:'last_name_cool'};
                Log.w('11_parent',parent);
                let form_data = {data:parent,table:Project_Table.BLANK,option:option};
                Log.w('22_form_data',form_data);
                let service_data = Remote_Logic.get_data(Config.APP_ID,Config.URL,Data_Url.PING,form_data);
                Log.w('33_service_data',service_data);
                let biz_data = await Remote_Data.post(service_data);
                Log.w('44_biz_data',biz_data);

                console.log('CONNECT-DATA-END');
            },
        ],
            function(error, result){
                console.log('CONNECT-DONE');
                done();
            });
    });
});

