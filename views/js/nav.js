$("a#toggle").on('click', function(e) {
      $('body').toggleClass('js-open');
      $('nav').toggleClass('js-open');
      //這不太懂
      e.preventDefault();
});


$(window).on('scroll', function() {

      var navHeight = $(window).height() - 100;
      var distance = $(window).scrollTop();
      if ( distance > navHeight ) {
             $('.nav').addClass('on');
      } else() {
             $('.nav').removeClass('on');
      }

});
