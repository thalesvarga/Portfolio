const linkHome = document.querySelectorAll(
  ".imagem-perfil, .titulo-nome, .subtitulo-area"
);

linkHome.forEach((link) => {
  link.addEventListener("click", () => {
    window.location.href = "index.html";
  });
});
