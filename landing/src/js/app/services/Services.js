/**
 * @author Tiago Rodrigo Calógero
 */

app
	.factory('sendEmail', function($http, $rootScope){
		return {
			get: function(totalValue, totalDays, values, other, user, email){
				return $http.get($rootScope.domain + '/email.php?totalValue=' + totalValue + '&totalDays=' + totalDays + '&values=' + JSON.stringify(values) + '&other=' + JSON.stringify(other) + '&user=' + JSON.stringify(user) + '&email=' + email);
			}
		};
	});