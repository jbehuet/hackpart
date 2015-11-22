function partiesService($http, global) {
	return {
		get : function() {
			return $http.get('http://' + global.host + ':' + global.port + '/api/parties');
		},
        getById : function(id) {
			return $http.get('http://' + global.host + ':' + global.port + '/api/parties/' + id);
		},
		update : function(id, data){
			return $http.put('http://' + global.host + ':' + global.port + '/api/parties/' + id, data);
		},
        subscribe : function(id, data){
			return $http.put('http://' + global.host + ':' + global.port + '/api/parties/subscribe/' + id, data);
		},
        unsubscribe : function(id, data){
			return $http.put('http://' + global.host + ':' + global.port + '/api/parties/unsubscribe/' + id, data);
		},
		create : function(data) {
			return $http.post('http://' + global.host + ':' + global.port + '/api/parties', data);
		},
		delete : function(id) {
			return $http.delete('http://' + global.host + ':' + global.port + '/api/parties/' + id);
		}
	}
};