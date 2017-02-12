'use strict';

module.exports = function() {


    $.gulp.task('uncss', function () {
        return $.gulp.src('source/style/test.css')
            .pipe($.gp.uncss({
                html: ['build/index.html']
            }))
            .pipe($.gulp.dest('build/assets/css'));
    })
};