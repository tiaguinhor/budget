app.controller('HomeController', function($scope, $rootScope){
	var init = function(){
		$scope.totalValue = 0;
		$scope.days = 0;
		$scope.values = {};
		$scope.staticValue = 'static-200';
		$scope.dynamicValue = 'dynamic-500';
		$scope.other = {};
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
				"title": "Spanish"
			}
		];
	};

	// fire on controller loaded
	init();

	// Função disparada sempre que o objeto $scope.values e $scope.other sofrer alterações
	$scope.$watch('[values, other]', function(newValues, oldValues){
		$scope.totalValue = 0;

		angular.forEach($scope.values, function(value, key){
			$scope.totalValue += (value != 'NaN') ? parseFloat(value.split('-')[1]) : 0;
		});

		if($scope.service == 'site'){
			if($scope.typeSite == 'template'){
				$scope.days = 5;
				$scope.totalValue += 500;

				return;
			}

			angular.forEach($scope.other, function(value, key){
				$scope.other.quantity = $scope.other.quantity || 1;
				$scope.totalValue += (value != 'NaN') ? parseFloat($scope.other.value.split('-')[1] * $scope.other.quantity) : 0;
			});
		}
	}, true);

	$scope.selectService = function(service){
		$scope.values = {};
		$scope.other = {};
		$scope.service = service;
	};

	$scope.closePopup = function(){
		$scope.close = true;
	};

	$scope.changeLanguage = function(lang){
		$rootScope.language = lang;
	};
});