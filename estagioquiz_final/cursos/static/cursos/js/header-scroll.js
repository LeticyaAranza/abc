// header-scroll.js — esconde o header ao rolar a página para baixo
// Renomeado de static.js. Corrigido: base.html agora tem id="header" no <header>,
// então este script encontra o elemento corretamente em todas as páginas.

document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("header");

    if (!header) return;

    window.addEventListener("scroll", function () {
        header.classList.toggle("hide", window.scrollY > 100);
    });
});
