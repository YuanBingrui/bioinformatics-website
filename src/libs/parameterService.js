import util from './util';

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

export default parameterService;