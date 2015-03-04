
// ---------- IMPORT
var gulp = require('gulp');
var concat = require('gulp-concat');
var plumber   = require('gulp-plumber');
var webserver = require('gulp-webserver');
var opn       = require('opn');
var livereload = require('gulp-livereload');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');

// --------- VARIABLES
var server = {
    host: 'localhost',
    port: '8001'
}


// --------- WATCHER
gulp.task('watch-js', function () {
    gulp.watch(['app/*.module.js','app/*/*.module.js','app/*/*/*.module.js','app/*/*/*.js','app/*/*.js'], ['compile-js']);
});

gulp.task('watch-sass',function(){
    gulp.watch(['app/scss/*/*.SCSS'], ['compile-sass']);
})

// --------- BUILDER
gulp.task('compile-js', function () {
    gulp.src(['!app/*/*.test.js','!app/*/*/*.test.js','app/*.module.js','app/*/*.module.js','app/*/*/*.module.js','app/*/*/*.js','app/*/*.js'])
        .pipe(concat('app/app.js'))
        .pipe(gulp.dest('.'));

    console.log('building JS');
});

gulp.task('compile-sass', function () {
    gulp.src('app/scss/app.SCSS')
        .pipe(sass())
        .pipe(gulp.dest('app/asset/css'));
});


// --------- SERVER LOCAL
gulp.task('webserver', function() {
    gulp.src( '.' )
        .pipe(webserver({
            host:             server.host,
            port:             server.port,
            livereload:       true,
            directoryListing: false
        }));
});

gulp.task('open-browser', function() {
    opn( 'http://' + server.host + ':' + server.port + 'app' );
});
// -------- DEFAULT
gulp.task('default', ['compile-js','compile-sass','watch-js', 'watch-sass', 'webserver', 'open-browser']);