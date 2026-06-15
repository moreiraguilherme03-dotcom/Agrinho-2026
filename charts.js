document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // ESTILO GLOBAL DOS GRÁFICOS
    // =========================

    Chart.defaults.color = "#eaf6ee";
    Chart.defaults.font.family = "Inter";

    // =========================
    // 1. PRODUÇÃO AGRÍCOLA
    // =========================

    const production = new Chart(
        document.getElementById("productionChart"),
        {
            type: "bar",
            data: {
                labels: ["Soja", "Milho", "Café", "Algodão", "Trigo"],
                datasets: [{
                    label: "Produção (milhões t)",
                    data: [160, 120, 85, 70, 95],
                    backgroundColor: "#6CFF9A",
                    borderRadius: 8
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { display: false }
                },
                animation: {
                    duration: 1500,
                    easing: "easeOutQuart"
                },
                scales: {
                    x: { ticks: { color: "#fff" } },
                    y: { ticks: { color: "#fff" } }
                }
            }
        }
    );


    // =========================
    // 2. SUSTENTABILIDADE VS PRODUÇÃO
    // =========================

    const sustainability = new Chart(
        document.getElementById("sustainabilityChart"),
        {
            type: "line",
            data: {
                labels: ["2019", "2020", "2021", "2022", "2023", "2024"],
                datasets: [
                    {
                        label: "Produção",
                        data: [70, 85, 100, 115, 130, 145],
                        borderColor: "#6CFF9A",
                        backgroundColor: "transparent",
                        tension: 0.4,
                        fill: false
                    },
                    {
                        label: "Sustentabilidade",
                        data: [60, 75, 90, 105, 125, 140],
                        borderColor: "#4dd0e1",
                        backgroundColor: "transparent",
                        tension: 0.4,
                        fill: false
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        labels: { color: "#fff" }
                    }
                },
                animation: {
                    duration: 1600
                },
                scales: {
                    x: { ticks: { color: "#fff" } },
                    y: { ticks: { color: "#fff" } }
                }
            }
        }
    );


    // =========================
    // 3. EXPORTAÇÕES DO BRASIL
    // =========================

    const exportsChart = new Chart(
        document.getElementById("exportsChart"),
        {
            type: "doughnut",
            data: {
                labels: ["China", "Europa", "EUA", "Outros"],
                datasets: [{
                    data: [42, 25, 18, 15],
                    backgroundColor: [
                        "#6CFF9A",
                        "#4dd0e1",
                        "#ffd166",
                        "#ff6b6b"
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                animation: {
                    animateRotate: true,
                    duration: 1500
                },
                plugins: {
                    legend: {
                        position: "bottom",
                        labels: { color: "#fff" }
                    }
                }
            }
        }
    );


    // =========================
    // 4. INOVAÇÃO TECNOLÓGICA
    // =========================

    const innovationChart = new Chart(
        document.getElementById("innovationChart"),
        {
            type: "radar",
            data: {
                labels: [
                    "IA",
                    "Drones",
                    "Automação",
                    "IoT",
                    "Biotecnologia"
                ],
                datasets: [{
                    label: "Adoção no Agro (%)",
                    data: [85, 78, 80, 72, 68],
                    backgroundColor: "rgba(108,255,154,0.2)",
                    borderColor: "#6CFF9A",
                    pointBackgroundColor: "#6CFF9A"
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        labels: { color: "#fff" }
                    }
                },
                scales: {
                    r: {
                        angleLines: { color: "rgba(255,255,255,0.2)" },
                        grid: { color: "rgba(255,255,255,0.2)" },
                        pointLabels: { color: "#fff" }
                    }
                }
            }
        }
    );

});