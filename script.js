document.addEventListener("DOMContentLoaded", function () {
    // === MENU HAMBURGUER ===
    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    if (toggle && menu) {
        toggle.addEventListener("click", () => {
            menu.classList.toggle("hidden");
        });
    }

    // === FORMULÁRIO DE AGENDAMENTO ===
    const form = document.getElementById("formAgendamento");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Impede o envio padrão do formulário

            let servico = document.getElementById("servico").value;
            let data = document.getElementById("data").value;
            let horario = document.getElementById("horario").value;
            let mensagem = document.getElementById("mensagem").value;

            if (!servico || !data || !horario) {
                alert("Por favor, preencha todos os campos obrigatórios.");
                return;
            }

            let numeroWhatsApp = "5551981803996";

            let mensagemWhatsApp = `Olá, quero agendar um serviço!\n\n📌 Serviço: ${servico}\n📅 Data: ${data}\n⏰ Horário: ${horario}\n`;

            if (mensagem.trim() !== "") {
                mensagemWhatsApp += `📝 Observação: ${mensagem}\n`;
            }

            mensagemWhatsApp += `\nAguardo a confirmação!`;

            let url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagemWhatsApp)}`;
            window.location.href = url;
        });
    }
});
