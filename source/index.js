import { get_data_adapter,post_data_adapter,delete_data_adapter }  from './adapter.js';

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
    Remote
}
