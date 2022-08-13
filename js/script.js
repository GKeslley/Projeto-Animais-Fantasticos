import ScrollSuave from "./modules/scroll-suave.js";
import AnimacaoScroll from "./modules/scroll-animacao.js";
import Accordion from "./modules/accordion-animacao.js";
import Tabnav from "./modules/tab-nav.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import fetchAnimais from "./modules/animais-fetch.js";
import fetchBitcoin from "./modules/fetch-bitcoin.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const animacaoScroll = new AnimacaoScroll("[data-anime='scroll']");
animacaoScroll.init();

const accordionList = new Accordion("[data-anime='accordion'] dt");
accordionList.init();

const tabNav = new Tabnav(
  "[data-tab='menu'] li",
  "[data-tab='content'] section"
);
tabNav.init();

const modal = new Modal(
  "[data-modal='abrir']",
  "[data-modal='container']",
  '[data-modal="fechar"]'
);

modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

initDropdownMenu();
initMenuMobile();
initFuncionamento();
fetchAnimais("../../animaisapi.json", ".numeros-grid");
fetchBitcoin("https://blockchain.info/ticker", ".preco-bitcoin");
