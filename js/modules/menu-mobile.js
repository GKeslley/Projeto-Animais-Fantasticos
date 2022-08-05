import outsideClick from "./outsideclick.js";

export default function initMenuMobile() {
  const button = document.querySelector('[data-menu="button"]');
  const list = document.querySelector('[data-menu="list"]');
  const eventos = ["click", "touchstart"];

  function clickButton() {
    list.classList.add("activeMenu");
    button.classList.add("activeMenu");
    outsideClick(list, eventos, () => {
      list.classList.remove("activeMenu");
      button.classList.remove("activeMenu");
    });
  }

  if (button) {
    eventos.forEach((userEvent) => {
      button.addEventListener(userEvent, clickButton);
    });
  }
}
