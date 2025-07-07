const circulo = document.querySelector(".circulo");
const imagemPrincipal = document.querySelector(".starbucks-img");
const titulo = document.querySelector("h1 span");
const botaoComprar = document.querySelector(".btn-comprar");
const miniaturas = document.querySelectorAll(".miniaturas img");

const coresProdutos = {
  tradicional: "#017143",
  frappuccino: "#eb7495",
  especial: "#d752b1",
};

function mudarProduto(cor, imagem) {
  imagemPrincipal.style.animation = "none";
  void imagemPrincipal.offsetWidth;
  imagemPrincipal.style.animation = "fadeIn 0.5s ease-in-out";
  circulo.style.background = cor;
  imagemPrincipal.src = imagem;
  titulo.style.color = cor;
  botaoComprar.style.background = cor;
  botaoComprar.style.background = cor;
}

botaoComprar.addEventListener("mouseover", function () {
  const corAtual = circulo.style.background || "#017143";
  this.style.background = escurecerCor(corAtual, 20);
});

botaoComprar.addEventListener("mouseout", function () {
  const corAtual = circulo.style.background || "#017143";
  this.style.background = corAtual;
});

function escurecerCor(cor, percentual) {
  let r = parseInt(cor.substring(1, 3), 16);
  let g = parseInt(cor.substring(3, 5), 16);
  let b = parseInt(cor.substring(5, 7), 16);

  r = Math.floor((r * (100 - percentual)) / 100);
  g = Math.floor((g * (100 - percentual)) / 100);
  b = Math.floor((b * (100 - percentual)) / 100);

  r = r.toString(16).padStart(2, "0");
  g = g.toString(16).padStart(2, "0");
  b = b.toString(16).padStart(2, "0");

  return `#${r}${g}${b}`;
}

miniaturas.forEach((miniatura) => {
  miniatura.addEventListener("click", function () {
    this.style.transform = "translateY(-10px) scale(0.9)";
    setTimeout(() => {
      this.style.transform = "translateY(-25px) scale(1.1)";
    }, 200);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  circulo.style.background = coresProdutos.tradicional;
});
