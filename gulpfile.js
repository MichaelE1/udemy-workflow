const gulp = require('gulp');
const watch = require('gulp-watch');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssvars = require('postcss-simple-vars');
const nested = require('postcss-nested');
const cssImport = require('postcss-import');

gulp.task('default', () => {
    console.log('Yay');
});

gulp.task('html', () => {
    console.log('Imagine something useful for HTML here');
});

gulp.task('styles', () => {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
        .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', () => {
    watch('./app/index.html', { usePolling: true }, () => {
        gulp.start('html');
    });

    watch('./app/assets/styles/**/*.css', { usePolling: true }, () => {
        gulp.start('styles');
    });
});