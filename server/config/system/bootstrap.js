'use strict';

var fs = require('fs'),
    express = require('express'),
    appPath = process.cwd();

var mean = require('meanio');

module.exports = function(passport, db) {

    function bootstrapDependencies() {
        // Register app dependency
        mean.register('app', function() {
            return app;
        });
    }

    // Express settings
    var app = express();
    require(appPath + '/server/config/express')(app, passport, db);

    return app;
};
