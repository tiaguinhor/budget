/**
 * @author Tiago Rodrigo Calógero
 * filtros opcionais para o angular
 */

app
	//cria um loop mock para ngRepeat
	//usage data-ng-repeat="n in [] | range:100"
	.filter('range', function(){
		return function(input, total){
			total = parseInt(total);
			for(var i = 0; i < total; i++)
				input.push(i);
			return input;
		};
	})

	//adiciona ellipsis no final do texto (...)
	//usage data-ng-bind="text | addEllipsis"
	.filter('addEllipsis', function(){
		return function(input, scope){
			if(input){
				// Replace this with the real implementation
				return input + '...';
			}
		}
	});