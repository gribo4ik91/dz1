'use strict';

module.exports = function() {
    $.gulp.task('minify', function () {
        return $.gulp.src('build/*.html')
            .pipe($.gp.htmlmin({collapseWhitespace: true}))
            .pipe($.gulp.dest('build/assets'));
    })
};