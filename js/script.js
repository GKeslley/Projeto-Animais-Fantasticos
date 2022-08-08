import ScrollSuave from "./modules/scroll-suave.js";
import initAnimacao from "./modules/scroll-animacao.js";
import Accordion from "./modules/accordion-animacao.js";
import Tabnav from "./modules/tab-nav.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initAnimaisFetch from "./modules/animais-fetch.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

initAnimacao();

const accordionList = new Accordion("[data-anime='accordion'] dt");
accordionList.init();

const tabNav = new Tabnav(
  "[data-tab='menu'] li",
  "[data-tab='content'] section"
);
tabNav.init();

initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initAnimaisFetch();
initFetchBitcoin();