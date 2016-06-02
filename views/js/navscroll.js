$(window).on('scroll', function() {

      var navHeight = $(window).height() - 10;
      var distance = $(window).scrollTop();
      console.log('distance');
      if ( distance > navHeight ) {
             $('.nav').addClass('on');

      } else {
             $('.nav').removeClass('on');
      }
console.log('section01');


$('.width_all').on('mouseenter', function() {
      $(this).children('.submenu').show();
});
$('.width_all').on('mouseleave', function() {
      $(this).children('.submenu').hide();
});
});





// $(".link").on("mouseenter", function() {
//   $(this).children(".submenu").show();
//   $(this).addClass("highlight");
// });
//
// $(".link").on("mouseleave", function() {
//   $(this).children(".submenu").hide();
//   $(this).removeClass("highlight");
// });
