define([], function () {
    'use strict';

    return {
        fileUpload: {
            upload      : document.querySelector('.upload'),
            browse      : document.querySelector('.img_upload_browse'),
            browseSlug  : document.querySelector('.img_upload_browse_slug'),
            path        : document.querySelector('.img_upload_path'),
            progress    : document.querySelector('.img_upload_progress'),
            progressBar : document.querySelector('.progress-bar'),
            warning     : document.querySelector('.img_upload_warning'),
            thumbnail   : document.querySelector('.img_upload_thumb'),
            submit      : document.querySelector('.img_upload_submit')
        }
    };

});
