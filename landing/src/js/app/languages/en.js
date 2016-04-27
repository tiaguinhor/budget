/**
 * @author Tiago Rodrigo Calógero
 */
app.run(function($rootScope){
	$rootScope.$watch('language', function(value){
		if(value == 'en'){
			//GENERAL
			$rootScope.translate = {
				"total": "Estimate:",
				"forecast": "Delivery forecast:",
				"days": "day(s)",
				"popup": "If you select dynamic page, it will be accompanied by a management panel (CMS)",
				"title": "Virtual Budget",
				"service": "Services",
				"applicationTitle": "Applications",
				"typeCompanyTitle": "Type of Company",
				"typeSiteTitle": "Type of Site",
				"templateTitle": "Create website using template",
				"customTitle": "Create custom site",
				"homeTitle": "Home",
				"whoTitle": "Who we are",
				"contactTitle": "Contact",
				"otherTitle": "Other Pages",
				"quantityTitle": "Quantity",
				"extrasTitle": "Extra",
				"responsiveTitle": "Responsive",
				"responsiveDesc": "Compatible with mobile devices",
				"mvcTitle": "MVC Framework",
				"mvcDesc": "It offers greater security and agility to your website",
				"domainTitle": "Hosting + Domain (Annual)",
				"maintenanceTitle": "Monthly maintenance",
				"staticTitle": "Static",
				"dynamicTitle": "Dynamic",
				"copyright": "Developed by",
				"sendButton": "Send",
				"sendingButton": "Sending...",
				"business": [
					{
						"sized": "SP",
						"value": 0
					},
					{
						"sized": "GP",
						"value": 300
					},
					{
						"sized": "LP",
						"value": 400
					},
					{
						"sized": "C",
						"value": 1500
					},
					{
						"sized": "LLC",
						"value": 3000
					},
					{
						"sized": "LLP",
						"value": 3000
					}
				],
				"applications": [
					{
						"name": "Android",
						"value": 5000
					},
					{
						"name": "Iphone",
						"value": 7000
					},
					{
						"name": "Android + Iphone",
						"value": 10000
					}
				],
				"games": [
					{
						"type": "Plataforma",
						"value": 7000
					},
					{
						"type": "Bullet",
						"value": 6000
					},
					{
						"type": "Puzzle",
						"value": 4000
					},
					{
						"type": "Arcade",
						"value": 5000
					}
				]
			};
		}
	});
});