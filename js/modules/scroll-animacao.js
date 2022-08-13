export default class AnimacaoScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;
    this.animationScroll = this.animationScroll.bind(this);
  }

  animationScroll() {
    this.sections.forEach((section) => {
      const sectionTop =
        section.getBoundingClientRect().top - this.windowMetade;
      if (sectionTop < 0) {
        section.classList.add("scrollAtivo");
      } else if (section.classList.contains("scrollAtivo")) {
        section.classList.remove("scrollAtivo");
      }
    });
  }

  init() {
    this.animationScroll();
    window.addEventListener("scroll", this.animationScroll);
  }
}
