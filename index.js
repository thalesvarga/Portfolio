import { dataBaseProjetos } from "./dataBase.js";

// Função para ativar o menu
function ativarMenu() {
  const menuItens = document.querySelectorAll(".menu-item");
  const conteudoItens = document.querySelectorAll(".conteudo-item");
  let emTransicao = false;
  const tempoTransicao = 1500;

  function mostrarNovoConteudo(item) {
    const target = item.getAttribute("data-item");

    conteudoItens.forEach((conteudo) => {
      if (conteudo.getAttribute("data-conteudo") === target) {
        conteudo.classList.add("active");
      } else {
        conteudo.classList.remove("active");
      }
    });

    emTransicao = false;
  }

  const homeItem = document.querySelector('.menu-item[data-item="home"]');
  const homeConteudo = document.querySelector('.conteudo-item[data-conteudo="home"]');

  if (homeItem && homeConteudo) {
    homeItem.classList.add("active");
    homeConteudo.classList.add("active");
  }

  menuItens.forEach((item) => {
    item.addEventListener("click", () => {
      if (emTransicao) return;
      emTransicao = true;

      menuItens.forEach((menuItem) => menuItem.classList.remove("active"));
      item.classList.add("active");

      const activeConteudo = document.querySelector(".conteudo-item.active");
      if (activeConteudo) {
        activeConteudo.classList.remove("active");
      }

      setTimeout(() => {
        mostrarNovoConteudo(item);
      }, tempoTransicao);
    });
  });
}

// Inicialização do menu
window.addEventListener("load", ativarMenu);

// Animação de entrada do site
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    document.getElementById("entrada-site").style.opacity = "0";
    setTimeout(() => {
      document.getElementById("entrada-site").style.display = "none";
      document.getElementById("three-container").style.display = "none";
      document.querySelector(".assunto-menu").classList.remove("oculto");
      ativarMenu();
    }, 2500);
  }, 3500);
});

// Modal e movimento da div #projetos
const modal = document.querySelector(".modal");
const modalTitulo = document.querySelector(".modal-titulo");
const modalDescricao = document.querySelector(".modal-descricao");
const modalRepositorio = document.querySelector(".modal-repositorio");
const modalSite = document.querySelector(".modal-site");
const modalVideo = document.querySelector(".modal-video")

const linkProjetoVariados = document.querySelectorAll(".projetos-variados a");
const linkProjetoDestaques = document.querySelectorAll(".projetos-destaques a");

const todosLinks = [...linkProjetoVariados, ...linkProjetoDestaques];

const projetosContainer = document.getElementById("projetos");

todosLinks.forEach((link) => {
  link.addEventListener("click", function (evento) {
    evento.preventDefault();
    const id = this.getAttribute("data-id");
    const projeto = dataBaseProjetos.find((projeto) => projeto.id === id);

    if (projeto) {

      modalTitulo.textContent = projeto.titulo;
      modalDescricao.innerHTML = projeto.descricao;
      modalRepositorio.href = projeto.repositorio;
      modalVideo.href=projeto.videoSrc
      modalSite.href = projeto.site;

      if (window.innerWidth <= 1119) {
        // Ajuste para telas menores
        projetosContainer.style.transform = "translate(0, 0)"; // Remove o transform
        modal.style.width = "90%"; // Ocupa 90% da largura da tela
        modal.style.maxWidth = "80%"; // Define uma largura máxima
        modal.style.margin = "0"; // Centraliza o modal
      } else {
        // Comportamento padrão para telas maiores
        projetosContainer.style.transition = "transform 1s ease-in-out";
        projetosContainer.style.transform = "translate(calc(-50% - 85%), calc(50% - 18%)";
      }

      modal.style.display = "flex";
      setTimeout(() => {
        modal.classList.add("active");
      }, 10);
    } else {
      console.error("Projeto não encontrado para o ID:", id);
    }
  });
});

// Fecha o modal ao clicar fora dele
document.addEventListener("click", (evento) => {
  if (modal.classList.contains("active") && !modal.contains(evento.target)) {
    // Fecha o modal
    modal.classList.remove("active");
    setTimeout(() => {
      modal.style.display = "none";
    }, 100);

    // Retorna a div #projetos para a posição inicial (sem transição)
    projetosContainer.style.transition = "none"; // Remove a transição
    projetosContainer.style.transform = "translate(0, 0)"; // Volta para a posição inicial
  }
});