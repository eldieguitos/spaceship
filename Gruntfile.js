/* global module*/
'use strict';
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jasmine:{
      src: './src/spaceship.js',
      options:{
        specs: './specs/spaceshipSpecs.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  //grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  // Default task(s).
  grunt.registerTask('default', ['jasmine']);
};