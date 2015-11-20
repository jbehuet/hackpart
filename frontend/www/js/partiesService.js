function partiesService($http, global) {
	return {
		get : function() {
			return $http.get('http://' + global.host + ':' + global.port + '/api/parties');
		},
		update : function(id, data){
			return $http.put('/api/parties/' + id, data);
		},
		create : function(data) {
			return $http.post('/api/parties', data);
		},
		delete : function(id) {
			return $http.delete('/api/parties/' + id);
		}
	}
};