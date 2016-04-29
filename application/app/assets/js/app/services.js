app.factory('Login', function($http){
		return {
			autentica: function(user){
				return $http.post('http://localhost:8080/ondebeber/webservice/public/api/login', user);
			},
			register: function(user){
				return $http.post('http://localhost:8080/ondebeber/webservice/public/api/register/', user);
			},
			forgot: function(user){
				return $http.get('http://localhost:8080/ondebeber/webservice/public/api/forgot/');
			}
		};
	})

	.factory('Beers', function($http){
		return {
			get: function(){
				return $http.get('http://localhost:8080/ondebeber/webservice/public/api/beers');
			}
		};
	})

	.factory('Bars', function($http){
		return {
			get: function(drinkId){
				return $http.get('http://localhost:8080/ondebeber/webservice/public/api/bars/'+drinkId);
			},
			details: function(barId){
				return $http.get('http://localhost:8080/ondebeber/webservice/public/api/barDetails/'+barId);
			},
			images: function(barId){
				return $http.get('http://localhost:8080/ondebeber/webservice/public/api/barImages/'+barId);
			},
			hours: function(barId){
				return $http.get('http://localhost:8080/ondebeber/webservice/public/api/barHours/'+barId);
			}
		};
	});