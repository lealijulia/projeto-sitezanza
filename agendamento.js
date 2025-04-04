const horariosDisponiveis = {
    "2025-04-05": ["09:00", "10:00", "11:00", "14:00", "15:00"],
    "2025-04-06": ["09:00", "10:00", "13:00", "16:00"],
    // Adicione mais datas e horários conforme necessário
};

const agendados = [];

document.addEventListener("DOMContentLoaded", () => {
    const dataInput = document.getElementById("data");
    const horarioInput = document.getElementById("horario");

    dataInput.addEventListener("change", () => {
        const dataSelecionada = dataInput.value;
        atualizarHorarios(dataSelecionada);
    });

    document.getElementById("formAgendamento").addEventListener("submit", function (e) {
        e.preventDefault();

        const data = dataInput.value;
        const horario = horarioInput.value;

        if (!horariosDisponiveis[data]?.includes(horario)) {
            alert("Este horário não está disponível.");
            return;
        }

        agendados.push({ data, horario });
        alert("Agendamento confirmado para " + data + " às " + horario);

        atualizarHorarios(data);
        this.reset();
    });
});

function atualizarHorarios(data) {
    const horarioInput = document.getElementById("horario");

    if (!horariosDisponiveis[data]) {
        horarioInput.innerHTML = '<option value="">Nenhum horário disponível</option>';
        return;
    }

    const ocupados = agendados
        .filter(a => a.data === data)
        .map(a => a.horario);

    const disponiveis = horariosDisponiveis[data].filter(h => !ocupados.includes(h));

    horarioInput.innerHTML = disponiveis.map(h => `<option value="${h}">${h}</option>`).join("");

    if (disponiveis.length === 0) {
        horarioInput.innerHTML = '<option value="">Todos os horários estão ocupados</option>';
    }
}
