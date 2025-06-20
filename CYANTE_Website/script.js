/* ================================= */
/* ===== SCROLL ANİMASYONU ===== */
/* ================================= */
document.addEventListener('DOMContentLoaded', function() {
    const revealElements = document.querySelectorAll('.reveal');

    if (revealElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        revealElements.forEach(el => {
            observer.observe(el);
        });
    }
});


/* ================================= */
/* ===== SEKME (TAB) SİSTEMİ ===== */
/* ================================= */
document.addEventListener('DOMContentLoaded', function() {
    const tabContainer = document.querySelector('.tab-buttons');
    if (!tabContainer) return; 

    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === targetTab) {
                    content.classList.add('active');
                }
            });
        });
    });
});


/* ======================================= */
/* ===== HAREKETLİ ARKA PLAN (tsParticles) ===== */
/* ======================================= */
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('particles-js')) {
        tsParticles.load("particles-js", {
            background: {
                color: {
                    value: "transparent"
                }
            },
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#ffffff"
                },
                shape: {
                    type: "circle"
                },
                opacity: {
                    value: 0.5,
                    random: false
                },
                size: {
                    value: 3,
                    random: true
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#555555",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    out_mode: "out"
                }
            },
            interactivity: {
                events: {
                    onhover: {
                        enable: true,
                        mode: "repulse"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    }
                },
                modes: {
                    repulse: {
                        distance: 100
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            detectRetina: true
        });
    }
});