document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // SMOOTH SCROLL PROFISSIONAL
    // =========================

    document.querySelectorAll("a[href^='#']").forEach(link => {
        link.addEventListener("click", function(e){
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if(target){
                target.scrollIntoView({
                    behavior:"smooth",
                    block:"start"
                });
            }
        });
    });


    // =========================
    // COUNTERS ANIMADOS (ESTATÍSTICAS)
    // =========================

    function animateCounter(id, end, duration){
        const el = document.getElementById(id);
        let start = 0;
        let step = end / (duration / 16);

        function update(){
            start += step;

            if(start < end){
                el.innerText = Math.floor(start);
                requestAnimationFrame(update);
            } else {
                el.innerText = end;
            }
        }

        update();
    }

    // valores do agro (exemplo realista)
    animateCounter("counter1", 325, 1200); // produção
    animateCounter("counter2", 180, 1200); // empregos
    animateCounter("counter3", 85, 1200);  // países
    animateCounter("counter4", 42, 1200);  // inovação


    // =========================
    // EFEITO DE APARIÇÃO AO SCROLL
    // =========================

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
                entry.target.style.transition = "0.8s ease";
            }
        });
    });

    document.querySelectorAll(".info-card, .tech-card, .chart-card, .stat-card").forEach(el => {
        el.style.opacity = 0;
        el.style.transform = "translateY(30px)";
        observer.observe(el);
    });


    // =========================
    // EFEITO DINÂMICO NA NAVBAR
    // =========================

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {
        if(window.scrollY > 50){
            navbar.style.background = "rgba(0,0,0,0.7)";
            navbar.style.backdropFilter = "blur(15px)";
        } else {
            navbar.style.background = "rgba(0,0,0,0.4)";
        }
    });


    // =========================
    // PARALLAX SUAVE HERO
    // =========================

    const hero = document.querySelector(".hero");

    window.addEventListener("scroll", () => {
        let offset = window.scrollY;
        hero.style.backgroundPositionY = offset * 0.5 + "px";
    });


    // =========================
    // BOTÕES HERO INTERATIVOS
    // =========================

    const btnPrimary = document.querySelector(".btn-primary");

    if(btnPrimary){
        btnPrimary.addEventListener("click", () => {
            document.querySelector("#desafio").scrollIntoView({
                behavior:"smooth"
            });
        });
    }

});//
// ===============================
// MODO CAMPEÃO FINAL (JORNADA)
// ===============================
//

const sections = document.querySelectorAll("section");
let journeyActive = false;
let currentSection = 0;

const startBtn = document.getElementById("startJourney");

function highlightSection() {
    sections.forEach((sec, index) => {
        if (index === currentSection) {
            sec.style.transform = "scale(1.01)";
            sec.style.boxShadow = "0 0 40px rgba(108,255,154,0.15)";
            sec.style.transition = "0.5s";
        } else {
            sec.style.transform = "scale(1)";
            sec.style.boxShadow = "none";
        }
    });
}

function goToSection(index) {
    if (index < sections.length) {
        sections[index].scrollIntoView({ behavior: "smooth" });
        currentSection = index;
        highlightSection();
    }
}

function startJourney() {

    if (journeyActive) return;

    journeyActive = true;

    let delay = 2500;

    for (let i = 0; i < sections.length; i++) {
        setTimeout(() => {
            goToSection(i);
        }, i * delay);
    }

    setTimeout(() => {
        journeyActive = false;
    }, sections.length * delay);
}

// botão principal
if (startBtn) {
    startBtn.addEventListener("click", startJourney);
}


// ===============================
// DETECÇÃO DE SEÇÃO ATIVA
// ===============================

window.addEventListener("scroll", () => {

    let scrollPos = window.scrollY + window.innerHeight / 2;

    sections.forEach((sec, i) => {
        if (
            scrollPos > sec.offsetTop &&
            scrollPos < sec.offsetTop + sec.offsetHeight
        ) {
            currentSection = i;
            highlightSection();
        }
    });

});
