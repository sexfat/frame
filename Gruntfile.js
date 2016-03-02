module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            files: ['views/sass/*.scss','views/sass/**/*.scss'],
            tasks: ['sass']
        },


        sass: {
            build: {
                options: {
                    sourcemap: 'none'
                     },
            files: [{
                     expand: true,
                     cwd: 'views/sass/',
                     src: ['*.scss'],
                     dest: 'views/css/',
                     ext: '.css'
                      }]
                   }
          },

        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'views/css/*.css',
                        'views/*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                      baseDir: './views',
                      index: 'index.html'
                    }
                }
            }
        }
    });

    // load npm tasks

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    // define default task
    grunt.registerTask('default', ['browserSync', 'watch']);
};
