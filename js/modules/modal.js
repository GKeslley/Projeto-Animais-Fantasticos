export default class Modal {
  constructor(buttonAbrir, container, buttonFechar) {
    this.botaoAbrir = document.querySelector(buttonAbrir);
    this.modalContainer = document.querySelector(container);
    this.botaoFechar = document.querySelector(buttonFechar);

    // bind this ao callback
    // para fazer referencia
    // ao objeto da classe

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  toggleModal() {
    this.modalContainer.classList.toggle("ativo");
  }

  cliqueForaModal(event) {
    if (event.target === this.modalContainer) {
      this.toggleModal();
    }
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  addEventModal() {
    this.botaoAbrir.addEventListener("click", this.eventToggleModal);
    this.botaoFechar.addEventListener("click", this.eventToggleModal);
    this.modalContainer.addEventListener("click", this.cliqueForaModal);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.modalContainer) {
      this.addEventModal();
    }
    return this;
  }
}
