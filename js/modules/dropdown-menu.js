import outsideClick from "./outsideclick.js";

export default function initDropdownMenu() {
  const dropDownMenus = document.querySelectorAll("[data-dropdown]");

  function clickDropdown(event) {
    event.preventDefault();
    this.classList.add("active");
    outsideClick(this, ["touchstart", "click"], () => {
      this.classList.remove("active");
    });
  }

  dropDownMenus.forEach((menu) => {
    ["touchstart", "click"].forEach((userEvent) => {
      menu.addEventListener(userEvent, clickDropdown);
    });
  });
}
