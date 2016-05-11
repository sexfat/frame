//ease: Elastic.easeOut  /   Linear.easeIn  /Linear.easeNone /Bounce
$(function() {


      // init controller
      var controller = new ScrollMagic.Controller();

      // create a scene
      var scene = new ScrollMagic.Scene({
                  triggerElement: "#trigger1",
                  duration: 500,
                  offset: -250,
                  // reverse:false

            })
            .setTween(TweenMax.staggerTo([".rect", ".rect_02"], 1, {
                  rotation: 180,
                  y: 100,
                  x: 100,
                  opacity: 1,
                  ease:  Quad.easeOut,
            }, 0.5))




      .addTo(controller);

// second scene view


      var scene = new ScrollMagic.Scene({
            triggerElement: "#trigger2",
            duration: 300,
            offset: 250,
            //only run once
            // reverse:false
      })
      .setTween(TweenMax.staggerTo(".areatext", 1, {
            opacity: 1,
            y: 10,
            ease: Power2.easeInOut
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
