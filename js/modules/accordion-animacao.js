export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = "ativo";
  }

  addAcorddionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener("click", () => this.accordionToggle(item));
    });
  }

  accordionToggle(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  init() {
    if (this.accordionList.length) {
      this.accordionToggle(this.accordionList[0]);
      this.addAcorddionEvent();
    }
    return this;
  }
}
