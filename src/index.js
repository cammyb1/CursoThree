import * as THREE from 'three';

const renderer = new THREE.WebGLRenderer();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
);

renderer.setSize(window.innerWidth, window.innerHeight);

const cube = new THREE.Mesh(
	new THREE.BoxGeometry(1, 1, 1),
	new THREE.MeshBasicMaterial({ color: 'red' })
);

camera.position.z = 5;

scene.add(cube);

const resize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
};

const loop = () => {
	renderer.render(scene, camera);

	cube.rotation.y += 0.01;
	cube.rotation.z += 0.01;

	requestAnimationFrame(loop);
};

loop();

window.addEventListener('resize', resize);
document.body.appendChild(renderer.domElement);
