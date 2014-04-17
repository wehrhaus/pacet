'use strict';

require.config({

    deps: [''],
    enforceDefine: true,
    paths: {
        'bootstrap': '../bootstrap/js/bootstrap.min',
        'jquery': 'libs/jquery'
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

define(['modules/domReady', 'main'], function (domReady, main) {
    domReady(function () {
        return main.init();
    });
});
