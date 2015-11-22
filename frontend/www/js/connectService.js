function connectService($http, global){
	return {
		connect: function(data){
			return $http.post('http://' + global.host + ':' + global.port + '/api/login', data);
		},
		disconnect: function(){
			return $http.post('http://' + global.host + ':' + global.port + '/api/logout');
		}
	}
}