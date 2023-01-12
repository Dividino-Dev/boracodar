function rotate() {
  var produtoImagem = document.querySelector("#produto-imagem");
  var icone = document.querySelector("#icone");

  if (icone.getAttribute("src") == "imagens/close.svg") {
    icone.setAttribute("src", "imagens/360Icon.svg");
    produtoImagem.setAttribute("src", "imagens/sofaStatic.png");
  } else {
    icone.setAttribute("src", "imagens/close.svg");
    produtoImagem.setAttribute("src", "imagens/sofa.gif");
    produtoImagem.setAttribute("allow", "autoplay");
  }
}
