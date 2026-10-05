
const botoes = document.querySelectorAll(".btn-proximo");

botoes.forEach(botao => {

    botao.addEventListener("click", function() {

        const atual = document.querySelector(".passo.ativo");

        const proximoPasso = "passo-" + botao.dataset.proximo;

        const proximo = document.getElementById(proximoPasso);

        atual.classList.remove("ativo");

        proximo.classList.add("ativo");

    });

});