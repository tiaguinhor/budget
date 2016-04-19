/**
 * @author Tiago Rodrigo Calógero
 * sempre que linguagem for selecionada, o site inteiro se altera automaticamente
 */
app.run(function($rootScope, $cookies){
	//$rootScope.language = 'pt';
	$rootScope.translate = {};

	$rootScope.$watch('language', function(value){
		if(value != undefined)
			$cookies.put('language', value);

		if(value == 'pt'){
			//GENERAL
			$rootScope.translate = {
				"lastUpdate": "Última Atualização",
				"download": "Baixar Currículo",
				"menuResume": '<span class="text">RESUMO</span>',
				"menuSchool": '<span class="text">ESCOLARIDADE</span>',
				"menuProject": '<span class="text">PROJETOS</span>',
				"menuSkill": '<span class="text">HABILIDADES</span>',
				"menuBusiness": '<span class="text">EMPRESAS</span>',
				"menuContact": '<span class="text">CONTATO</span>',
				"title": 'Apaixonado por <strong>tecnologia</strong> e freelancer nas horas vagas',
				"subTitle": 'Possui '+$rootScope.age+' anos, reside em São Carlos - SP, é graduado em Sistemas de Informação e trabalha com desenvolvimento web a mais de '+$rootScope.timeWork+' anos.',
				"lesson": '"ENQUANTO HOUVER VONTADE DE LUTAR, HAVERÁ ESPERANÇA DE VENCER"',
				"functionTitle": "Funções exercidas durante <strong>carreira profissional</strong>",
				"functions": "Desenvolvedor Full Stack, Engenheiro de Software, Analista de Sistemas, Desenvolvedor Web, Suporte Técnico, Técnico em Hardware e Software e Marketing.",
				"languagesTitle": "Linguagens de <strong>programação</strong>",
				"backend": "<strong>Back-End:</strong> PHP, OOP, MySQL, UML, Laravel, Codeigniter, Blade Symphony, MVC, TDD, Wordpress, Hacking Techniques, WebGL GameEngine (Construct 2), Java, Ruby, Ruby on Rails, Python, Arduino",
				"frontend": "<strong>Front-End:</strong> HTML5, Ajax, JSON, XML, REST*, SEO, Regex, DHTML, DOM, CrossBrowser, CSS3, SASS, Material, Bootstrap, UI/UX, Responsive Design, Javascript, jQuery, AngularJS, ES6, MV*, Firebase, Parse, Gulp, Bower, NPM, Git, Composer, MEAN Stack (MongoDB, ExpressJS, AngularJS, Node.js), Phonegap, Cordova, Ionic, Hybrid App, Mobile Development, Less, SVG, Snap.svg, RaphaelJS",
				"tools": "<strong>Ferramentas:</strong> PHPStorm, SublimeText, Construct 2, Photoshop, Illustrator, LAMP, Linux",
				"bacharel": "Graduado em <strong>Sistemas de Informação</strong>",
				"englishNivel": "Inglês <strong>intermediário</strong>",
				"schoolTitle": "ESCOLARIDADE",
				"courseTitle": "Cursos Livres",
				"formations": [
					{
						"description": "Graduado em <strong>Sistemas de Informação</strong> pela Universidade Central Paulista, São Carlos - SP",
						"year": "2009-2012"
					},
					{
						"description": "<strong>Técnico em Informática</strong> pelo SENAC, São Carlos - SP",
						"year": "2007-2008"
					},
					{
						"description": "<strong>Inglês</strong> pela UPTIME, São Carlos - SP",
						"year": "2 anos"
					}
				],
				"skillTitle": "HABILIDADES TÉCNICAS",
				"skillTitleExpert": "Avançado",
				"skillTitleIntermediate": "Experiente",
				"skillTitleLearning": "Iniciante",
				"businessTitle": "EMPRESAS",
				"messageTitle": "Envie-me uma <strong>mensagem</strong>",
				"messageName": "Nome",
				"messageEmail": "Email",
				"messageMessage": "Mensagem",
				"messageSend": "Enviar",
				"copyright": "2014 - "+$rootScope.currentYear+" Todos os direitos reservados"
			};
		}
	});
});