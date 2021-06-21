const THREE = require('three')
const { OrbitControls } = require('three/examples/jsm/controls/OrbitControls')

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75, // FOV
  window.innerWidth / window.innerHeight, // Aspect Ratio
  0.1, // Frustrum near
  1000 // Frustrum far
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg")
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

{
  const loader = new THREE.TextureLoader();
  const texture = loader.load("../images/round_platform.jpg", () => {
    const rt = new THREE.WebGLCubeRenderTarget(texture.image.height);
    rt.fromEquirectangularTexture(renderer, texture);
    scene.background = rt.texture;
  });
}


const torus = new THREE.Mesh(
  new THREE.TorusGeometry(10, 3, 16, 100),
  new THREE.MeshStandardMaterial( { color: 0x888888 } )
)

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(20, 20, 20);

const ambientLight = new THREE.AmbientLight(0xffffff);

//const lightHelper = new THREE.PointLightHelper(pointLight);
//const gridHelper = new THREE.GridHelper(200, 50)

scene.add(pointLight, ambientLight);

//scene.add(lightHelper, gridHelper)

const controls = new OrbitControls(camera, renderer.domElement);

scene.add(torus);


function animate() {
  requestAnimationFrame(animate)

  torus.rotation.x += 0.001;
  torus.rotation.y += 0.005;

  controls.update();

  renderer.render(scene, camera);
}

animate();