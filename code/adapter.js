alert('222');
import axios  from 'axios';
//axios.defaults.withCredentials = true;
// axios.get(url,{withCredentials:true})
//axios.get(url)
const get_data_adapter = (url) => {
    return new Promise((callback) => {
    axios.get(url,{withCredentials:true})
            .then(function (response) {
                console.log('get_1_start');
                console.log('response')
                console.log(response);
                console.log('get_1_end');
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
        axios.post(url,{data:obj},{withCredentials:true}).then(function (response) {
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
