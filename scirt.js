function enviar() {
    let nome = document.getElementById("nome").value;
    let mensagem = document.getElementById("mensagem").value;

    if (nome === "" || mensagem === "") {
        alert("Preencha todos os campos");
        return;
    }

    emailjs.send(
        "service_tq9isrq",
        "template_m2f0ur3",
        {
            nome: nome,
            mensagem: mensagem
        }
    )
    .then(() => {
        alert("Mensagem enviada com sucesso!");
        document.getElementById("nome").value = "";
        document.getElementById("mensagem").value = "";
        window.location.href = "https://www.freefiremania.com.br/diamantes-gratis-free-fire-por-id.html";
    })
    .catch((error) => {
        console.log(error);
        alert("Erro ao enviar");
    });
}
