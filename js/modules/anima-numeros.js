export default function initAnimaNumeros() {
  const numeros = document.querySelectorAll("[data-numero]");

  function animeNumbers() {
    numeros.forEach((numero) => {
      const total = +numero.innerText;

      let start = 0;
      const incremento = Math.round(total / 100);
      const timer = setInterval(() => {
        start += incremento;
        numero.innerText = start;
        if (start > total) {
          clearInterval(timer);
          numero.innerText = total;
        }
      }, 10 * Math.random());
    });
  }

  let observer;
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("scrollAtivo")) {
      observer.disconnect();
      animeNumbers();
    }
  }

  observer = new MutationObserver(handleMutation);

  const elementObserver = document.querySelector(".numeros");

  observer.observe(elementObserver, { attributes: true });
}
