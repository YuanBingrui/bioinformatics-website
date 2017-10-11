import axios from 'axios';
import env from '../config/env';

let util = {

};
util.title = function(title) {
    title = title ? title + ' - Home' : 'iView project';
    window.document.title = title;
};

const ajaxUrl = env === 'development' ?
    'http://127.0.0.1:80/vueDatabase' :
    env === 'production' ?
    'http://127.0.0.1:80/vueDatabase' :
    'http://127.0.0.1:80/vueDatabase';

util.ajax = axios.create({
    baseURL: ajaxUrl,
    timeout: 30000,
    headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
});

util.post = function(url, body){
	return util.ajax.post(url,body)
};

export default util;