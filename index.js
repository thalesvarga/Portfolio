import { dataBaseProjetos } from "./dataBase.js";

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
  const homeConteudo = document.querySelector(
    '.conteudo-item[data-conteudo="home"]'
  );

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

window.addEventListener("load", ativarMenu);

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

const modal = document.querySelector(".modal");
const modalTitulo = document.querySelector(".modal-titulo");
const modalDescricao = document.querySelector(".modal-descricao");
const modalRepositorio = document.querySelector(".modal-repositorio");
const modalSite = document.querySelector(".modal-site");
const modalVideo = document.querySelector(".modal-video");

const linkProjetoVariados = document.querySelectorAll(".projetos-variados a");
const linkProjetoDestaques = document.querySelectorAll(".projetos-destaques a");

const todosLinks = [...linkProjetoVariados, ...linkProjetoDestaques];

todosLinks.forEach((link) => {
  link.addEventListener("click", function (evento) {
    evento.preventDefault();
    const id = this.getAttribute("data-id");
    const projeto = dataBaseProjetos.find((projeto) => projeto.id === id);

    if (projeto) {
      modalTitulo.textContent = projeto.titulo;
      modalDescricao.innerHTML = projeto.descricao;
      modalRepositorio.href = projeto.repositorio;
      modalVideo.href = projeto.videoSrc;
      modalSite.href = projeto.site;
      modal.style.display = "flex";

      setTimeout(() => {
        modal.classList.add("active");
      }, 10);
    } else {
      console.error("Projeto não encontrado para o ID:", id);
    }
  });
});

document.addEventListener("click", (evento) => {
  if (modal.classList.contains("active") && !modal.contains(evento.target)) {
    // Fecha o modal
    modal.classList.remove("active");
    setTimeout(() => {
      modal.style.display = "none";
    }, 100);
  }
});
