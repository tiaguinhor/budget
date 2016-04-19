/**
 * @author Tiago Rodrigo Calógero
 */
app.run(function($rootScope){
	$rootScope.$watch('language', function(value){
		if(value == 'en'){
			//GENERAL
			$rootScope.translate = {
				"lastUpdate": "Last Update",
				"download": "Download Resume",
				"menuResume": '<span class="text">RESUME</span>',
				"menuSchool": '<span class="text">SCHOOLING</span>',
				"menuProject": '<span class="text">PROJECTS</span>',
				"menuSkill": '<span class="text">SKILLS</span>',
				"menuBusiness": '<span class="text">BUSINESS</span>',
				"menuContact": '<span class="text">CONTACT</span>',
				"title": 'Passionate about <strong>technology</strong> and part-time freelancer.',
				"subTitle": "He currently lives in Brazil, has a bachelor's degree in computer science and has more than " + $rootScope.timeWork + " years of experience in web development. Focused on letting the system the most accessible as possible to the customer. He has always worked with large projects and *public-facing. Passionate about technology and always seeking new knowledge to improve and optimize each project. He has the dream of working outside Brazil, stabilizing in a corporation and growing professionally.",
				"lesson": '"WHILE THERE IS FIGHT WILL, WILL WIN HOPE"',
				"languagesTitle": "<strong>Programming</strong> languages",
				"backend": "<strong>Back-End:</strong> PHP, OOP, MySQL, UML, Laravel, Codeigniter, Blade Symphony, MVC, TDD, Wordpress, Hacking Techniques, WebGL GameEngine (Construct 2), Java, Ruby, Ruby on Rails, Python, Arduino",
				"frontend": "<strong>Front-End:</strong> HTML5, Ajax, JSON, XML, REST*, SEO, Regex, DHTML, DOM, CrossBrowser, CSS3, SASS, Material, Bootstrap, UI/UX, Responsive Design, Javascript, jQuery, AngularJS, ES6, MV*, Firebase, Parse, Gulp, Bower, NPM, Git, Composer, MEAN Stack (MongoDB, ExpressJS, AngularJS, Node.js), Phonegap, Cordova, Ionic, Hybrid App, Mobile Development, Less, SVG, Snap.svg, RaphaelJS",
				"tools": "<strong>Tools:</strong> PHPStorm, SublimeText, Construct 2, Photoshop, Illustrator, LAMP, Linux",
				"bacharel": "Degree in <strong>Computer Science</strong>",
				"englishNivel": "<strong>Intermediate</strong> English",
				"schoolTitle": "SCHOOLING",
				"courseTitle": "Free courses",
				"formations": [
					{
						"description": "Degree in Computer Science from the University Central Paulista, São Carlos - SP",
						"year": "2009-2012"
					},
					{
						"description": "Computer Technician at SENAC, São Carlos - SP",
						"year": "2007-2008"
					},
					{
						"description": "English for UPTIME, São Carlos - SP",
						"year": "2 anos"
					}
				],
				"skillTitle": "TECHNICAL SKILLS",
				"skillTitleExpert": "Highly Proficient",
				"skillTitleIntermediate": "Proficient",
				"skillTitleLearning": "Beginner",
				"businessTitle": "BUSINESS",
				"messageTitle": "Send me a <strong>message</strong>",
				"messageName": "Name",
				"messageEmail": "Email",
				"messageMessage": "Message",
				"messageSend": "Send",
				"copyright": "2014 - " + $rootScope.currentYear + " All rights reserved"
			};
		}
	});
});