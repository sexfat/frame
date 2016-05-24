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

      //basic
      TweenMax.fromTo(".leftimg", 1, {
            x: 0,
            opacity: 0,

      }, {
            x: 50,
            opacity: 1,
            delay: 0.5
      });

      TweenMax.fromTo('.rightimg', 1, {
            x: 0,
            opacity: 0,

      }, {
            x: -50,
            opacity: 1,
            delay: 0.5
      });
      TweenMax.fromTo('.textcenter', 1, {
            y: 0,
            opacity: 0,

      }, {
            y: 10,
            opacity: 1,
            delay: 1.5
      });


      // init controller
      var controller = new ScrollMagic.Controller();
      var frame = new TimelineMax({
            pause: true
      });
      frame.add("start") // add timeline label


      // tween1
      var tween1 = frame.to([".rect", ".rect_02"], 1, {
            rotation: 180,
            y: 100,
            x: 100,
            opacity: 1,
            ease: Quad.easeOut,
      }, "start");


      // create a scene
      var scene = new ScrollMagic.Scene({
                  triggerElement: "#trigger1",
                  duration: 300,
                  offset: -50,
                  reverse: true
            })
            .setTween(tween1)
            .addTo(controller);




      // second scene view

      var tween2 = frame.fromTo(".areatext", 1, {
            opacity: 0,
            y: 0,
      }, {
            opacity: 1,
            y: '80px',
            ease: Power2.EaseInOut
      }, "start");


      // 用 變數設定tween
      var tween3 = frame.fromTo(".areatext2", 1, {
            opacity: 0,
            y: 0,
      }, {
            opacity: 1,
            y: '60px',
            ease: Power2.EaseInOut
      }, "start");

      var scene2 = new ScrollMagic.Scene({
                  triggerElement: "#trigger2",
                  // duration: 150,
                  offset: 250,
                  //only run once
                  reverse: true
            })
            // 設定變數
            .setTween(tween2)
            .addTo(controller);


      // three scene view


      var scene3 = new ScrollMagic.Scene({
                  triggerElement: "#trigger3",
                  duration: 210,
                  offset: 150,
                  //only run once
                  reverse: false
            })
            .setTween(TweenMax.staggerTo(".robot", 1, {
                  opacity: 1,
                  x: 100,
                  transform: 'scale(.5)',
                  yoyo: true,
                  ease: Power2.easeOut
            }))
            .addTo(controller);


      //four scene view 用 css3 的方式

      var scene4 = new ScrollMagic.Scene({
                  triggerElement: "#trigger4",
                  offset: 150,
                  //only run once
                  reverse: true
            })
            //設定css
            .setClassToggle('#cssanimation', 'active')
            .addTo(controller);


      //five scene  用 timelineMax 的方式



      var tween = new TimelineMax({
            pause: true
      });





      var scene5 = new ScrollMagic.Scene({
            triggerElement: "#trigger5",
            duration: 210,
            offset: 150,
            //only run once
            reverse: false
      })




         tl.add(tween05);




            .addTo(controller);




});









// remove class binding from the scene without reset


// var camera, scene, renderer, particles, particle, material, particleCount, points, texture;
// var xSpeed, ySpeed;
// xSpeed = 0.0005;
// ySpeed = 0.001;
// var winWidth, winHeight;
// winWidth = window.innerWidth;
// winHeight = window.innerHeight;
//
// init();
// animate();
//
// function init() {
//       scene = new THREE.Scene();
//       scene.fog = new THREE.FogExp2('#000', 0.001);
//
//       camera = new THREE.PerspectiveCamera(75, winWidth / winHeight, 1, 1000);
//       camera.position.z = 500;
//
//       // particle
//       // transparentとblendingたぶん効いてない
//       material = new THREE.PointsMaterial({
//             color: 0xffffff,
//             size: 3,
//             transparent: true,
//             blending: THREE.AdditiveBlending
//       });
//
//       particleCount = 15000;
//       particles = new THREE.Geometry();
//
//       for (var i = 0; i < particleCount; i++) {
//             var px = Math.random() * 2000 - 1000;
//             var py = Math.random() * 2000 - 1000;
//             var pz = Math.random() * 2000 - 1000;
//             particle = new THREE.Vector3(px, py, pz);
//             particle.velocity = new THREE.Vector3(0, Math.random(), 0);
//             particles.vertices.push(particle);
//       }
//
//       points = new THREE.Points(particles, material);
//       points.sortParticles = true;
//       scene.add(points);
//
//       renderer = new THREE.WebGLRenderer({
//             antialias: true
//       });
//       renderer.setSize(winWidth, winHeight);
//       renderer.setClearColor('#000', 1);
//       document.getElementById('canvas').appendChild(renderer.domElement);
// }
//
// function animate() {
//       requestAnimationFrame(animate);
//
//       scene.rotation. += xSpeed;
//
//       // パーティクル上下移動
//       var i = particleCount;
//       while (i--) {
//             var particle = particles.vertices[i];
//
//             // y
//             if (particle.y > 1000) {
//                   particle.y = -1000;
//                   particle.velocity.y = Math.random();
//             }
//             particle.velocity.y += Math.random() * ySpeed;
//
//             particle.add(particle.velocity);
//       }
//       points.geometry.verticesNeedUpdate = true;
//
//       render();
// }
//
// function render() {
//       camera.lookAt(scene.position);
//       renderer.render(scene, camera);
// }
