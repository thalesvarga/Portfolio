
/* ============ HEADER MENUS SCROLL DOWN============ */


const sectionOffsets = {
  "experiencia": 50,
  "trabalhos": 90,
  "contato": 50,
};

document.querySelectorAll(".header-menu li").forEach((item) => {
  item.addEventListener("click", function () {
 
    let sectionId = this.getAttribute("data-section");
    let targetSection = document.getElementById(sectionId);
    console.log("Section ID:", sectionId);
    console.log("Target Section:", targetSection);
    if (targetSection) {
    
      let offset = targetSection.offsetTop - (sectionOffsets[sectionId] || 20);

  
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    } else {
      console.error(`Seção com ID "${sectionId}" não encontrada.`);
    }
  });
});

/* ============ HEADER MENUS MUDANCA DE COR============ */
document.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  const sections = document.querySelectorAll("section");


  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100; 
    const sectionHeight = section.offsetHeight;
    const scrollPosition = window.scrollY;

 
    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
 
      if (section.classList.contains("fundo-claro")) {
        header.classList.add("menu-claro"); 
      } else {
        header.classList.remove("menu-claro"); 
      }
    }
  });
});

window.addEventListener("load", () => {
  document.body.classList.add("animate");
});


// =========MODAL=========

const modal = document.getElementById('ux-ui');
const abrirModalLink = document.getElementById('abrirModal');
const btnFecharModal = document.querySelector('.fechar-modal');


abrirModalLink.addEventListener('click', (event) => {
  event.preventDefault(); 
  modal.style.display = 'block';
  setTimeout(() => {
    modal.classList.add('active'); 
  }, 20); 
});


btnFecharModal.addEventListener('click', () => {
  modal.classList.remove('active'); 
  setTimeout(() => {
    modal.style.display = 'none'; 
  }, 1000); 
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.classList.remove('active');
    setTimeout(() => {
      modal.style.display = 'none';
    }, 1000);
  }
});
// =========MODAL-expandir imagem=========
const imagensClicaveis = document.querySelectorAll('.clicavel');
const overlay = document.getElementById('imagem-expandida-overlay');
const imagemExpandida = document.getElementById('imagem-expandida');
const fecharImagem = document.querySelector('.fechar-imagem');


imagensClicaveis.forEach(imagem => {
  imagem.addEventListener('click', () => {
    const src = imagem.getAttribute('data-src') || imagem.src; 
    imagemExpandida.src = src; 
    overlay.style.display = 'block'; 
  });
});


fecharImagem.addEventListener('click', () => {
  overlay.style.display = 'none';
});


overlay.addEventListener('click', (event) => {
  if (event.target === overlay) {
    overlay.style.display = 'none';
  }
});