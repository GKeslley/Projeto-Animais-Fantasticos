export default function initModal() {
  const botaoAbrir = document.querySelector("[data-modal='abrir']");
  const modalContainer = document.querySelector("[data-modal='container']");
  const botaoFechar = document.querySelector('[data-modal="fechar"]');

  function toggleModal(event) {
    event.preventDefault();
    modalContainer.classList.toggle("ativo");
  }

  function cliqueForaModal(event) {
    if (event.target === this) {
      toggleModal(event);
    }
  }

  if (botaoAbrir && botaoFechar && modalContainer) {
    botaoAbrir.addEventListener("click", toggleModal);
    botaoFechar.addEventListener("click", toggleModal);
    modalContainer.addEventListener("click", cliqueForaModal);
  }
}
