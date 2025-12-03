// Ano automático no rodapé
document.getElementById("year").textContent = new Date().getFullYear();

// ====== TILT CARDS (efeito 3D) ======
const tiltCards = document.querySelectorAll("[data-tilt]");

tiltCards.forEach((card) => {
  const strength = 18;

  card.addEventListener("mousemove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateY = ((x - rect.width / 2) / rect.width) * strength;
    const rotateX = ((rect.height / 2 - y) / rect.height) * strength;

    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
  });
});

// ====== FADE-UP (Animação de entrada) ======
const fadeTargets = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

fadeTargets.forEach((el) => observer.observe(el));
