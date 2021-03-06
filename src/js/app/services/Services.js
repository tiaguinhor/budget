/**
 * @author Tiago Rodrigo Calógero
 */

app
	.factory('sendEmail', function($http, $rootScope){
		return {
			get: function(totalValue, totalDays, values, pages, extras, user, email){
				return $http.get($rootScope.domain + 'email.php?totalValue=' + totalValue + '&totalDays=' + totalDays + '&values=' + JSON.stringify(values) + '&pages=' + JSON.stringify(pages) + '&extras=' + JSON.stringify(extras) + '&user=' + JSON.stringify(user) + '&email=' + email + '&emailOrigin=' + $rootScope.email + '&success=' + $rootScope.translate.successCallback + '&error=' + $rootScope.translate.errorCallback);
			}
		};
	});