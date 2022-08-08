export default class Tabnav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.ativo = "ativo";
  }

  ativarTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.ativo);
    });
    const direcao = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.ativo, direcao);
  }

  addTabNavEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        this.ativarTab(index);
      });
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.ativarTab(0);
      this.addTabNavEvent();
    }
  }
}
