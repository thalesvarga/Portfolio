import { dataBaseProjetos } from "/js/dataBase.js";

const modal = document.querySelector(".modal");
const fecharModal = document.querySelector(".fechar");

document.addEventListener("click", (evento) => {
  const elemento = evento.target;
  const card = elemento.closest(".card-projetos");

  if (!card) return;

  const projeto = dataBaseProjetos.find((p) => p.id == Number(card.id));
  console.log(projeto);

  if (!projeto) return alert("Projeto em desenvolvimento");

  if (
    elemento.classList.contains("opcoes-ver-mais") ||
    elemento.classList.contains("imagem-projeto") ||
    elemento.classList.contains("nome-do-projeto")
  ) {
    modal.querySelector(".modal-titulo").textContent = projeto.titulo;
    modal.querySelector(".modal-data").textContent = projeto.data;
    modal.querySelector(".modal-descricao").innerHTML = projeto.descricao;
    modal.querySelector(".modal-esquerda iframe").src = projeto.videoSrc;
    modal.querySelector(".modal-repositorio").href = projeto.repositorio;
    modal.querySelector(".modal-site").href = projeto.site;
    modal.style.display = "flex";
  }
});

fecharModal.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (evento) => {
  if (evento.target === modal) {
    modal.style.display = "none";
  }
});
