document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // ELEMENTOS
    // =========================

    const tech = document.getElementById("techRange");
    const green = document.getElementById("greenRange");
    const water = document.getElementById("waterRange");

    const scoreEl = document.getElementById("score");
    const statusEl = document.getElementById("status");


    // =========================
    // FUNÇÃO DE CÁLCULO INTELIGENTE
    // =========================

    function calculateScore() {

        let techValue = Number(tech.value);
        let greenValue = Number(green.value);
        let waterValue = Number(water.value);

        // fórmula ponderada (simula análise real)
        let score =
            (techValue * 0.4) +
            (greenValue * 0.4) +
            (waterValue * 0.2);

        score = Math.round(score);

        // atualização visual
        scoreEl.innerText = score + "%";

        // =========================
        // CLASSIFICAÇÃO INTELIGENTE
        // =========================

        if (score >= 80) {
            statusEl.innerText = "Sistema Altamente Sustentável";
            statusEl.style.color = "#6CFF9A";
        }

        else if (score >= 60) {
            statusEl.innerText = "Sistema Sustentável";
            statusEl.style.color = "#ffd166";
        }

        else {
            statusEl.innerText = "Sistema com Impacto Elevado";
            statusEl.style.color = "#ff6b6b";
        }


        // =========================
        // FEEDBACK VISUAL DINÂMICO
        // =========================

        document.querySelector(".score-circle").style.transform =
            "scale(1.05)";

        setTimeout(() => {
            document.querySelector(".score-circle").style.transform =
                "scale(1)";
        }, 150);

    }


    // =========================
    // EVENTOS DOS SLIDERS
    // =========================

    tech.addEventListener("input", calculateScore);
    green.addEventListener("input", calculateScore);
    water.addEventListener("input", calculateScore);


    // =========================
    // INICIALIZAÇÃO
    // =========================

    calculateScore();


    // =========================
    // EFEITO DE RESPOSTA VISUAL DO FUNDO
    // =========================

    function updateBackground() {

        let value = (Number(tech.value) + Number(green.value)) / 2;

        let intensity = value / 100;

        document.body.style.background = `
            linear-gradient(
                rgba(7,15,10,1),
                rgba(${Math.floor(10 + intensity * 20)}, 30, 20, 1)
            )
        `;
    }

    tech.addEventListener("input", updateBackground);
    green.addEventListener("input", updateBackground);

    updateBackground();

});