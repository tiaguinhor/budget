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
				"placeholderNewPageTitle": "Home, Sobre, Notícias, Contato...",
				"placeholderNewPageDescription": "A página home terá conteúdos sobre a empresa...",
				"placeholderNewPageType": "Estático representa páginas inalteráveis ou mediante pagamento. Dinâmico representa que o usuário pode alterar conteúdos da página, como banners, notícias, etc.",
				"removePage": "Remover Página",
				"newPageTitle": "Insira a nova página",
				"pageNameTitle": "Nome da Página",
				"pageDescriptionTitle": "Descreva a Página",
				"applicationTitle": "Aplicativos",
				"typeCompanyTitle": "Tipo de Empresa",
				"typeCompanyDescription": "Defina o porte de sua empresa",
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
				"sendButton": "Enviar Orçamento",
				"sendingButton": "Enviando...",
				"formTitle": "Preencha os dados de envio",
				"formName": "Nome",
				"formEmail": "Email",
				"formDescription": "Descrição",
				"successCallback": "Email enviado com sucesso!",
				"errorCallback": "Algo deu errado, tente novamente mais tarde ou diretamente pelo email <strong>tiaguinhor [at] gmail [.] com</strong>... Obrigado!",
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