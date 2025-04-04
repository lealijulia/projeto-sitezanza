document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formAgendamento").addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Captura os valores do formulário
        let servico = document.getElementById("servico").value;
        let data = document.getElementById("data").value;
        let horario = document.getElementById("horario").value;
        let mensagem = document.getElementById("mensagem").value; // Captura a mensagem

        // Verifica se todos os campos obrigatórios foram preenchidos
        if (!servico || !data || !horario) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        // Número do WhatsApp (substitua pelo seu)
        let numeroWhatsApp = "5551981803996"; // Exemplo: "51981803996"

        // Formata a mensagem
        let mensagemWhatsApp = `Olá, quero agendar um serviço!\n\n📌 Serviço: ${servico}\n📅 Data: ${data}\n⏰ Horário: ${horario}\n`;

        // Adiciona a mensagem extra se o cliente escreveu algo
        if (mensagem.trim() !== "") {
            mensagemWhatsApp += `📝 Observação: ${mensagem}\n`;
        }

        mensagemWhatsApp += `\nAguardo a confirmação!`;

        // Codifica e redireciona para o WhatsApp
        let url = `https://wa.me/${5551981803996}?text=${encodeURIComponent(mensagemWhatsApp)}`;
        window.location.href = url;
    });
});
