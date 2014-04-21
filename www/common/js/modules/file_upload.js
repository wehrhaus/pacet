define(['jquery', 'appData', 'bootstrap'], function ($, appData, bootstrap) {
    'use strict';

    return {

        clearFileInput: function (original, listener) {
            var slug = document.createElement('input');
            original.removeEventListener('click', listener, false);
            original.removeEventListener('change', listener, false);
            slug.type = 'file';
            slug.name = original.name;
            slug.className = original.className;
            slug.accept = original.accept;
            original.parentNode.replaceChild(slug, original);
            appData.fileUpload.browse = slug;
            return this;
        },

        clearPathInput: function (field) {
            var currVal = field.value;
            if (currVal !== field.placeholder) {
                field.value = '';
            }
            return this;
        },

        pathUpload: function (data) {
            console.log(data);
            return this;
        },

        userUpload: function (data) {
            var file = data.target.files;
            console.log(file);
            return this;
        }

    };

});
