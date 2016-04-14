app.controller('AppCtrl', function($scope, $rootScope, $ionicModal, $timeout, $state, localStorageService, Login){

	//força logout
	$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
		//força reload
		if($rootScope.logout == true){
			$rootScope.logout = false;
			$timeout(function(){
				$window.location.reload();
			}, 300);
		}
	});

	$scope.showloggedbuttons = false;
	$scope.showloginbutton = true;
	$scope.user = {};

	// Create the login modal that we will use later
	$ionicModal.fromTemplateUrl('templates/login.html', {
		id: '1', // We need to use and ID to identify the modal that is firing the event!
		scope: $scope
	}).then(function(modal){
		$scope.login = modal;
	});

	// Create the login modal that we will use later
	$ionicModal.fromTemplateUrl('templates/register.html', {
		id: '2', // We need to use and ID to identify the modal that is firing the event!
		scope: $scope
	}).then(function(modal){
		$scope.register = modal;
	});

	// Create the login modal that we will use later
	$ionicModal.fromTemplateUrl('templates/password.html', {
		id: '3', // We need to use and ID to identify the modal that is firing the event!
		scope: $scope
	}).then(function(modal){
		$scope.password = modal;
	});

	$scope.openModal = function(index){
		if(index == 1) $scope.login.show();
		else if(index == 2) $scope.register.show();
		else $scope.password.show();
	};

	$scope.closeModal = function(index){
		if(index == 1) $scope.login.hide();
		else if(index == 2) $scope.register.hide();
		else $scope.password.hide();
	};

	//caso ja esteja logado, redireciona
	if(localStorageService.isSupported && localStorageService.get('id') != null){
		$state.go('logged.beerlists', {userId: localStorageService.get('id')});
		return false;
	}else if(localStorageService.isSupported)
		localStorageService.clearAll();

	// Perform the login action when the user submits the login form
	$scope.sendLoginData = function(){
		Login.autentica($scope.user)
			.success(function(data){
				if(data.message == 'success'){
					$state.go('logged.beerlists', {userId: data.id});
				}else{
					var title = 'Erro - Inválido';
					var message = 'Usuário ou senha inválidos.';
					alert(message, title);
				}
			})
			.error(function(data){
				console.log(data);
			});
	};

	$scope.sendData = function(data){
		// Simulate a login delay. Remove this and replace with your login
		// code if using a login system
		$timeout(function(){
			$scope.closeModal();
		}, 1000);
	};

})

	.controller('HomeCtrl', function($scope){

	})

	.controller('LoggedCtrl', function($scope, $ionicModal, $timeout){
		$scope.showloggedbuttons = true;
		$scope.showloginbutton = false;
	})

	.controller('BeerlistsCtrl', function($scope, $stateParams, $ionicLoading, Beers){
		$ionicLoading.show({
			template: '<ion-spinner icon="ripple"></ion-spinner>',
			animation: 'fade-in'
		});
		$scope.userId = $stateParams.userId;
		Beers.get()
			.success(function(data){
				$ionicLoading.hide();
				$scope.beerlists = data;
			})
			.error(function(data){
				$ionicLoading.hide();
				console.log(data);
			});
	})

	.controller('BarlistsCtrl', function($scope, $stateParams, $ionicLoading, Bars){
		$ionicLoading.show({
			template: '<ion-spinner icon="ripple"></ion-spinner>',
			animation: 'fade-in'
		});
		$scope.userId = $stateParams.userId;
		Bars.get($stateParams.drinkId)
			.success(function(data){
				$ionicLoading.hide();
				$scope.barlists = data;
				$scope.drinkName = data[0].drinkName;
			})
			.error(function(data){
				$ionicLoading.hide();
				console.log(data);
			});
	})

	.controller('BarlistCtrl', function($scope, $stateParams, $ionicLoading, Bars){
		$ionicLoading.show({
			template: '<ion-spinner icon="ripple"></ion-spinner>',
			animation: 'fade-in'
		});
		$scope.userId = $stateParams.userId;

		//CALCULA DISTANCIA ENTRE O GPS E DESTINO
		function deg2rad(deg){
			return deg * (Math.PI / 180);
		}

		function calculateDistance(lat1, lon1, lat2, lon2){
			var R = 6371; // Radius of the earth in km
			var dLat = deg2rad(lat2 - lat1);  // deg2rad below
			var dLon = deg2rad(lon2 - lon1);
			var a =
							Math.sin(dLat / 2) * Math.sin(dLat / 2) +
							Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
							Math.sin(dLon / 2) * Math.sin(dLon / 2)
					;
			var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
			var d = R * c; // Distance in km
			return parseInt(d);
		}

		navigator.geolocation.getCurrentPosition(function(position){
			var startPos = position,
					i;

			for(i = 0; i < data.length; i++){
				var destLat = data[i].latitude,
						destLon = data[i].longitude;
				$scope.position = data[i];

				$scope.$apply(function(){
					$scope.position.distance = calculateDistance(startPos.coords.latitude, startPos.coords.longitude, destLat, destLon) + " kilometro(s)";
				});
			}
		}, function(error){
			alert("Error occurred. Error code: " + error.code);
		});

		Bars.details($stateParams.barId)
			.success(function(data){
				$scope.barDetails = data;
				$scope.barName = data[0].name.toUpperCase();

				Bars.images($stateParams.barId)
					.success(function(data){
						$ionicLoading.hide();
						$scope.barImages = data;
					})
					.error(function(data){
						$ionicLoading.hide();
						console.log(data);
					});

				Bars.hours($stateParams.barId)
					.success(function(data){
						$scope.barHours = data;
					})
					.error(function(data){
						console.log(data);
					});
			})
			.error(function(data){
				console.log(data);
			});
	});