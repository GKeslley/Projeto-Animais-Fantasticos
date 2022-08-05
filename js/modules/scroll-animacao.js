export default function initAnimacao() {
  const sections = document.querySelectorAll("[data-anime='scroll']");

  const windowMetade = window.innerHeight * 0.6;

  function animationScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top - windowMetade;
      if (sectionTop < 0) {
        section.classList.add("scrollAtivo");
      } else if (section.classList.contains("scrollAtivo")) {
        section.classList.remove("scrollAtivo");
      }
    });
  }

  if (sections.length) {
    animationScroll();

    window.addEventListener("scroll", animationScroll);
  }
}
