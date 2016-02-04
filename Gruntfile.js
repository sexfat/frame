module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            files: ['sass/*.scss','sass/**/*.scss'],
            tasks: ['sass']
        },

        compass: {
    			dist: {
    				options: {
    					src: 'sass/main.scss',
    					dest: 'views/css/main.css'
    				}
    			}
    		},
        sass: {
            dev: {
                files: {
                    'views/css/main.css': 'sass/main.scss',
                    'views/css/animation.css': 'sass/animation.scss'
                }
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
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    // define default task
    grunt.registerTask('default', ['browserSync', 'watch']);
};
