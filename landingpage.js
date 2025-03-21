
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

