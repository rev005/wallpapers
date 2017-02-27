module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),


        serve: {
            options: {
                port: 9000
            }
        }
    });

    // // Load the plugin that provides the "uglify" task.
    // grunt.loadNpmTasks('grunt-contrib-uglify');

    // // Default task(s).
    // grunt.registerTask('default', ['uglify']);

    grunt.loadNpmTasks('grunt-serve');
    grunt.registerTask('default', ['serve']);
};
