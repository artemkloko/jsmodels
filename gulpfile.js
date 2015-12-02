var gulp = require('gulp'),
    karma = require('karma');

gulp.task('default', function (done) {
    var KarmaServer = karma.Server;
    var karmaServer = new KarmaServer({ configFile: __dirname + '/karma.config.js' }, done);
    karmaServer.start();
});