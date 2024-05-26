// Initialize Three.js scene
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add light to the scene
var light = new THREE.AmbientLight(0xffffff, 1);
scene.add(light);

// Load FBX model
var loader = new THREE.FBXLoader();
loader.load('fbx/forjaydn.fbx', function (fbx) {
    scene.add(fbx);
});

// Position the camera
camera.position.z = 5;

// Render loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
