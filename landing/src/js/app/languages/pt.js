/**
 * @author Tiago Rodrigo Calógero
 * sempre que linguagem for selecionada, o site inteiro se altera automaticamente
 */
app.run(function($rootScope, $cookies){
	$rootScope.translate = {};

	$rootScope.$watch('language', function(value){
		if(value != undefined)
			$cookies.put('language', value);

		if(value == 'pt'){
			//GENERAL
			$rootScope.translate = {
				"total": "Estimativa:",
				"forecast": "Previsão de entrega:",
				"days": "dia(s)",
				"popup": "Caso selecione pagina dinâmica, o mesmo irá acompanhado de um painel de gerenciamento (CMS)",
				"title": "Orçamento Virtual",
				"service": "Serviços",
				"applicationTitle": "Aplicativos",
				"typeCompanyTitle": "Tipo de Empresa",
				"typeSiteTitle": "Tipo de Site",
				"templateTitle": "Criar site utilizando template",
				"customTitle": "Criar site personalizado",
				"homeTitle": "Pagina Inicial",
				"whoTitle": "Quem Somos",
				"contactTitle": "Contato",
				"otherTitle": "Outras Paginas",
				"quantityTitle": "Quantidade",
				"extrasTitle": "Adicionais",
				"responsiveTitle": "Responsivo",
				"responsiveDesc": "Compatível com dispositivos móveis",
				"mvcTitle": "Estrutura MVC",
				"mvcDesc": "Oferece maior segurança e agilidade para seu site",
				"domainTitle": "Hospedagem + Dominio (Anual)",
				"maintenanceTitle": "Manutenção (Mensal)",
				"staticTitle": "Estático",
				"dynamicTitle": "Dinâmico",
				"copyright": "Desenvolvido por",
				"business": [
					{
						"sized": "Pessoal",
						"value": 0
					},
					{
						"sized": "MEI",
						"value": 300
					},
					{
						"sized": "ME",
						"value": 1500
					},
					{
						"sized": "LTDA",
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