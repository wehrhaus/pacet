define(['appData', 'file_upload'], function (appData, fileUpload) {
    'use strict';

    var is_image = function (val) {
        return(val.match(/\.(jpeg|jpg|gif|png)$/) !== null);
    };

    var user_upload = function (evt) {
        evt.preventDefault();
        fileUpload.clearFileInput(appData.fileUpload.browse, this);
        appData.fileUpload.browse.click();
        appData.fileUpload.browse.addEventListener('change', fileUpload.userUpload, false);
    };

    var path_upload = function () {
        appData.fileUpload.submit.className = appData.fileUpload.submit.className.replace(' hidden', ' show');
        appData.fileUpload.submit.addEventListener('click', function () {
            var img_src = appData.fileUpload.path.value;
            if (is_image(img_src)) {
                appData.fileUpload.warning.className = appData.fileUpload.warning.className.replace(' show', ' hidden');
                fileUpload.pathUpload(img_src);
            } else {
                appData.fileUpload.warning.className = appData.fileUpload.warning.className.replace(' hidden', ' show');
            }
        }, false);
    };

    return {

        init: function () {

            // reset the input fields on page load
            fileUpload.clearFileInput(appData.fileUpload.browse);
            fileUpload.clearPathInput(appData.fileUpload.path);

            // bind some events
            appData.fileUpload.browseSlug.addEventListener('click', user_upload, false);
            appData.fileUpload.path.addEventListener('click', path_upload, false);
            document.addEventListener('keypress', function (evt) {
                if ((evt.which === 13) && (appData.fileUpload.path === document.activeElement)) {
                    evt.preventDefault();
                    appData.fileUpload.submit.click();
                }
            }, false);

            return this;
        }
    };

});
