const dataBaseProjetos = [
  {
    titulo: "Atividade Cronometrada",
    data: "14 de Novembro de 2024",
    descricao: `Atividade Cronometrada é uma aplicação desenvolvida para melhorar o rendimento na realização de tarefas do dia a dia.<br><br>

A aplicação utiliza diversas técnicas em JavaScript, HTML5 e CSS3, incluindo:<br><br>

            •Uso do objeto Date para realizar a contagem do tempo;<br>
            •Armazenamento dos dados inseridos pelo usuário no LocalStorage do navegador, garantindo que as informações sejam preservadas mesmo após fechar a página;<br>
            •Criação dinâmica de elementos HTML diretamente com JavaScript;<br>
            •Responsividade, com suporte para versões Desktop e Mobile.<br>`,

    videoSrc: "https://player.vimeo.com/video/1047611576?share=copy",
    repositorio: "https://github.com/thalesvarga/Atividade-Cronometrada",
    site: "https://atividade-cronometrada.vercel.app",
  },

  {
    titulo: "Memoteca",
    data: "10 de Outubro de 2024",
    descricao: `A Memoteca é um aplicativo organizador de pensamentos e frases que permite cadastrar, listar, editar, deletar, filtrar e favoritar pensamentos, incluindo informações como conteúdo, autoria e data.<br><br>

O foco principal do projeto foi a utilização de HTML5,JavaScript,CSS3, onde desenvolvi e apliquei diversas técnicas, incluindo:<br>

                •Uso de Regex<br>
                •Estilização em CSS3 e Flexbox;<br>
                •Requisições de API Rest local, utilizando fetch e axios para ver as diferenças no codigo.;<br>
                •Utilização de Git e Node para fazer o deploy no Vercel diretamente do terminal.<br>
                •Manipulação do DOM para interatividade.,<br><br>

PS: Por enquanto o projeto só irá funcionar quando o servidor estiver rodando. Logo será implementado a continuação dele.`,

    videoSrc: "https://player.vimeo.com/video/1054249966?h=b2f88e3c13",
    repositorio: "https://github.com/thalesvarga/Memoteca",
    site: "https://memoteca-phi.vercel.app",
  },
  {
    titulo: "Code Connect",
    data: "14 de Novembro de 2024",
    descricao: `Code Connect é uma aplicação que simula uma rede social para divulgação de projetos de desenvolvedores. Inicialmente concebida como um exercício de manipulação de LocalStorage e persistência de dados, evoluiu para incluir funcionalidades extras, como: upload de imagens para perfis, criação de projetos personalizados pelos usuários, sistema de comentários nos projetos e muito mais.<br><br>

A aplicação foi desenvolvida utilizando técnicas avançadas em JavaScript, HTML5 e CSS3, incluindo:<br><br>

            •Uso de módulos (import e export) para organização e reutilização de arquivos e funções;<br>
            •Armazenamento de dados no LocalStorage para manter informações como atividades e cadastros de login, mesmo após o fechamento da página;<br>
            •Criação dinâmica de elementos HTML por meio de JavaScript;<br>
            •Design responsivo com suporte para versões Desktop, Mobile e Tablet;<br>
            •Utilização do método filter para manipulação e recuperação de informações no LocalStorage;<br>
            •Manipulação eficiente do DOM para interatividade e atualização da interface.`,

    videoSrc: "https://player.vimeo.com/1054249966/b2f88e3c13",
    repositorio: "https://github.com/thalesvarga/CodeConnect",
    site: "https://code-connect-olive.vercel.app/sair.html",
  },
  {
    titulo: "AluraBooks - Mobile First",
    data: "1 de Junho de 2024",
    descricao: `AluraBooks é uma aplicação que simula um e-commerce para venda de livros.<br><br>

O foco principal do projeto foi a utilização de HTML5 e CSS3, onde desenvolvi e apliquei diversas técnicas, incluindo:<br>

                •Criação de um menu hambúrguer interativo;<br>
                •Estilização em CSS3 e Flexbox;<br>
                •Design responsivo com suporte para versões Desktop, Mobile e Tablet;<br>
                •Manipulação do DOM para interatividade.`,

    videoSrc: "https://player.vimeo.com/video/1047598278?share=copy",
    repositorio: "https://github.com/thalesvarga/AluraBooks--MobileFirst",
    site: "#",
  },
  {
    titulo: "Lista de Compra",
    data: "05 de Maio de 2024",
    descricao: `Essa aplicação simula uma lista de compra.<br><br>
  
  O foco principal era desenvolver técnicas de criações de elementos e desenvolver um projeto em modulos, além de:<br>
  
                •Manipular LocalStorage e lidar com persistências;<br>
                •Estilização em CSS3 e Flexbox;<br>
                •Design responsivo com suporte para versões Desktop, Mobile e Tablet;<br>
                •Manipulação do DOM para interatividade.<br>
                •Criação de elemento dinâmicos.
                `,
  
    videoSrc: "https://player.vimeo.com/video/1054295289?h=b0e33755b9",
    repositorio: "https://github.com/thalesvarga/Lista-de-Compra-Modulos-",
    site: "https://lista-de-compra-modulos.vercel.app",
  },
  {
    titulo: "Vai Corinthians",
    data: "Em andamento!",
    descricao: `Vai Corinthians é uma aplicação de cadastro de todos os jogadores e jogadoras que passaram pelo Corinthians.<br><br>
  
  O intuito desse projeto é desenvolver habilidades e técnicas no React.<br>
  
                •O uso de useState e useRef;<br>
                •Estruturando e organizando o projeto em Front-End e Back-End;<br>
                •Uso de JSON, Yarn e Git;<br>
                •Manipulação do DOM através do React.<br>
                •Criação de componentes.
                `,
  
    videoSrc: "./assets/logo.png",
    repositorio: "https://github.com/thalesvarga/vai-corinthians",
    site: "https://vai-corinthians-rho.vercel.app/",
  },
];

const modal = document.querySelector(".modal");
const fecharModal = document.querySelector(".modal .fechar");
const cardDosProjetos = document.querySelectorAll(".card-projetos");
const imagemProjetoClicavel = document.querySelectorAll(".imagem-projeto");
const linkVerMais = document.querySelectorAll(".opcoes-ver-mais");
const tituloDoProjetoClicavel = document.querySelectorAll(".nome-do-projeto");

const abrirModal = (projetoInfo) => {
  modal.querySelector(".modal-titulo").innerHTML = projetoInfo.titulo;
  modal.querySelector(".modal-data").innerHTML = projetoInfo.data;
  modal.querySelector(".modal-descricao").innerHTML = projetoInfo.descricao;
  modal.querySelector(".modal-esquerda iframe").src = projetoInfo.videoSrc;

  const linkRepositorio = modal.querySelector(".modal-repositorio");
  const linkSite = modal.querySelector(".modal-site");

  linkRepositorio.href = projetoInfo.repositorio;
  linkSite.href = projetoInfo.site;

  modal.style.display = "flex";
};

const fecharModalX = () => {
  modal.style.display = "none";
};

function responsivoMobile() {
  return window.innerWidth <= 767;
}

linkVerMais.forEach((link, index) => {
  link.addEventListener("click", (evento) => {
    evento.preventDefault();
    if (dataBaseProjetos[index]) {
      abrirModal(dataBaseProjetos[index]);
    } else {
      alert("Esse projeto ainda está em desenvolvimento");
    }
  });
});
if (responsivoMobile()) {
  console.log("mobile ativo");
  imagemProjetoClicavel.forEach((imagem, index) => {
    imagem.addEventListener("click", (evento) => {
      evento.preventDefault();
      if (dataBaseProjetos[index]) {
        abrirModal(dataBaseProjetos[index]);
      } else {
        alert("Esse projeto ainda está em desenvolvimento");
      }
    });
  });

  tituloDoProjetoClicavel.forEach((titulo, index) => {
    titulo.addEventListener("click", (evento) => {
      evento.preventDefault();
      if (dataBaseProjetos[index]) {
        abrirModal(dataBaseProjetos[index]);
      } else {
        alert("Esse projeto ainda está em desenvolvimento");
      }
    });
  });
}

fecharModal.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (evento) => {
  if (evento.target === modal) {
    modal.style.display = "none";
  }
});
