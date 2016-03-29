module.exports = function (grunt) {
    grunt.initConfig({


      //jade
      // jade: {
      //     compile: {
      //         options: {
      //             client: false,
      //             pretty: true
      //         },
      //         files: [ {
      //           cwd: 'views/htmls',
      //           src: '*.jade',
      //           dest: 'views/',
      //           expand: true,
      //           ext: 'main.html'
      //         } ]
      //     }
      // },

      jade: {
          compile: {
            options: {
              data: {
                debug: false
              }
            },
            files: {
              "views/main.html": ["views/htmls/*.jade"]
            }
          }
        },

      //watch
        watch: {
          css: {
            files: ['views/sass/*.scss','views/sass/**/*.scss'],
            tasks: ['sass']
           },
           html: {
             files: ['views/htmls/main.jade'],
             tasks: ['jade']
         }
       },
      //sass
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
      //  browserSync
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
    grunt.loadNpmTasks('grunt-contrib-jade');

    // define default task
    grunt.registerTask('default', ['browserSync', 'watch' ,'jade']);
};
