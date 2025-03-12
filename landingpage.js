/* ============ ENTRADA============ */

// document.addEventListener("DOMContentLoaded", function () {
//   const entradaSite = document.getElementById("entrada-site");
//   const conteudoSite = document.getElementById("conteudo-site");

//   // Inicia a animação após 0.5s
//   setTimeout(() => {
//     entradaSite.classList.add("fade-out");
    
//     // Remove completamente a entrada após 3s
//     setTimeout(() => {
//       entradaSite.style.display = "none";
//       conteudoSite.classList.add("fade-in");
//     }, 5000); // Tempo total = 0.5s + 3s

//   }, 500);
// });


/* ============ SKILLS (MOVIMENTAÇAO)============ */

// Função para verificar se o elemento está visível
function isElementVisible(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight / 1.3) && // Verifica se o elemento está próximo ao topo da tela
    rect.bottom >= 0 // Verifica se o elemento ainda está na tela
  );
}

// Função para ativar a animação quando o elemento estiver visível
function handleScroll() {
  // const skillsDescricao = document.querySelector(".skills-descricao");
  // if (skillsDescricao && isElementVisible(skillsDescricao)) {
  //   skillsDescricao.classList.add("visible");
  // }
  const elements = document.querySelectorAll(".sobre-mim-descricao, .divisao-sobre-mim, .sobre-mim-link, .skills-descricao");
  elements.forEach((element) => {
      if (isElementVisible(element)) {
          element.classList.add("visible");
      }
  });
}

// Adiciona o evento de scroll para verificar a visibilidade
document.addEventListener("scroll", handleScroll);

// Verifica a visibilidade ao carregar a página
handleScroll();

/* ============ HEADER MENUS SCROLL DOWN============ */
const sectionOffsets = {
  "skills": 50,
  "trabalhos": 140,
  "sobre-mim": 100,
  "contato": 50,
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
// Seleciona todas as abas
const abas = document.querySelectorAll('.aba');

// Adiciona evento de clique para cada aba
abas.forEach(aba => {
  const conteudo = aba.querySelector('.aba-conteudo'); // Encontra o conteúdo da aba
  const fecharBotao = aba.querySelector('.fechar-aba'); // Encontra o botão de fechar

  // Quando a aba é clicada
  aba.addEventListener('click', () => {
    // Fecha todas as outras abas
    abas.forEach(outraAba => {
      if (outraAba !== aba) {
        outraAba.classList.remove('expandida');
      }
    });

    // Alterna o estado 'expandida' da aba clicada
    aba.classList.toggle('expandida');
  });

  // Quando o botão de fechar é clicado
  fecharBotao.addEventListener('click', (event) => {
    event.stopPropagation(); // Impede que o clique no botão afete a aba
    aba.classList.remove('expandida'); // Fecha a aba
  });
});

// Fecha a aba ativa ao clicar fora dela
document.addEventListener('click', (event) => {
  const isClickInside = Array.from(abas).some(aba => aba.contains(event.target));
  if (!isClickInside) {
    abas.forEach(aba => {
      aba.classList.remove('expandida');
    });
  }
});

/* ============ CARDS SKILLS ============ */



/* ============ TRABALHOS REALIZADOS ============ */

const setaClique = document.querySelector(".seta");
const card2 = document.getElementById("card2");

setaClique.addEventListener("click", () => {
  card2.classList.toggle("active");
});

/* ============ PORTFOLIO FOTOGRAFIA ============ */

// document.addEventListener("DOMContentLoaded", function () {
//   const img = document.querySelector("#portfolio-fotografia img");
//   const h3 = document.querySelector("#portfolio-fotografia h3");

//   img.addEventListener("mouseenter", () => {
//     h3.classList.add("ativo");
//   });

//   img.addEventListener("mouseleave", () => {
//     h3.classList.remove("ativo");
//   });
// });

// document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault();

//     const targetElement = document.querySelector(this.getAttribute("href"));

//     window.scrollTo({
//       top: targetElement.offsetTop,
//       behavior: "smooth",
//     });
//   });
// });
// ====================HEADER HAMBURGUER===============

// Seleciona o ícone do hamburguer e o menu
const hamburguer = document.querySelector('.header-hamburguer');
const menu = document.querySelector('.header-menu');

// Adiciona um evento de clique ao hamburguer
hamburguer.addEventListener('click', () => {
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});
// ====================skills cards===============
// Seleciona todos os cards
// Seleciona todos os cards
const skillsCards = document.querySelectorAll('.skills-card');

// Adiciona evento de clique para cada card
skillsCards.forEach(card => {
  const closeButton = card.querySelector('.fechar-card'); // Encontra o botão de fechamento

  // Quando o card é clicado
  card.addEventListener('click', (event) => {
    event.stopPropagation(); // Impede que o clique no card afete o documento

    // Verifica se o card já está ativo
    const isAlreadyActive = card.classList.contains('ativo');

    // Fecha todos os outros cards
    skillsCards.forEach(otherCard => {
      if (otherCard !== card) {
        otherCard.classList.remove('ativo');
      }
    });

    // Se o card já estiver ativo, não faz nada (permite que o usuário clique novamente para fechar)
    if (!isAlreadyActive) {
      card.classList.add('ativo'); // Ativa o card clicado
    }
  });

  // Quando o botão de fechamento é clicado
  closeButton.addEventListener('click', (event) => {
    event.stopPropagation(); // Impede que o clique no botão afete o card
    card.classList.remove('ativo'); // Remove a classe 'ativo'
  });
});

// Fecha o card ativo ao clicar fora dele
document.addEventListener('click', () => {
  skillsCards.forEach(card => {
    if (card.classList.contains('ativo')) {
      card.classList.remove('ativo'); // Fecha o card ativo
    }
  });
});