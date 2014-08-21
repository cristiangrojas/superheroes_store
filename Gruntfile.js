module.exports = function(grunt){
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    django_compressor: {
      css: {
        options: {
          startTag: '<!--STYLES-->',
          endTag: '<!--STYLES END-->',
          excludedDirs: [
            'node_modules/'
          ]
        }
      },
      js: {
        options: {
          startTag: '<!--SCRIPTS-->',
          endTag: '<!--SCRIPTS END-->',
          excludedDirs: [
            'node_modules/'
          ],
          generateJsSourceMaps: true,
          amazonS3BucketURL: ''
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-django-compressor');
};