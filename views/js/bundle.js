var $ = require("jquery");

$(document).ready(function(){

 var	$window = $(window);
      $body = $('body');

      // Disable animations/transitions until the page has loaded.
                  $body.addClass('is-loading');
                   console.log('ok');
                   $window.on('load', function() {
                                     window.setTimeout(function() {
                                            console.log('ok01');
                                           $body.removeClass('is-loading');
                                     }, 1000);
                               });
});
