(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// ----------------------
// tween effect code
// ----------------------
//ease: Elastic.easeOut / Power0.easeOut / Back.easeOut / Bounce.easeOut / Rough.easeOut / SlowMo / Stepped.easeOut / Circ.easeOut / Expo.easeOut / Sine.easeOut
//ease: easeIn  / easeInOut / easeOut
// http://greensock.com/ease-visualizer


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

      
      // init controller
      var controller = new ScrollMagic.Controller();
      var frame = new TimelineMax({
            pause: true
      });
      frame.add("start") // add timeline label

      // tween1
      var tween1 = frame.staggerTo([".rect", ".rect_02"], 2, {
            rotation: 180,
            y: 100,
            x: 100,
            opacity: 1,
            ease: Quad.easeOut,
      }, "start");

      // create a scene
      var scene1 = new ScrollMagic.Scene({
                  triggerElement: "#trigger1",
                  // duration: 300,
                  offset: -250,
                  reverse: false
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

},{}]},{},[1]);
