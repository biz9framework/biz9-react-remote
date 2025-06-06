import { get_data_adapter,post_data_adapter,delete_data_adapter }  from './adapter.js';

class Remote {
    static get = async (url) => {
        const [error,data] = await get_data_adapter(url);
        return [error,data];
    };
    static post = async (url,obj) => {
        const [error,data] = await post_data_adapter(url,obj);
        return [error,data];
    };
    static delete = async (url) => {
        const [error,data] = await delete_data_adapter(url);
        return [error,data];
    };
}

export {
    Remote
}
