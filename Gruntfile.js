module.exports = function(grunt){
    // Project configuration.

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
            dist: {
                files: {
                    '<%= pkg.name %>.js': ['main.js'],
                }
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= pkg.version %> (<%= grunt.template.today("yyyy-mm-dd") %>) */\n'
            },
            build: {
                src: '<%= pkg.name %>.js',
                dest: '<%= pkg.name %>.min.js'
            }
        },
        jshint: {
            options: {
                asi: true,
            },
            all: ['Gruntfile.js', 'main.js', 'ndata.js', 'ctrynams.js', 'mapcode.js']
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['browserify', 'uglify']);
};
