import axios  from 'axios';

const get_data_adapter = (url) => {
    return new Promise((callback) => {
        axios.get(url)
            .then(function (response) {
                callback([response.data.cloud_error,response.data.cloud_data]);
            })
            .catch(function (error) {
                console.log('Apdater-Get-Data-Error');
                console.log(error);
                callback(error);
            });
    })
}

const post_data_adapter = (url,obj) => {
    return new Promise((callback) => {
        axios.post(url,{data:obj}).then(function (response) {
            callback([response.data.cloud_error,response.data.cloud_data]);
        })
            .catch(function (error) {
                console.log('Apdater-Post-Data-Error');
                console.log(error);
                callback(error);
            })

    });
}

const delete_data_adapter = (url) => {
    return new Promise((callback) => {
        axios.delete(url).then(function (response) {
            callback([response.data.cloud_error,response.data.cloud_data]);
        })
            .catch(function (error) {
                console.log('Apdater-Delete-Data-Error');
                console.log(error);
                callback(error);
            })

    });
}



/*
const get_data_adapter = (url,obj) => {
    return new Promise((callback) => {
        axios.get(url)
            .then(function (response) {
                callback([response.data.cloud_error,response.data.cloud_data]);
            })
            .catch(function (error) {
                console.log('Apdater-Get-Data-Error');
                console.log(error);
                callback(error);
            });
    });
}

const post_data_adapter = (url,obj) => {
    return new Promise((callback) => {
        axios.post(url,{data:obj}).then(function (response) {
            callback([response.data.cloud_error,response.data.cloud_data]);
        })
            .catch(function (error) {
                console.log('Apdater-Post-Data-Error');
                console.log(error);
                callback(error);
            })

    });
}
*/


/*
const old_post_data_adapter = (url,obj) => {
    return new Promise((callback) => {

        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();

        axios.post(url, {
            data: obj
        }, {
            cancelToken: source.token,
            signal: controller.signal
        })
            .then(function (response) {
                source.cancel('Operation canceled by the user.');
                controller.abort(); // the message parameter is not supported
                if(response!=null){
                    callback([response.data.cloud_error,response.data.cloud_data]);
                }else{
                    alert('nope');
                }
            })
            .catch(function (error) {
                console.log('Adapter-Post-Data-Error');
                console.log(error);
                callback([error,null]);
            }).finally(() => {
                console.log('done');
            });

    });
}
*/

/*
const post_data_adapter = (url,obj) => {
   return new Promise((callback) => {
        axios.post(url, {
            data: obj
        })
            .then(function (response) {
                callback([response.data.cloud_error,response.data.cloud_data]);
            })
            .catch(function (error) {
                console.log('Adapter-Post-Data-Error');
                console.log(error);
                callback(error);
            });
    });
}
*/

export {
    get_data_adapter,
    delete_data_adapter,
    post_data_adapter
}
