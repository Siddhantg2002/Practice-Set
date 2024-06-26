const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
    // Specify the source files to compile
    return src('sass/*.scss')  // Make sure the source file path is correct
        .pipe(sass().on('error', sass.logError))  // Compile the Sass and handle any errors
        .pipe(dest('public'));  // Specify the destination directory for the compiled CSS file
}

function watchTask() {
    // Set up a file watcher for changes in the specified files
    watch(['sass/*.scss'], buildStyles);
}

// Export the default task that runs the buildStyles function and watchTask in series
exports.default = series(buildStyles, watchTask);
