document.querySelector("#loveForm").addEventListener("submit", function(event) {
    event.preventDefault();

    console.log("Preloader ativado!");

    // Ativar o preloader apenas no clique do botão
    document.querySelector(".preloader").classList.add("active");

    // Aguarda 3 segundos e redireciona
    setTimeout(function() {
        console.log("Redirecionando...");
        window.location.href = "https://luis2455.github.io/pagamento-aprovado/";
    }, 3000);
});
