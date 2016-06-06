$(document).ready(function() {
      //視窗位移
      $(window).scroll(function() {
            var offset_height = 400;
            var distance = $(window).scrollTop();

            if (distance > offset_height) {
                  $('.gototop').addClass('on');
            } else {
                  $('.gototop').removeClass('on');
            }
            console.log('go');
      });
      // 位移到最上方
      $('.gototop').on('click', function(event) {
            event.preventDefault();
            $('body,html').animate({
                  scrollTop: 0,
            }, 300);
            // console.log('distance');
            console.log('ok');
      });
});
