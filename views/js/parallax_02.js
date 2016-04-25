//ease: Elastic.easeOut  /   Linear.easeIn  /Linear.easeNone /Bounce

// init controller
var controller = new ScrollMagic.Controller();

// create a scene
var scene = new ScrollMagic.Scene({
            triggerElement: "#trigger1",
            duration: 500 // the scene should last for a scroll distance of 100px
            //   offset: 150        // start this scene after scrolling for 50px

      })

      // .setPin("#trigger1") // pins the element for the the scene's duration
      // pins the element for the the scene's duration
      .setTween(TweenMax.to([".rect", ".rect_02"], 1, {
            rotation: 180,
            y: 100
      }, 0.5))
      console.log('ok');
      .addTo(controller); // assign the scene to the controller









// $(window).on('mousemove.parallax', function(event) {


// new ScrollMagic.Scene({
//         triggerElement: "",
//         duration: 140,
//         offset: 40
//     })
//     .setPin("#my-sticky-element") // pins the element for the the scene's duration
//
//     .addTo(controller);
// console.log('ok');







// var controller = new ScrollMagic.Controller();
//
//       var scene = new ScrollMagic.Scene({
//             triggerElement: "#trigger1",
//             duration: 400,
//           //   offset: -100
//         })
//    .setTween(TweenMax.staggerTo([".rect", ".rect_02"], 1, {
//           rotation: 180,
//           y: 100
//    }, 0.5))
//    .addTo(controller)
//       // })
//       // new ScrollMagic.Scene({
//       //         triggerElement: "#trigger1",
//


// });

// TweenMax.staggerFrom( objects ,  1.5 , {left:"100px", opacity:0 , top:"100px", delay:1 , ease: Strong.easeOut});


// $(document).ready(function(){
// });


// $('#toggle.buttons a.has-code').click(function() {
//       });


//
// $('#aaa').click(function){
//
//
//
//
// });
