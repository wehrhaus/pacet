'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // stylus options
    var pkg = grunt.file.readJSON('package.json'),
        pkgName = pkg.name,
        stylusOptions = {
            'compress': false,
            'linenos': false, // set to 'true' WITH QUOTES to turn line numbers on
            'firebug': false,
            'paths': [ 'www/common/stylus' ],
            'include css': true,
            'use': [ require('nib') ],
            'import': [ 'nib' ]
        };

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            options: {
                nospawn: false
            },
            stylus: {
                files: [ 'www/common/stylus/**/*.styl'],
                tasks: [ 'stylus', 'csslint' ]
            },
            jshint: {
                files: [
                    'gruntfile.js',
                    'www/common/js/{,*/}*.js',
                    'www/common/js/modules/{,*/}*.js',
                    '!www/common/js/libs/*'
                ],
                tasks: [ 'jshint' ]
            },
            cssjs: {
                files: [
                    '**/*.*html',
                    'www/common/stylus/**/*.styl',
                    'gruntfile.js',
                    'www/common/js/**/*.js'
                ],
                tasks: [ 'stylus', 'csslint', 'jshint' ],
                options: { livereload: true }
            }
        },

        stylus: {
            compile: {
                options: stylusOptions,
                files: {
                    'www/common/css/app.css': 'www/common/stylus/app.styl'
                }
            }
        },

        csslint: {
            options: {
                csslintrc: '.csslintrc'
            },
            src: [ 'www/common/css/app.css' ]
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'gruntfile.js',
                'www/common/js/{,*/}*.js',
                'www/common/js/modules/{,*/}*.js',
                '!www/common/js/libs/*'
            ]
        }

    });

    /*
     * Default task override
     * Use one of the tasks below
     */
    grunt.registerTask('default', function () {
        console.log('\nPlease run one of the following tasks:\n');
        console.log('//***** grunt dev *****//\nWatch Stylus and JavaScript Files for changes\nOn stylus changes, compile to css then run csslint\nOn javascript changes, run jshint\nOn any changes, including html and shtml, reload the page on save\n');
        console.log('//***** grunt stylusdev *****//\nWatch Stylus Files for Changes\nOn stylus changes, compile to css then run csslint\n');
        console.log('//***** grunt lintcss *****//\nRun csslint on css files\n');
        console.log('//***** grunt jsdev *****//\nRun jshint on javascript files\n');
    });

    /*
     * Watch Stylus and JavaScript Files for changes
     * - On stylus changes, compile to css then run csslint
     * - On javascript changes, run jshint
     */
    grunt.registerTask('dev', function () {
        console.log('for ' + pkgName + '.');
        grunt.task.run([ 'watch:cssjs' ]);
    });

    /*
     * Watch Stylus Files for Changes
     * - On stylus changes, compile to css then run csslint
     */
    grunt.registerTask('stylusdev', function () {
        console.log('for ' + pkgName + '.');
        grunt.task.run([ 'watch:stylus' ]);
    });

    /*
     * Run csslint on css files
     */
    grunt.registerTask('lintcss', function () {
        console.log('for ' + pkgName + '.');
        grunt.task.run([ 'csslint' ]);
    });

    /*
     * Run jshint on javascript files
     */
    grunt.registerTask('jsdev', function () {
        console.log('for ' + pkgName + '.');
        grunt.task.run([ 'watch:jshint' ]);
    });

};
