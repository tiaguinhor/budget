/**
 * @author Tiago Rodrigo Calógero
 */
var app = angular.module('tender', ['ngMaterial', 'ngAnimate', 'ngSanitize', 'ngCookies'])

	.run(function($rootScope, $cookies){
		//define dominio principal
		$rootScope.domain = 'http://localhost:8080/tender/dist/';
		 //$rootScope.domain = 'http://orcamento.ogaiti.com.br/';

		//caso linguagem nao esteja armazenada em cookie
		if(!$cookies.get('language'))
			$rootScope.language = 'en';
		else
			$rootScope.language = $cookies.get('language');
	});