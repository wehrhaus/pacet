define(['appData', 'file_upload'], function (appData, fileUpload) {
    'use strict';

    var file_upload = function () {
        return appData.fileUpload.browse.addEventListener('change', fileUpload, false);
    };

    return {

        init: function () {
            // TODO: Perform some resets here
            file_upload();
            return console.log('Initialized');
        }
    };

});
