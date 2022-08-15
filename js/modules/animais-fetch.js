import AnimaNumeros from "./anima-numeros.js";

export default function fetchAnimais(url, target) {
  // Cria a div contendo informações com o total de animais

  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numeros-animal");
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  function animaAnimaisNumeros() {
    const animanumeros = new AnimaNumeros(
      "[data-numero]",
      ".numeros",
      "scrollAtivo"
    );
    animanumeros.init();
  }

  // Puxa os animais através de um arquivo JSON e
  // cria cada animal utilizando createAnimal
  async function criarAnimais() {
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
      animaisJSON.forEach((animal) => preencherAnimais(animal));
      animaAnimaisNumeros();
    } catch (erro) {
      console.log(Error(erro));
    }
  }

  return criarAnimais();
}
