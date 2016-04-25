app.controller('HomeController', function($scope, $rootScope, $timeout){
	//hours
	var _hourValue = 100,
		_hourStaticPage = 2,
		_hourDynamicPage = 4,
		_hourResponsive = 8,
		_hourPerDay = 2,
		//values
		_templateValue = 500,
		_responsiveValue = 600,
		_mvcValue = 300,
		_domainValue = 350,
		_maintenanceValue = 200;

	var init = function(){
		$scope.totalValue = 0;
		$scope.totalHours = 0;
		$scope.totalDays = 0;
		
		$scope.values = {};
		$scope.other = {};
		
		$scope.staticValue = parseFloat(_hourValue * _hourStaticPage);
		$scope.dynamicValue = parseFloat(_hourValue * _hourDynamicPage);
		
		$scope.responsiveValue = _responsiveValue;
		$scope.mvcValue = _mvcValue;
		$scope.domainValue = _domainValue;
		$scope.maintenanceValue = _maintenanceValue;
		
		$scope.typeLanguages = [
			{
				"abb": "pt",
				"title": "Portuguese"
			},
			{
				"abb": "en",
				"title": "English"
			}
		];
	};

	// fire on controller loaded
	init();

	// Função disparada sempre que o objeto $scope.values e $scope.other sofrer alterações
	$scope.$watch('[values, other]', function(newValues, oldValues, scope){
		$scope.totalValue = 0;
		$scope.totalHours = 0;
		$scope.totalDays = 0;

		//reseta variaveis se for selecionado um novo tipo de empresa
		if(newValues[0].portBusiness != oldValues[0].portBusiness){
			var business = $scope.values.portBusiness;
			$scope.other = {};
			$scope.values = {};
			$scope.typeSite = {};
			$scope.values.portBusiness = business;
		}

		//verifica todos os valores e soma
		angular.forEach($scope.values, function(value, key){
			//desmonta valor e verifica se é estatico ou dinamico
			if(value.split('-').length > 1){
				$scope.totalValue += parseFloat(value.split('-')[1]);

				//calcula horas
				if(value.split('-')[0] == 'static')
					$scope.totalHours += _hourStaticPage;
				else
					$scope.totalHours += _hourDynamicPage;
			}else
				$scope.totalValue += parseFloat(value);

			//verifica se responsivo esta selecionado
			if(newValues[0].mobile && newValues[0].mobile != 0){
				$scope.totalHours += _hourResponsive;

				if($scope.typeSite == 'template'){
					// $scope.totalHours += _hourResponsive;
					$scope.totalValue += parseFloat(_templateValue);
				}
			}
		});

		//verifica todos os valores e soma
		angular.forEach($scope.other, function(value, key){
			$scope.other.quantity = $scope.other.quantity || 1;

			//desmonta valor e verifica se é estatico ou dinamico
			if($scope.other.value.split('-').length > 1){
				$scope.totalValue += parseFloat($scope.other.value.split('-')[1] * $scope.other.quantity);

				//calcula horas
				if($scope.other.value.split('-')[0] == 'static')
					$scope.totalHours += _hourStaticPage * $scope.other.quantity;
				else
					$scope.totalHours += _hourDynamicPage * $scope.other.quantity;
			}else
				$scope.totalValue += parseFloat($scope.other.value * $scope.other.quantity);
		});

		//aguarda carregamento
		$timeout(function(){
			$scope.totalDays = $scope.totalHours / _hourPerDay;
		}, 0)
	}, true);

	//se o tipo de site for template, soma com valor estatico
	$scope.$watch('typeSite', function(newValue){
		$scope.totalDays = 0;
		$scope.totalValue = 0;

		if(newValue == 'template'){
			var _businessValue = $scope.values.portBusiness;
			$scope.other = {};
			$scope.values = {};
			$scope.values.portBusiness = _businessValue;

			//aguarda carregamento
			$timeout(function(){
				$scope.totalDays = 3;
				$scope.totalValue = parseFloat(_businessValue) + parseFloat(_templateValue);
			}, 0);
		}
	});

	//reseta variaveis e seleciona servico
	$scope.selectService = function(service){
		$scope.values = {};
		$scope.other = {};
		$scope.service = service;

		if(service == 'game')
			$scope.totalDays = 30;
		else if(service == 'app')
			$scope.totalDays = 30;
		else
			$scope.totalDays = 0;
	};

	//fecha popup
	$scope.closePopup = function(){
		$scope.close = true;
	};

	//altera idioma do site
	$scope.changeLanguage = function(lang){
		$rootScope.language = lang;
	};
});