
/* ============ HEADER MENUS SCROLL DOWN============ */

const sectionOffsets = {
  "skills": 50,
  "trabalhos": 90,
  "contato": 50,
};

document.querySelectorAll(".header-menu li").forEach((item) => {
  item.addEventListener("click", function () {
    // Obtém o valor do atributo data-section
    let sectionId = this.getAttribute("data-section");
    let targetSection = document.getElementById(sectionId);
    console.log("Section ID:", sectionId);
    console.log("Target Section:", targetSection);
    if (targetSection) {
      // Obtém o offset ajustado ou usa 80 como padrão
      let offset = targetSection.offsetTop - (sectionOffsets[sectionId] || 20);

      // Scroll suave até a seção
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    } else {
      console.error(`Seção com ID "${sectionId}" não encontrada.`);
    }
  });
});
/* ============ SKILLS (MOVIMENTAÇAO/ANIMACOES) ============ */

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
  const elements = document.querySelectorAll(".sobre-mim-descricao, .divisao-sobre-mim, .sobre-mim-link, .skills-descricao, .abas-container ");
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

/* ============ SKILLS -- ABA/PROJETOS  ============ */

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

// ====================SKILLS CARDS =====================

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


/* ============ TRABALHOS REALIZADOS ============ */
const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const toggleButton = document.getElementById('toggleCards');

const cards = [card1, card2];
let currentCardIndex = 0;

function toggleCards() {
  cards[currentCardIndex].classList.remove('active');

  // Atualiza o índice para o próximo card
  currentCardIndex = (currentCardIndex + 1) % cards.length;

  // Adiciona a classe 'active' ao próximo card (inicia fade-in)
  cards[currentCardIndex].classList.add('active');

  // Gira a seta
  // toggleButton.classList.toggle('virada');
}

// Adiciona o evento de clique ao botão (seta)
toggleButton.addEventListener('click', toggleCards);

// Inicializa o primeiro card como visível
card1.classList.add('active');

// ====================HEADER HAMBURGUER===============

// Seleciona o ícone do hamburguer e o menu
const hamburguer = document.querySelector('.header-hamburguer');
const menu = document.querySelector('.header-menu');

// Adiciona um evento de clique ao hamburguer
hamburguer.addEventListener('click', () => {
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
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

/* ============ ENTRADA============ */


