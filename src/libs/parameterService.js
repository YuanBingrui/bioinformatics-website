import util from './util';
import qs from 'qs';

let parameterService = {};

parameterService.getHeaderParameter = function() {
  let url = '/herder-parameter.json';
  let body = {};
  return util.post(url, body).then((response) => {
    return response.data;
  }).catch(() => {
    console.log('reject');
  });
}

parameterService.getMenuParameter = function() {
  let url = '/menu-parameter.json';
  let body = {};
  return util.post(url, body).then((response) => {
    return response.data;
  }).catch(() => {
    console.log('reject');
  });
}

parameterService.getContentParameter = function() {
  let url = '/content-parameter.json';
  let body = {};
  return util.post(url, body).then((response) => {
    return response.data;
  }).catch(() => {
    console.log('reject');
  });
}

parameterService.getLinkParameter = function() {
  let url = '/link-parameter.json';
  let body = {};
  return util.post(url, body).then((response) => {
    return response.data;
  }).catch(() => {
    console.log('reject');
  });
}

parameterService.getTreeMenu = function(currentmenu) {
  let url = '/getTreeMenu.php';
  let body = qs.stringify({currentmenu: currentmenu});
  return util.post(url, body).then((response) => {
    return response.data;
  }).catch(() => {
    console.log('reject');
  });
}

parameterService.getMenuContentUrl = function(currentmenu) {
  let url = '/getMenuContent.php';
  let body = qs.stringify({currentmenu: currentmenu});
  return util.post(url, body).then((response) => {
    return response.data;
  }).catch(() => {
    console.log('reject');
  });
}

parameterService.getMenuContent = function(conentUrl) {
  let url = conentUrl;
  let body = qs.stringify({});
  return util.post(url, body).then((response) => {
    return response.data;
  }).catch(() => {
    console.log('reject');
  });
}

export default parameterService;