$(document).ready(function() {
      var _default = 0;
      var classes = 'nav__link__current';
      $(".main").find(".nav_link").eq(_default).addClass("nav__link__current");
      $('.menu').on('click', '.nav_link', function(event) {
            $('.nav_link').removeClass(classes);
            $(this).addClass(classes);
            event.preventDefault();
            console.log('ok');
      });
});



// //預設第一個按鈕
// var _dafault = 0,
//       $main = $('.main'),
//       $menu = $main.find('.menu');
// console.log('ok');
//
// $menu.click(function() {
//       var $this = $(this);
//       $this.addClass('.active');
// var classes = 'nav__link__current';
// console.log('ok');
// $('.nav_link').on('click', '.nav__link__current', function(event) {
//
//       $('.nav_link').removeClass('nav__link__current')
//       $(this).addClass(classes);
//
//       event.preventDefault();
//
// });
// });
