const tipsContainer = document.getElementById("tips-container");
const randomTipBtn = document.getElementById("randomTipBtn");
const randomTipText = document.getElementById("randomTipText");

// Load all tips
function loadTips() {
    tips.forEach(tip => {
        const card = document.createElement("div");
        card.classList.add("tip-card");
        card.innerHTML = `<strong>${tip.title}</strong><p>${tip.text}</p>`;
        tipsContainer.appendChild(card);
    });
}

// Show a random tip
function showRandomTip() {
    const randomIndex = Math.floor(Math.random() * tips.length);
    randomTipText.textContent = tips[randomIndex].text;
}

randomTipBtn.addEventListener("click", showRandomTip);

loadTips();
