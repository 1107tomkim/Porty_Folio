import './style.css'

// importing everything from JS THREE
import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { MeshBasicMaterial } from 'three';

// Creating a canvas for us to see
const scene =  new THREE.Scene();

// Creating a camera so that we can see, the camera captures everything from lense(hence 0.1) to all the way out (1000)
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Makes everything come true
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio( window.devicePixelRatio);
renderer.setSize( window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render( scene, camera);

const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 )
const material = new THREE.MeshStandardMaterial( { color: 0xFF6347, wireframe: true } );
const torus = new THREE.Mesh( geometry, material);

scene.add(torus)


// pointlight is a light in a specific area
const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(5, 5, 5)

// Ambientlight allows the light to be lit around the whole room
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight)

// PointLightHelper is a built in helper that shows the position and direction of light source.
const lightHelper = new THREE.PointLightHelper(pointLight);
scene.add(lightHelper)

const controls =  new OrbitControls(camera, renderer.domElement);


function addStar() {
  const geometry = new THREE.SphereGeometry(0.25 , 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff })
  const star = new THREE.Mesh( geometry, material);

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread( 100 ));

  star.position.set(x, y, z);
  scene.add(star)
}

Array(200).fill().forEach(addStar)

const spaceTexture = new THREE.TextureLoader().load('space.jpg');
scene.background = spaceTexture;

function animate() {
  requestAnimationFrame( animate );

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  controls.update();

  renderer.render( scene, camera);
}

animate()



function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.position.y = t * -0.0002;

}

document.body.onscroll = moveCamera
