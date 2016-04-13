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
	$scope.portfolios = [
		{
			"file": "algar",
			"order": 10
		},
		{
			"file": "algar-2",
			"order": 11
		},
		{
			"file": "algar-aviation",
			"order": 12
		},
		{
			"file": "aviacao",
			"order": 13
		},
		{
			"file": "mendorato",
			"order": 14
		},
		{
			"file": "mondial",
			"order": 15
		},
		{
			"file": "ogaiti",
			"order": 16
		},
		{
			"file": "pacoquita",
			"order": 17
		},
		{
			"file": "granja-marileusa",
			"order": 18
		},
		{
			"file": "santa-helena",
			"order": 19
		},
		{
			"file": "sesma",
			"order": 20
		},
		{
			"file": "blogPink",
			"order": 9
		},
		{
			"file": "hotPink",
			"order": 8
		},
		{
			"file": "intraPink",
			"order": 1
		},
		{
			"file": "intraPink2",
			"order": 2
		},
		{
			"file": "pink",
			"order": 3
		},
		{
			"file": "pinkNovo",
			"order": 0
		},
		{
			"file": "projetoAfrica",
			"order": 5
		},
		{
			"file": "sgarbSamara",
			"order": 4
		},
		{
			"file": "sosAfrica",
			"order": 6
		},
		{
			"file": "spadaModa",
			"order": 7
		}
	];
	$scope.courses = [
		{
			"title": "WebGL GameEngine - Construct 2"
		},
		{
			"title": "Introdução ao TypeScript - André Baltieri"
		},
		{
			"title": "Introdução ao AngularJS 2.0 - Nicolas Takashi"
		},
		{
			"title": "MongoDB - Be Mean"
		},
		{
			"title": "MEAN - Manthan Dave"
		},
		{
			"title": "ES6"
		},
		{
			"title": "Javascript - Rodrigo Branas"
		},
		{
			"title": "AngularJS - Rodrigo Branas"
		},
		{
			"title": "Javascript - Be Mean"
		},
		{
			"title": "Cordova/Phonegap"
		},
		{
			"title": "Laravel"
		},
		{
			"title": "jQuery"
		},
		{
			"title": "Bootstrap"
		},
		{
			"title": "Python"
		},
		{
			"title": "Java SE"
		},
		{
			"title": "PHP"
		},
		{
			"title": "Bootstrap"
		},
		{
			"title": "Arduino"
		}
	];
	$scope.skills = {
		"expert": [
			{
				"title": "HTML5",
				"percentual": "80"
			},
			{
				"title": "Ajax",
				"percentual": "80"
			},
			{
				"title": "JSON",
				"percentual": "90"
			},
			{
				"title": "XML",
				"percentual": "90"
			},
			{
				"title": "REST*",
				"percentual": "80"
			},
			{
				"title": "SEO",
				"percentual": "80"
			},
			{
				"title": "Regex",
				"percentual": "80"
			},
			{
				"title": "DHTML",
				"percentual": "90"
			},
			{
				"title": "DOM",
				"percentual": "90"
			},
			{
				"title": "CrossBrowser",
				"percentual": "90"
			},
			{
				"title": "CSS3",
				"percentual": "90"
			},
			{
				"title": "SASS / SCSS / LESS",
				"percentual": "90"
			},
			{
				"title": "Material",
				"percentual": "80"
			},
			{
				"title": "Bootstrap",
				"percentual": "90"
			},
			{
				"title": "UI / UX",
				"percentual": "80"
			},
			{
				"title": "Responsive Design",
				"percentual": "90"
			},
			{
				"title": "Javascript",
				"percentual": "80"
			},
			{
				"title": "jQuery",
				"percentual": "90"
			},
			{
				"title": "AngularJS",
				"percentual": "80"
			},
			{
				"title": "MEAN (MongoDB, ExpressJS, AngularJS, Node.js)",
				"percentual": "70"
			},
			{
				"title": "MV*",
				"percentual": "70"
			},
			{
				"title": "Gulp",
				"percentual": "90"
			},
			{
				"title": "Bower",
				"percentual": "90"
			},
			{
				"title": "NPM",
				"percentual": "90"
			},
			{
				"title": "Git",
				"percentual": "80"
			},
			{
				"title": "Composer",
				"percentual": "70"
			},
			{
				"title": "Phonegap / Cordova",
				"percentual": "70"
			},
			{
				"title": "Ionic",
				"percentual": "70"
			},
			{
				"title": "Hybrid App",
				"percentual": "70"
			},
			{
				"title": "Mobile Development",
				"percentual": "70"
			},
			{
				"title": "PHP",
				"percentual": "90"
			},
			{
				"title": "OOP",
				"percentual": "80"
			},
			{
				"title": "MySQL",
				"percentual": "80"
			},
			{
				"title": "UML",
				"percentual": "80"
			},
			{
				"title": "Laravel",
				"percentual": "90"
			},
			{
				"title": "Codeigniter",
				"percentual": "70"
			},
			{
				"title": "Blade",
				"percentual": "90"
			},
			{
				"title": "Symphony",
				"percentual": "70"
			},
			{
				"title": "MVC",
				"percentual": "90"
			},
			{
				"title": "TDD",
				"percentual": "70"
			},
			{
				"title": "PHPStorm",
				"percentual": "90"
			},
			{
				"title": "SublimeText",
				"percentual": "80"
			},
			{
				"title": "Photoshop",
				"percentual": "70"
			},
			{
				"title": "LAMP",
				"percentual": "70"
			}
		],
		"intermediate": [
			{
				"title": "Firebase",
				"percentual": "50"
			},
			{
				"title": "Parse",
				"percentual": "40"
			},
			{
				"title": "Wordpress",
				"percentual": "60"
			},
			{
				"title": "Hacking Techniques",
				"percentual": "50"
			},
			{
				"title": "WebGL GameEngine (Construct 2)",
				"percentual": "50"
			},
			{
				"title": "Linux",
				"percentual": "40"
			},
			{
				"title": "SVG",
				"percentual": "40"
			},
			{
				"title": "Snap.svg",
				"percentual": "50"
			},
			{
				"title": "RaphaelJS",
				"percentual": "50"
			},
			{
				"title": "Java",
				"percentual": "40"
			},
			{
				"title": "Python",
				"percentual": "40"
			}
		],
		"learning": [
			{
				"title": "Typescript",
				"percentual": "20"
			},
			{
				"title": "ES6",
				"percentual": "20"
			},
			{
				"title": "Ruby [--Rails]",
				"percentual": "30"
			},
			{
				"title": "Arduino",
				"percentual": "20"
			},
			{
				"title": "Illustrator",
				"percentual": "30"
			}
		]
	};

	$scope.changeLanguage = function(lang){
		$rootScope.language = lang;
	};
});