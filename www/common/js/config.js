'use strict';

require.config({
    baseUrl: 'common/js/modules/',
    enforceDefine: true,
    paths: {
        'bootstrap': '../../bootstrap/js/bootstrap.min',
        'jquery': '../libs/jquery'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'jQuery'
        },
        jQuery: { exports: 'jquery' }
    },
    waitSeconds: 15,
    urlArgs: 'bust=' + (new Date()).getTime()

});

define(['domReady', '../main'], function (domReady, main) {
    domReady(function () {
        return main.init();
    });
});
