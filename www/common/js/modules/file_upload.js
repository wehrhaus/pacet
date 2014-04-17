define(['jquery', 'appData', 'bootstrap'], function ($, appData, bootstrap) {
    'use strict';

    var readFile = function (fileData) {

        var reader = new FileReader();
        reader.onload = (function(fileItem) {
            return function(e) {
                console.info('src: ', e.target.result);
                console.info('name: ', escape(fileItem.name));
            };
        })(fileData);
        // Read in the image file as a data URL.
        reader.readAsDataURL(fileData);
    };

    return function (data) {
        var i, f, files = data.target.files;

        for(i = 0; i < files.length; i += 1) {
            f = files[i];
            if (f.type.match('image.*')) {
                console.log(f);
                readFile(f);
            }
        }

    };

});
