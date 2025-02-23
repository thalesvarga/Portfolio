import { dataBaseProjetos } from "/js/dataBase.js";

const cardProjetos = document.querySelector(".projetos");

function ordenarProjetos(dataBaseProjetos) {
  const emAndamento = dataBaseProjetos.filter(
    (projeto) => projeto === "Em andamento!"
  );
  const comDatas = dataBaseProjetos.filter(
    (projeto) => projeto !== "Em andamento!"
  );

  comDatas.sort((a, b) => {
    // Extrai dia, mês e ano das strings
    const [diaA, mesA, anoA] = a.split("/").map(Number);
    const [diaB, mesB, anoB] = b.split("/").map(Number);

    // Cria objetos Date usando Date.UTC
    const dataA = new Date (anoA, mesA - 1, diaA); // Mês é 0-based no JavaScript
    const dataB = new Date(anoB, mesB - 1, diaB);

    return dataA - dataB; // Ordena do mais antigo para o mais recente
  });

  comDatas.reverse(); // Inverte para ter as datas mais recentes primeiro

  return [...emAndamento, ...comDatas];
}
const datasProjetos = dataBaseProjetos.map((projeto) => projeto.data);

// Ordena as datas
const datasOrdenadas = ordenarProjetos(datasProjetos);

// Reordena os projetos com base nas datas ordenadas
const projetosOrdenados = datasOrdenadas.map((data) => {
  return dataBaseProjetos.find((projeto) => projeto.data === data);
});

projetosOrdenados.forEach((projeto) => {
  cardProjetos.innerHTML += `
      <div class="card-projetos" id="${projeto.id}">
      <img class="imagem-projeto" src="${projeto.imagem}" alt="${projeto.titulo}">
      <h3 class="nome-do-projeto">${projeto.titulo}</h3>
    
    </div>
    </div>
  `;
});

