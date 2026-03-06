import axios  from 'axios';
const get_data_adapter = (url) => {
    return new Promise((callback) => {
        axios.get(url)
            .then(function (response) {
                callback([response.data.error,response.data.data]);
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
        axios.post(url,obj).then(function (response) {
            callback([response.data.error,response.data.data]);
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
            callback([response.data.error,response.data.data]);
        })
            .catch(function (error) {
                console.log('Apdater-Delete-Data-Error');
                console.log(error);
                callback(error);
            })
    });
}
export {
    get_data_adapter,
    delete_data_adapter,
    post_data_adapter
}
