$(document).ready(function() {

      //預設第一個按鈕
      var _dafault = 0,
            $main = $('.main'),
            $menu = $main.find('.menu');
      console.log('ok');

      $menu.click(function() {
            var $this = $(this);
            $this.addClass('.active');
      });
});
