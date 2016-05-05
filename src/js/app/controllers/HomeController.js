app.controller('HomeController', function($scope, $rootScope, $timeout, $mdToast, sendEmail){

	/**
	 * BEGIN OPTIONS
	 */
	$rootScope.email = 'tiaguinhor@gmail.com';
	var _hourValue = 100,
		_hourStaticPage = 2,
		_hourDynamicPage = 4,
		_hourResponsive = 8,
		_hourWorkPerDay = 2,
		_templateValue = 500,
		_responsiveValue = 500,
		_mvcValue = 300,
		_domainValue = 350,
		_maintenanceValue = 200;
	/**
	 * END OPTIONS
	 */

	var init = function(){
		$scope.totalValue = 0;
		$scope.totalHours = 0;
		$scope.totalDays = 0;

		$scope.pages = [];
		$scope.newPage = {};
		$scope.values = {};
		$scope.service = 'website';

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

	//fire on controller loaded
	init();

	//function always fires the object $scope.values and $scope.pages and $scope.extras undergo changes
	$scope.$watch('[values, pages, extras]', function(newValues, oldValues, scope){
		$scope.totalValue = 0;
		$scope.totalHours = 0;
		$scope.totalDays = 0;

		//reset variables if you select a new type of company
		if(newValues[0].sizedCompany != oldValues[0].sizedCompany){
			var _businessValue = $scope.values.sizedCompany;
			$scope.pages = [];
			$scope.values = {};
			$scope.typeSite = {};
			$scope.values.sizedCompany = _businessValue;

			//wait loading
			$timeout(function(){
				$scope.totalValue += parseFloat(_businessValue.split('-')[1]);
			}, 0);
		}

		//checks all VALUES values and sum
		angular.forEach(newValues[0], function(value, key){
			//disassemble value and check whether it is static or dynamic
			if(value !== undefined){
				$scope.totalValue += parseFloat(value.split('-')[1]);

				//calculates hours
				if(value.split('-')[0] == 'static')
					$scope.totalHours += _hourStaticPage;
				else if(value.split('-')[0] == 'dynamic')
					$scope.totalHours += _hourDynamicPage;
			}
		});

		//checks all PAGES values and sum
		angular.forEach(newValues[1], function(value, key){
			//disassemble value and check whether it is static or dynamic
			if(value.type !== undefined){
				$scope.totalValue += parseFloat(value.type.split('-')[1]);

				//calculates hours
				if(value.type.split('-')[0] == 'static')
					$scope.totalHours += _hourStaticPage;
				else
					$scope.totalHours += _hourDynamicPage;
			}
		});

		//checks all EXTRAS values and sum
		angular.forEach(newValues[2], function(value, key){
			//disassemble value and check whether it is static or dynamic
			if(value !== undefined){
				if(value.split('-').length > 1)
					$scope.totalValue += parseFloat(value.split('-')[1]);
				else
					$scope.totalValue += parseFloat(value);

				//is selected responsive checks and calculates hours
				if(newValues[2].responsive != 0)
					$scope.totalHours += _hourResponsive;
			}
		});

		//wait loading
		$timeout(function(){
			$scope.totalDays = $scope.totalHours / _hourWorkPerDay;

			if(newValues[0].application)
				$scope.totalDays += 30;
			if(newValues[0].game)
				$scope.totalDays += 30;
		}, 0)
	}, true);

	//checks the type of site and do the sums
	$scope.$watch('typeSite', function(newValue){
		var _businessValue = $scope.values.sizedCompany;
		$scope.totalDays = 0;
		$scope.totalValue = 0;

		//if the type of site is template
		if(newValue == 'template'){
			$scope.pages = [];
			$scope.values = {};
			$scope.values.sizedCompany = _businessValue;

			//wait loading
			$timeout(function(){
				$scope.totalDays = 3;
				$scope.totalValue = parseFloat(_businessValue.split('-')[1]) + parseFloat(_templateValue);
			}, 0);
		}

		//if custom page, only adds the type of company
		if(newValue == 'custom')
			$scope.totalValue = parseFloat(_businessValue.split('-')[1]);
	});

	//reset variables and selects service
	$scope.selectService = function(service){
		$scope.pages = [];
		$scope.values = {};
		$scope.service = service;

		//fix set value to 0
		$timeout(function(){
			$scope.totalValue = 0;
		}, 100);
	};

	//close popup
	$scope.closePopup = function(){
		$scope.close = true;
	};

	//change language site
	$scope.changeLanguage = function(lang){
		$rootScope.language = lang;
	};

	//insert new pages
	$scope.insertNewPage = function(newPage){
		if(newPage.title && newPage.description){
			$scope.newPage = {};

			newPage.type = (newPage.type === undefined || newPage.type == $rootScope.translate.staticTitle) ? 'static-' + $scope.staticValue : 'dynamic-' + $scope.dynamicValue;

			$scope.pages.push(newPage);
		}else{
			$mdToast.show(
				$mdToast.simple()
					.textContent('Necessário preencher os campos NOME e DESCRIÇÃO.')
					.position('top left')
					.hideDelay(5000)
			);
		}
	};

	//remove pages
	$scope.removeNewPage = function(page){
		var position = $scope.pages.indexOf(page);
		$scope.pages.splice(position, 1);
	};

	//send budget
	$scope.submit = function(){
		if($scope.user){
			var _sendButtonText = $rootScope.translate.sendButton;
			$scope.loading = true;
			$rootScope.translate.sendButton = $rootScope.translate.sendingButton;

			sendEmail.get($scope.totalValue, $scope.totalDays, $scope.values, $scope.pages, $scope.extras, $scope.user, $scope.user.email).success(function(callback){
				delete $scope.user;
				$scope.loading = false;
				$scope.form.$setPristine();
				$scope.form.$setUntouched();
				$rootScope.translate.sendButton = _sendButtonText;

				$mdToast.show(
					$mdToast.simple()
						.textContent(callback)
						.position('top left')
						.hideDelay(5000)
				);
			}).error(function(){
				$scope.loading = false;
				console.error('Ajax factory error.');
			});
		}else{
			$mdToast.show(
				$mdToast.simple()
					.textContent('Por favor, preencha os campos de envio.')
					.position('top left')
					.hideDelay(5000)
			);
		}
	}
});