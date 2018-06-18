var gulp = require('gulp');
var mocha = require('gulp-mocha');
var jshint = require('gulp-jshint');

gulp.task('default', ['test']);

gulp.task('test', function() {
	return gulp.src('test/*.js', {read: false})
		.pipe(mocha());
});

gulp.task('lint', function() {
	return gulp.src(['src/**/*.js','test/**/*.js'])
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(jshint.reporter('fail'));
});
