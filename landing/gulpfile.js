var path = require('path'),
	gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	filesize = require('gulp-filesize'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	minifyCSS = require('gulp-minify-css'),
	minifyHTML = require('gulp-htmlmin'),
	ngAnnotate = require('gulp-ng-annotate'),
	browserSync = require('browser-sync'),
	watch = require('gulp-watch'),
	changed = require('gulp-changed'),
	directoryProject = 'budget/landing/dist/';

gulp.task('html', function(){
	// move html to different platforms
	var opts = {removeComments: true, collapseWhitespace: true};

	gulp.src(['src/**/*.html'])
		.pipe(changed('dist', {extension: '.html'}))
		.pipe(minifyHTML(opts))
		.pipe(gulp.dest('dist'))
		.on('error', function(err){
			console.log(err.message);
		});

	gulp.src(['src/email.php'])
		.pipe(changed('dist', {extension: '.php'}))
		.pipe(gulp.dest('dist'))
		.on('error', function(err){
			console.log(err.message);
		});
});

gulp.task('fonts', function(){
	gulp.src([
		'components/components-font-awesome/fonts/**',
		'src/fonts/**'
	])
		.pipe(changed('dist/assets/fonts'))
		.pipe(gulp.dest('dist/assets/fonts'))
		.on('error', function(err){
			console.log(err.message);
		});
});

gulp.task('media', function(){
	gulp.src([
		'src/images/**'
	])
		.pipe(changed('dist/assets/images'))
		.pipe(gulp.dest('dist/assets/images'))
		.on('error', function(err){
			console.log(err.message);
		});

	gulp.src([
		'src/videos/**'
	])
		.pipe(changed('dist/assets/videos'))
		.pipe(gulp.dest('dist/assets/videos'))
		.on('error', function(err){
			console.log(err.message);
		});
});

gulp.task('css', function(){
	gulp.src([
		'components/angular-material/angular-material.scss',
		'components/components-font-awesome/scss/font-awesome.scss',
		'src/css/**/*.css',
		'src/scss/style.scss'
	])
		.pipe(changed('dist/assets/css', {extension: '.css'}))
		.pipe(sass())
		.pipe(autoprefixer('last 3 version'))
		.pipe(minifyCSS())
		.pipe(concat('style.min.css'))
		.pipe(filesize())
		.pipe(gulp.dest('dist/assets/css'))
		.on('error', function(err){
			console.log(err.message);
		});
});

gulp.task('library', function(){
	gulp.src([
		'components/jquery/dist/jquery.min.js',
		'components/angular/angular.min.js',
		'components/angular-material/angular-material.js',
		'components/angular-messages/angular-messages.min.js',
		'components/angular-ui-router/release/angular-ui-router.min.js',
		'components/angular-cookies/angular-cookies.min.js',
		'components/angular-sanitize/angular-sanitize.min.js',
		'components/angular-animate/angular-animate.min.js',
		'components/angular-aria/angular-aria.min.js',
		'components/angular-locale-pt-br/angular-locale_pt-br.js',
		'src/js/vendors/**/*.js'
	])
		.pipe(changed('dist/assets/js', {extension: '.js'}))
		.pipe(concat('libraries.min.js'))
		.pipe(uglify())
		.pipe(filesize())
		.pipe(gulp.dest('dist/assets/js'))
		.on('error', function(err){
			console.log(err.message);
		});
});

gulp.task('js', function(){
	gulp.src([
		'src/js/script.js',
		'src/js/app/app.js',
		'src/js/app/config.js',
		'src/js/app/**/*.js'
	])
		.pipe(changed('dist/assets/js', {extension: '.js'}))
		.pipe(ngAnnotate())
		.pipe(uglify())
		.pipe(concat('script.min.js'))
		.pipe(filesize())
		.pipe(gulp.dest('dist/assets/js'))
		.on('error', function(err){
			console.log(err.message);
		});
});

gulp.task('server', function(){
	//atualiza o navegador a cada alteracao
	browserSync.init(['dist/**'], {
		port: 8080,
		proxy: 'http://localhost/'+directoryProject
	});
});

gulp.task('watch', function(){
	var html = gulp.watch(['src/**/*.html', 'src/email.php'], ['html']);
	var images = gulp.watch(['src/images/**', 'src/videos/**'], ['media']);
	var css = gulp.watch(['src/scss/**'], ['css']);
	var js = gulp.watch(['src/js/**'], ['js']);

	html.on('change', function(file){
		console.log('Event type: ' + file.type);
		console.log('Event path: ' + file.path);
	});
	images.on('change', function(file){
		console.log('Event type: ' + file.type);
		console.log('Event path: ' + file.path);
	});
	css.on('change', function(file){
		console.log('Event type: ' + file.type);
		console.log('Event path: ' + file.path);
	});
	js.on('change', function(file){
		console.log('Event type: ' + file.type);
		console.log('Event path: ' + file.path);
	});
});

// DEFAULT TASK
gulp.task('default', ['server', 'fonts', 'html', 'media', 'css', 'library', 'js', 'watch']);