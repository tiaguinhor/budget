app.controller('HomeController', function($scope, $rootScope){
	var init = function(){
		$scope.totalValue = 0;
		$scope.days = 0;
		$scope.values = {};
		$scope.other = {};
		$scope.staticValue = 'static-200';
		$scope.dynamicValue = 'dynamic-500';
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
			(value.split('-').length > 1)
				? $scope.totalValue += parseFloat(value.split('-')[1])
				: $scope.totalValue += parseFloat(value);
		});

		if($scope.service == 'site'){
			angular.forEach($scope.other, function(value, key){
				$scope.other.quantity = $scope.other.quantity || 1;

				($scope.other.value.split('-').length > 1)
					? $scope.totalValue += parseFloat($scope.other.value.split('-')[1] * $scope.other.quantity)
					: $scope.totalValue += parseFloat($scope.other.value * $scope.other.quantity) ;
			});
		}
	}, true);

	$scope.$watch('typeSite', function(value){
		if(value == 'template'){
			var business = $scope.values.portBusiness;
			$scope.other = {};
			$scope.values = {};
			$scope.days = 5;
			$scope.values.portBusiness = business;
			$scope.totalValue = parseFloat(business) + parseInt(500);
		}
	});

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