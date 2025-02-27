import gsap from './node_modules/gsap';
import * as THREE from './node_modules/three';


// Configuração da cena
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Configuração da grade
const rows = 10;
const cols = 10;
const quadSize = 1;
const margin = 0.1;
const group = new THREE.Group();

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        const geometry = new THREE.PlaneGeometry(quadSize, quadSize);
        const material = new THREE.MeshBasicMaterial({
            color: new THREE.Color(0, 0, 0), // Preto
            transparent: true,
            opacity: Math.random(), // Opacidade inicial aleatória
        });
        
        const plane = new THREE.Mesh(geometry, material);
        plane.position.set(
            (j - cols / 2) * (quadSize + margin), 
            (i - rows / 2) * (quadSize + margin),
            0
        );
        
        group.add(plane);

        // Animação da dissolução
        gsap.to(material, {
            opacity: 0,
            duration: 2 + Math.random() * 2, // Duração aleatória
            delay: Math.random() * 2, // Começa em tempos diferentes
            ease: "power2.out"
        });
    }
}

scene.add(group);

// Loop de renderização
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

// Ajuste do tamanho da tela ao redimensionar
window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
