function criarCoracao() {
    const coracao = document.createElement("div");
    coracao.innerHTML = "❤️";
    coracao.style.position = "fixed";
    coracao.style.left = Math.random() * window.innerWidth + "px";
    coracao.style.top = "-20px";
    coracao.style.fontSize = Math.random() * 30 + 10 + "px";
    coracao.style.animation = "cair 4s linear";
    coracao.style.opacity = Math.random();
    document.body.appendChild(coracao);

    setTimeout(() => {
        coracao.remove();
    }, 4000);
}

setInterval(criarCoracao, 300);


function updateCountdown() {
    const startDate = new Date('2024-10-04'); // Data do início do namoro
    const currentDate = new Date();
    const diff = currentDate - startDate;

    const seconds = Math.floor(diff / 1000) % 60;
    const minutes = Math.floor(diff / (1000 * 60)) % 60;
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    document.getElementById('countdown').textContent = `${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
}

setInterval(updateCountdown, 1000);


document.addEventListener("DOMContentLoaded", function () {
    let modal = document.getElementById("minhaModal");
    let botaoFechar = document.getElementById("fecharModal");

    // Evento para fechar a modal ao clicar no botão
    botaoFechar.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Se quiser que a modal feche ao clicar fora dela
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

