const tipsContainer = document.getElementById("tips-container");

// Build full-screen animated tip panels
function loadTips() {
    tips.forEach((tip, index) => {
        const card = document.createElement("div");
        card.classList.add("tip-card");

        // Alternate slide direction for swipe feel
        if (index % 2 === 0) {
            card.classList.add("slide-left");
        } else {
            card.classList.add("slide-right");
        }

        card.innerHTML = `
            <h2>${tip.title}</h2>
            <p>${tip.description}</p>
        `;
        tipsContainer.appendChild(card);
    });
}

// Reveal cards on scroll
function revealOnScroll() {
    const cards = document.querySelectorAll(".tip-card");
    const trigger = window.innerHeight * 0.75;

    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;
        if (top < trigger) {
            card.classList.add("visible");
        }
    });

    updateProgress();
}

// Progress bar based on scroll
function updateProgress() {
    const progressBar = document.getElementById("progressBar");
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = progress + "%";
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", () => {
    revealOnScroll();
    updateProgress();
});

// Advice modal logic
const adviceBtn = document.getElementById("adviceBtn");
const adviceModal = document.getElementById("adviceModal");
const closeAdvice = document.getElementById("closeAdvice");

adviceBtn.onclick = () => adviceModal.style.display = "block";
closeAdvice.onclick = () => adviceModal.style.display = "none";
window.onclick = e => { 
    if (e.target === adviceModal) adviceModal.style.display = "none"; 
};

loadTips();
