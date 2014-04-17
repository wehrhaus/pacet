define([], function () {
    'use strict';

    return {
        fileUpload: {
            browse      : document.querySelector('.img_upload_browse'),
            path        : document.querySelector('.img_upload_path'),
            progress    : document.querySelector('.img_upload_progress'),
            progressBar : document.querySelector('.progress-bar'),
            thumbnail   : document.querySelector('.img_upload_thumb'),
            submit      : document.querySelector('.img_upload_submit')
        }
    };

});
