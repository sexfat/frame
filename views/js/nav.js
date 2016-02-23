$("a#toggle").on('click',function(e){
  $('body').toggleClass('js-open');
  $('nav').toggleClass('js-open');
  //這不太懂
  e.preventDefault();
});
