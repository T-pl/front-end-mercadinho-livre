function menu() {
  document.querySelector("header nav").classList.toggle("show");
}

const anoAtual = document.querySelector("footer span");

anoAtual.innerHTML = new Date().getFullYear();