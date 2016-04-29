/**
 * @author Tiago Rodrigo Calógero
 */
app.run(function($rootScope){
	$rootScope.$watch('language', function(value){
		if(value == 'es'){
			//GENERAL
			$rootScope.translate = {
				"lastUpdate": "Última Actualización",
				"download": "Descarga Curriculum",
				"menuResume": '<span class="text">CURRÍCULUM</span>',
				"menuSchool": '<span class="text">ENSEÑANZA</span>',
				"menuProject": '<span class="text">PROYECTOS</span>',
				"menuSkill": '<span class="text">HABILIDADES</span>',
				"menuBusiness": '<span class="text">NEGOCIO</span>',
				"menuContact": '<span class="text">CONTACTO</span>',
				"title": 'Apasionado por la <strong>tecnología</strong> y la independiente en el lateral.',
				"subTitle": "En la actualidad reside en Brasil, el grado de licenciatura en ciencias de la computación y lleva el bagaje de más de "+$rootScope.timeWork+" años de experiencia en el desarrollo web. Se centró en dejar que el sistema sea más accesible posible para el cliente. Siempre trabajado con grandes proyectos y orientada hacia el público. Apasionado por la tecnología y siempre en busca de nuevos conocimientos para mejorar y optimizar cada proyecto. Tiene el sueño de trabajar fuera de Brasil, en la estabilización de una corporación y crecer profesionalmente.",
				"lesson": '"Si bien hay lucha va, GANARÁ LA ESPERANZA"',
				"languagesTitle": "Lenguajes de <strong>programación</strong>",
				"backend": "<strong>Back-End:</strong> PHP, OOP, MySQL, UML, Laravel, Codeigniter, Blade Symphony, MVC, TDD, Wordpress, Hacking Techniques, WebGL GameEngine (Construct 2), Java, Ruby, Ruby on Rails, Python, Arduino",
				"frontend": "<strong>Front-End:</strong> HTML5, Ajax, JSON, XML, REST*, SEO, Regex, DHTML, DOM, CrossBrowser, CSS3, SASS, Material, Bootstrap, UI/UX, Responsive Design, Javascript, jQuery, AngularJS, ES6, MV*, Firebase, Parse, Gulp, Bower, NPM, Git, Composer, MEAN Stack (MongoDB, ExpressJS, AngularJS, Node.js), Phonegap, Cordova, Ionic, Hybrid App, Mobile Development, Less, SVG, Snap.svg, RaphaelJS",
				"tools": "<strong>Herramientas:</strong> PHPStorm, SublimeText, Construct 2, Photoshop, Illustrator, LAMP, Linux",
				"bacharel": "Licenciado en <strong>Ciencias de la Computación<strong>",
				"englishNivel": "Inglés <strong>intermedio</strong>",
				"schoolTitle": "ENSEÑANZA",
				"courseTitle": "Cursos gratuitos",
				"formations": [
					{
						"description": "Licenciado en Ciencias de la Computación de la Universidad Central Paulista, São Carlos - SP",
						"year": "2009-2012"
					},
					{
						"description": "Técnico informático de SENAC, São Carlos - SP",
						"year": "2007-2008"
					},
					{
						"description": "Inglés para UPTIME, São Carlos - SP",
						"year": "2 anos"
					}
				],
				"skillTitle": "HABILIDADES TÉCNICAS",
				"skillTitleExpert": "Muy Competente",
				"skillTitleIntermediate": "Competente",
				"skillTitleLearning": "Principiante",
				"businessTitle": "NEGOCIO",
				"messageTitle": "Envíeme un <strong>mensaje</strong>",
				"messageName": "Nombre",
				"messageEmail": "Email",
				"messageMessage": "Mensaje",
				"messageSend": "Enviar",
				"copyright": "2014 - "+$rootScope.currentYear+" Todos los derechos reservados"
			};
		}
	});
});