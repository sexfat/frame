$(document).ready(function(){

  $('.boxgrid.captionfull').hover(function(){
    $(".cover", this).stop().animate({top:'160px'},{queue:false,duration:160});
  }, function() {
    $(".cover", this).stop().animate({top:'260px'},{queue:false,duration:160});
  });
  //Caption Sliding (Partially Hidden to Visible)
  $('.boxgrid.caption').hover(function(){
    $(".cover", this).stop().animate({top:'160px'},{queue:false,duration:160});
  }, function() {
    $(".cover", this).stop().animate({top:'220px'},{queue:false,duration:160});
  });
});
