app.controller('HomeController', function($scope, $rootScope){
	var init = function () {
		// object to hold all the data for the new login form
		$scope.valores = {};
		$scope.outras = {};
		$scope.loading = false;
	};

	// fire on controller loaded
	init();

	// function to handle submitting the form
	$scope.submitLogin = function() {
		$scope.loading = true;
	};

	$scope.$watchCollection('valores', function() {
		// Função disparada sempre que o objeto $scope.valores sofrer alterações
		$scope.valorTotal = 0;

		angular.forEach($scope.valores, function(value, key) {
			//alert(JSON.stringify(value));
			$scope.valorTotal += parseFloat(value);
			//$scope.valorTotal += parseFloat($scope.outras.valor * $scope.outras.qtd);
		});
	});

	$scope.typeLanguages = [
		{
			"abb": "pt",
			"title": "Portuguese"
		},
		{
			"abb": "en",
			"title": "English"
		},
		{
			"abb": "es",
			"title": "Espanish"
		}
	];

	$scope.changeLanguage = function(lang){
		$rootScope.language = lang;
	};
});