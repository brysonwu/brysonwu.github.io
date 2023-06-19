import './app.css'
import App from './App.svelte'
import * as THREE from 'three'

const app = new App({
  target: document.getElementById('app'),
});

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75, window.innerWidth / window.innerHeight, 1, 500
);
camera.position.set( 0, 0, 50 );
camera.lookAt( 0, 0, 0 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 10, 10, 10 );
const material = new THREE.MeshBasicMaterial( { color: 0x00FF00 } );
const cube = new THREE.Mesh( geometry, material );
cube.translateY(-5)
scene.add( cube );

const lineMaterial = new THREE.LineBasicMaterial( { color: 0x0000FF } );
const linePoints = [];
linePoints.push( new THREE.Vector3( -10, 0, 0 ) );
linePoints.push( new THREE.Vector3( 0, 10, 0 ) );
linePoints.push( new THREE.Vector3( 10, 0, 0 ) );
const lineGeometry = new THREE.BufferGeometry().setFromPoints( linePoints );
const line = new THREE.Line( lineGeometry, lineMaterial );
scene.add( line );

function animate() {
  requestAnimationFrame( animate );

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render( scene, camera );
}

animate();

export default app
