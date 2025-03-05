/* ============ ENTRADA============ */

document.addEventListener("DOMContentLoaded", function () {
  const entradaSite = document.getElementById("entrada-site");
  const conteudoSite = document.getElementById("conteudo-site");

  // Inicia a animação após 0.5s
  setTimeout(() => {
    entradaSite.classList.add("fade-out");
    
    // Remove completamente a entrada após 3s
    setTimeout(() => {
      entradaSite.style.display = "none";
      conteudoSite.classList.add("fade-in");
    }, 5000); // Tempo total = 0.5s + 3s

  }, 500);
});


/* ============ HEADER MENUS SCROLL DOWN============ */
const sectionOffsets = {
  skills: 50,
  trabalhos: 80,
  "sobre-mim": 100,
  contato: 50,
};

document.querySelectorAll(".header-menu li").forEach((item) => {
  item.addEventListener("click", function () {
    // Converte o texto do menu para minúsculas e substitui espaços por hífens
    let sectionId = this.textContent.trim().toLowerCase().replace(/\s+/g, "-");
    let targetSection = document.getElementById(sectionId);

    if (targetSection) {
      let offset = targetSection.offsetTop - (sectionOffsets[sectionId] || 80);
      // Se não houver ajuste específico, usa 80 como padrão

      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    } else {
      console.error(`Seção com ID "${sectionId}" não encontrada.`);
    }
  });
});

/* ============ ABA/PROJETOS SKILLS ============ */

// Função para fechar a aba aberta e restaurar o título correspondente
function fecharAbaAberta() {
  const abaAberta = document.querySelector(".aba.expandida");
  if (abaAberta) {
    abaAberta.classList.remove("expandida");

    // Restaura o título correspondente à aba fechada
    const idAbaAberta = abaAberta.getAttribute("data-aba");
    const tituloAbaAberta = document.querySelector(
      `.abas-titulos h3[data-aba="${idAbaAberta}"]`
    );
    if (tituloAbaAberta) {
      tituloAbaAberta.style.display = "block";
    }
  }
}

// Adiciona evento de clique nas abas e links
document.querySelectorAll(".aba, .abas-links").forEach((elemento) => {
  elemento.addEventListener("click", (event) => {
    event.preventDefault();

    const idAba = elemento.getAttribute("data-aba");

    // Fecha a aba aberta anteriormente (se houver)
    fecharAbaAberta();

    // Oculta o título correspondente à nova aba
    const tituloCorrespondente = document.querySelector(
      `.abas-titulos h3[data-aba="${idAba}"]`
    );
    if (tituloCorrespondente) {
      tituloCorrespondente.style.display = "none";
    }

    // Abre a nova aba
    const abaCorrespondente = document.getElementById(idAba);
    if (abaCorrespondente) {
      abaCorrespondente.classList.add("expandida");
    }
  });
});

// Adiciona evento de clique no botão de fechar
document.querySelectorAll(".fechar-aba").forEach((botao) => {
  botao.addEventListener("click", (event) => {
    event.stopPropagation();
    fecharAbaAberta();
  });
});

/* ============ CARDS SKILLS ============ */

document.addEventListener("DOMContentLoaded", () => {
  const cards = {
    front: document.querySelector(".skills-front-end"),
    back: document.querySelector(".skills-back-end"),
    ux: document.querySelector(".skills-ux-ui"),
  };

  const arrows = {
    left: document.querySelector(".arrow-left"),
    right: document.querySelector(".arrow-right"),
  };

  let currentStep = 0;
  const maxStep = 3;

  const updateCards = () => {
    // Atualiza estado dos cards
    cards.front.classList.toggle("active", currentStep === 1); // Front-End completamente visível apenas no Passo 1
    cards.front.classList.toggle("invisible", currentStep >= 2); // Front-End invisível a partir do Passo 2
    cards.back.classList.toggle("expandida", currentStep >= 2); // Back-End expande a partir do Passo 2
    cards.ux.classList.toggle("expandida", currentStep >= 3); // UX/UI expande apenas no Passo 3

    // Atualiza estado das setas
    arrows.left.classList.toggle("inactive", currentStep === maxStep); // Desativa avançar no último passo
    arrows.right.classList.toggle("inactive", currentStep === 0); // Desativa voltar no primeiro passo

    // Pausa a animação ao interagir com as setas
    if (currentStep !== 0) {
      cards.front.classList.add("paused"); // Pausa a animação do card front-end
    } else {
      cards.front.classList.remove("paused"); // Volta a animação ao estado inicial
    }
  };

  // Seta da esquerda (avançar)
  arrows.left.addEventListener("click", () => {
    if (currentStep < maxStep) {
      currentStep++;
      updateCards();
    }
  });

  // Seta da direita (voltar)
  arrows.right.addEventListener("click", () => {
    if (currentStep > 0) {
      currentStep--;
      updateCards();
    }
  });

  // Estado inicial
  updateCards();
});

/* ============ TRABALHOS REALIZADOS ============ */

const setaClique = document.querySelector(".seta");
const card2 = document.getElementById("card2");

setaClique.addEventListener("click", () => {
  card2.classList.toggle("active");
});

/* ============ PORTFOLIO FOTOGRAFIA ============ */

document.addEventListener("DOMContentLoaded", function () {
  const img = document.querySelector("#portfolio-fotografia img");
  const h3 = document.querySelector("#portfolio-fotografia h3");

  img.addEventListener("mouseenter", () => {
    h3.classList.add("ativo");
  });

  img.addEventListener("mouseleave", () => {
    h3.classList.remove("ativo");
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetElement = document.querySelector(this.getAttribute("href"));

    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });
  });
});
