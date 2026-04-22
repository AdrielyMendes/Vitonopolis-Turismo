window.onload = function () {

  let index = 0;
  const slides = document.getElementById("slides");
  const total = slides.children.length;

  function mostrarSlide(i) {
    slides.style.transform = `translateX(-${i * 100}%)`;
  }

  function avancarSlide() {
    index++;
    if (index >= total) index = 0;
    mostrarSlide(index);
  }

  function voltarSlide() {
    index--;
    if (index < 0) index = total - 1;
    mostrarSlide(index);
  }

  // deixar global (para os botões funcionarem)
  window.avancarSlide = avancarSlide;
  window.voltarSlide = voltarSlide;

  // inicia na primeira imagem
  mostrarSlide(0);
};