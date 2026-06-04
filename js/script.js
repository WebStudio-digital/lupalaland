// Espera a que cargue toda la página
window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        loader.classList.add("hide");

        lanzarConfeti();

    }, 2500);

});

// Función de confeti
function lanzarConfeti() {

    confetti({
        particleCount: 200,
        spread: 180,
        origin: {
            y: 0.6
        }
    });

}

function lanzarConfeti() {

    const duration = 3000;
    const end = Date.now() + duration;

    (function frame() {

        confetti({
            particleCount: 3,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });

        confetti({
            particleCount: 3,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }

    })();

}


const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});