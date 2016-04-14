var path = require('path'),
	gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	filesize = require('gulp-filesize'),
	sass = require('gulp-sass'),
	mobilizer = require('gulp-mobilizer'),
	autoprefixer = require('gulp-autoprefixer'),
	minifyCSS = require('gulp-minify-css'),
	minifyHTML = require('gulp-minify-html'),
	ngAnnotate = require('gulp-ng-annotate'),
	browserSync = require('browser-sync'),
	watch = require('gulp-watch'),
	changed = require('gulp-changed'),
	directoryProject = 'tender/www/';

gulp.task('html', function(){
	// move html to different platforms
	var opts = {comments: false, spare: true};

	gulp.src(['src/**/*.html'])
		.pipe(changed('www', {extension: '.html'}))
		.pipe(minifyHTML(opts))
		.pipe(gulp.dest('www'))
		.on('error', function(err){
			console.log(err.message);
		});
});

gulp.task('templatesHtml', function(){
	// move html to different platforms
	var opts = {comments: true, spare: true};

	gulp.src(['src/templates/*.html'])
		.pipe(changed(DirectoryDist+'templates', {extension: '.html'}))
		.pipe(minifyHTML(opts))
		.pipe(gulp.dest(DirectoryDist+'templates/templates'))
		.on('error', function(err){
			console.log(err.message);
		});
});

gulp.task('fonts', function(){
	gulp.src([
			'components/components-font-awesome/fonts/**',
			'src/lib/ionic/fonts/**',
			'src/fonts/**'
		])
		.pipe(changed('www/assets/fonts'))
		.pipe(gulp.dest('www/assets/fonts'))
		.on('error', function(err){
			console.log(err.message);
		});
});

gulp.task('media', function(){
	gulp.src([
			'src/images/**'
		])
		.pipe(changed('www/assets/images'))
		.pipe(gulp.dest('www/assets/images'))
		.on('error', function(err){
			console.log(err.message);
		});

	gulp.src([
			'src/videos/**'
		])
		.pipe(changed('www/assets/videos'))
		.pipe(gulp.dest('www/assets/videos'))
		.on('error', function(err){
			console.log(err.message);
		});
});

gulp.task('css', function(){
	gulp.src([
			'components/components-font-awesome/scss/font-awesome.scss',
			'components/angular-material/angular-material.scss',
			'src/lib/ionic/scss/ionic.scss',
			'src/css/**/*.css',
			'src/scss/style.scss'
		])
		.pipe(changed('www/assets/css', {extension: '.css'}))
		.pipe(sass())
		.pipe(autoprefixer('last 3 version'))
		.pipe(minifyCSS())
		.pipe(concat('style.min.css'))
		.pipe(filesize())
		.pipe(gulp.dest('www/assets/css'))
		.on('error', function(err){
			console.log(err.message);
		});
});

gulp.task('library', function(){
	gulp.src([
			'src/lib/ionic/js/ionic.bundle.min.js',
			'components/jquery/dist/jquery.min.js',
			'components/angular-cookies/angular-cookies.min.js',
			'components/angular-aria/angular-aria.min.js',
			'components/angular-touch/angular-touch.min.js',
			'components/angular-locale-pt-br/angular-locale_pt-br.js',
			'components/angular-material/angular-material.min.js',
			'src/js/vendor/**/*.js'
		])
		.pipe(changed('www/assets/js', {extension: '.js'}))
		.pipe(concat('libraries.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('www/assets/js'))
		.pipe(filesize())
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
		.pipe(changed('www/assets/js', {extension: '.js'}))
		.pipe(ngAnnotate())
		.pipe(uglify())
		.pipe(concat('script.min.js'))
		.pipe(gulp.dest('www/assets/js'))
		.pipe(filesize())
		.on('error', function(err){
			console.log(err.message);
		});
});

gulp.task('watch', function(){
	var html = gulp.watch(['src/**/*.html'], ['html']);
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
gulp.task('default', ['fonts', 'html', 'media', 'css', 'library', 'js', 'watch']);