var gulp = require('gulp');
var less = require('gulp-less');

/* Task to compile less */
gulp.task('compile-less', function() {
    return gulp.src('./src/style.less')
        .pipe(less())
        .pipe(gulp.dest('./public/dist/'));
});
