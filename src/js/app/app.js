/**
 * @author Tiago Rodrigo Calógero
 */
var app = angular.module('budget', ['ngMaterial', 'ngAnimate', 'ngSanitize', 'ngCookies'])

	.run(function($rootScope, $cookies){
		//define dominio principal
		// $rootScope.domain = 'http://localhost:8080/budget/dist/';
		 $rootScope.domain = 'http://budget.ogaiti.com.br/';

		//caso linguagem nao esteja armazenada em cookie
		(!$cookies.get('language')) ? $rootScope.language = 'en' : $rootScope.language = $cookies.get('language');
	});