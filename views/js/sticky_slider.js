jQuery(document).ready(function($) {
      $('.sidebar').wrap('<div class="wrap"></div>'); // wrap it up
      $('<div class="sticky-stop"></div>').insertAfter('.candy-wrapper'); // stop it!
      var sidebarheight, mainheight;
      var cushion = 0; // cushion for spapping to the bottom
      function measureheight() {
            sidebarheight = $('.sidebar').outerHeight() + cushion;
            mainheight = $('.main').outerHeight();
            if (mainheight - sidebarheight > 0) {
                  $('.candy-wrapper').waypoint(function(direction) {
                        $(this).toggleClass('sticky', direction === 'down');
                  });
                  $('.sticky-stop').waypoint(function(direction) {
                        $('.candy-wrapper').toggleClass('at-bottom', direction === 'down');
                  }, {
                        offset: function() {
                              return sidebarheight;
                        }
                  })
            } else {
                  $().waypoints('destroy');
            }
      };
      measureheight();
      $(window).resize(measureheight);
});
