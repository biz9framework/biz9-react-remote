import axios  from 'axios';
//axios.defaults.withCredentials = true;
//axios.get(url,{withCredentials:true})
//axios.post(url,{data:obj},{withCredentials:true}).then(function (response) {
const get_data_adapter = (url) => {
    return new Promise((callback) => {
        axios.get(url)
            .then(function (response) {
                console.log('i am here');
                console.log('response');
                console.log(response);
                console.log('response-data');
                console.log(response.data);
                console.log(response.data.cloud_error);
                console.log('bbbbbbbbbbb');
                console.log(response.data.cloud_data);
                console.log('cccccccccccccc');
                callback([response.data.cloud_error,response.data.cloud]);
            })
            .catch(function (error) {
                console.log('Apdater-Get-Data-Error');
                console.log(error);
                callback([error.message,null]);
            });
    });
}
const post_data_adapter = (url,obj) => {
    return new Promise((callback) => {
        axios.post(url,{data:obj}).then(function (response) {
            callback([response.data.cloud_error,response.data.cloud]);
        })
            .catch(function (error) {
                console.log('Apdater-Post-Data-Error');
                console.log(error);
                callback([error.message,null]);
            })

    });
}
const delete_data_adapter = (url) => {
    return new Promise((callback) => {
        axios.delete(url).then(function (response) {
            callback([response.data.cloud_error,response.data.cloud]);
        })
            .catch(function (error) {
                console.log('Apdater-Delete-Data-Error');
                console.log(error);
                callback([error.message,null]);
            })
    });
}
export {
    get_data_adapter,
    delete_data_adapter,
    post_data_adapter
}
