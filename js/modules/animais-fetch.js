import initAnimaNumeros from "./anima-numeros.js";

export default function initAnimaisFetch() {
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numeros-animal");
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  async function animaisFetch(url) {
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
      const numerosGrid = document.querySelector(".numeros-grid");
      animaisJSON.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });
      initAnimaNumeros();
    } catch (erro) {
      console.log(Error(erro));
    }
  }

  animaisFetch("./animaisapi.json");
}
