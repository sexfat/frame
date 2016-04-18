module.exports = function(grunt) {
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
        files: ['views/sass/*.scss', 'views/sass/**/*.scss'],
        tasks: ['sass']
      },
      html: {
        files: ['views/htmls/main.jade'],
        tasks: ['jade']
      },
      js: {
        files: ['views/js/*.js']
      }
    },
    //sass
    sass: {
      build: {
        options: {
          sourcemap: true
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
    //jshint
    jshint: {
      all: {
        src: ['views/libs/*.js', 'views/js/*.js'],
      },
    },

    //  browserSync
    browserSync: {
      dev: {
        bsFiles: {
          src: [
            'views/css/*.css',
            'views/*.html',
            'views/js/*.js'
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
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // define default task
  grunt.registerTask('default', ['browserSync', 'watch', 'jade', 'jshint']);
};
