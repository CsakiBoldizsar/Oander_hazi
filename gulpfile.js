var gulp = require('gulp');
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');
var rename = require("gulp-rename");
var concat = require('gulp-concat');

sass.compiler = require('node-sass');


gulp.task('sass', function () {
	return gulp.src('./sass/main.sass')
		.pipe(sass().on('error', sass.logError))
		.pipe(concat('main.css'))
		.pipe(gulp.dest('./css'));
});


gulp.task('css', async function () {
	gulp.src('./css/**/*.css')
		.pipe(uglifycss({
			"maxLineLen": 80,
			"uglyComments": true
		}))
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('./dist'));
});

gulp.task('run', gulp.series('sass', 'css'));

gulp.task('watch',  function () {
	gulp.watch('./sass/**/*.sass', gulp.series('sass'));
	gulp.watch('./css/**/*.css', gulp.series('css'));
});

gulp.task('default', gulp.series('run', 'watch'));