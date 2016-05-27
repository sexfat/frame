// ----------------------
// tween effect code
// ----------------------
//ease: Elastic.easeOut / Power0.easeOut / Back.easeOut / Bounce.easeOut / Rough.easeOut / SlowMo / Stepped.easeOut / Circ.easeOut / Expo.easeOut / Sine.easeOut
//ease: easeIn  / easeInOut / easeOut



// ----------------------
//  boswerify plugin code
// ----------------------
//  var $ = require("jquery");


// -----------------
//  path
// -----------------
// require("../libs/gsap/src/minified/TweenMax.min.js");
// require("../libs/scrollmagic/scrollmagic/minified/ScrollMagic.min.js");
// require("../libs/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js");
// require("../libs/scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js");


$(function() {

      TweenMax.staggerTo(".title", 1, {
            x: 15,
            opacity: 1,
            //smooth animation
            lazy: true
      }, 0.8);

      TweenMax.staggerTo(".learn", 1, {
            x: -40,
            opacity: 1,
            //smooth animation
            lazy: true
      }, 0.8);



});
