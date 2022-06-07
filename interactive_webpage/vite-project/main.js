import './style.css'

// importing everything from JS THREE
import * as THREE from 'three';

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
const material = new THREE.MeshStandardMaterial( { color: 0xFF6347 } );
const torus = new THREE.Mesh( geometry, material);

scene.add(torus)

const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(20, 20, 20)

scene.add(pointLight)


function animate() {
  requestAnimationFrame( animate );

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  renderer.render( scene, camera);
}

animate()