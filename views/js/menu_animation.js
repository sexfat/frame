$(document).ready(function() {

      //變數，預設第幾個按鈕
      var _default = 0;
      var classes = 'nav__link__current';

      //選擇第幾個元素為預設
      $(".main").find(".nav_link").eq(_default).addClass("nav__link__current");
      console.log('find');

      //click event
      $('.menu').on('click', '.nav_link', function(event) {
      //以下順序很重要，先移除再增加
          var num = 1 ;
            $('.nav_link').removeClass(classes);
            $(this).addClass(classes);
            //刪除預設事件
            event.preventDefault();
            console.log(num);
      });
});

//以下事件也可以成功，蠻好奇的是 .on事件   為何都可以做到呢？？？
// $(document).ready(function() {
//
//       //變數
//       var _default = 0;
//       var classes = 'nav__link__current';
//
//       //選擇第幾個元素為預設
//       $(".main").find(".nav_link").eq(_default).addClass("nav__link__current");
//
//
//       //click event
//       $('.nav_link').on('click', function(event) {
//       //以下順序很重要，先移除再增加
//             $('.nav_link').removeClass(classes);
//             $(this).addClass(classes);
//             //刪除掉預設事件
//             event.preventDefault();
//             console.log('ok');
//       });
//});


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
