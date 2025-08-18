import axios  from 'axios';
const get_data_adapter = (url) => {
    return new Promise((callback) => {
    axios.defaults.withCredentials = true;
    axios.get(url,{method:'GET',withCredentials:true}).then(function (response) {
                callback([response.data.cloud_error,response.data.cloud]);
            }).catch(function (error) {
                callback([error.message,null]);
            });
    });
}
const post_data_adapter = (url,obj) => {
    return new Promise((callback) => {
        axios.defaults.withCredentials = true;
        axios.post(url,{method:'POST',withCredentials:true,data:obj}).then(function (response) {
            callback([response.data.cloud_error,response.data.cloud]);
        }).catch(function (error) {
                callback([error.message,null]);
        })
    });
}
const delete_data_adapter = (url) => {
    return new Promise((callback) => {
        axios.defaults.withCredentials = true;
        axios.delete(url,{method:'DELETE',withCredentials:true}).then(function (response) {
            callback([response.data.cloud_error,response.data.cloud]);
        }).catch(function (error) {
                callback([error.message,null]);
        })
    });
}
export {
    get_data_adapter,
    delete_data_adapter,
    post_data_adapter
}
