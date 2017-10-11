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

export default parameterService;