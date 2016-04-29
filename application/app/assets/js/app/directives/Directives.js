/**
 * @author Tiago Rodrigo Calógero
 * diretivas opcionais para o angular
 */

app
	//force focus
	//usage data-focus-me="boolean"
	.directive('focusMe', function($timeout){
		return function(scope, element, attrs){
			scope.$watch(attrs.focusMe, function(value){
				if(attrs.focusMe){
					if(scope.$eval(attrs.focusMe)){
						$timeout(function(){
							element[0].focus();
						}, 100); //need some delay to work with ng-disabled
					}
				}
			});
		};
	})

	//force blur
	//usage data-blur-me="boolean"
	.directive('blurMe', function(){
		return function(scope, elem, attrs){
			elem.bind('blur', function(){
				scope.$apply(attrs.blurMe);
			});
		};
	});