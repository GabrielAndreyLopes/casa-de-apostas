document.getElementById("enviar").onclick = function() {
    const aposta = parseInt(document.getElementById("aposta").value);
    const numeroSorteado = Math.floor(Math.random() * 10) + 1; // Números de 1 a 10
    let resultado = "Você apostou no número " + aposta + ". ";

    if (aposta === numeroSorteado) {
        resultado += "Parabéns! Você ganhou! O número sorteado foi " + numeroSorteado + ".";
    } else {
        resultado += "Você perdeu. O número sorteado foi " + numeroSorteado + ".";
    }

    document.getElementById("resultado").innerText = resultado;
};
