// State variables
let selectedMood = "";
let selectedBase = "";

// Select mood function
function selectMood(mood, element) {
    selectedMood = mood;
    let buttons = element.parentNode.getElementsByClassName("btn-option");
    for (let btn of buttons) {
        btn.classList.remove("active");
    }
    element.classList.add("active");
}

// Select base function
function selectBase(base, element) {
    selectedBase = base;
    let buttons = element.parentNode.getElementsByClassName("btn-option");
    for (let btn of buttons) {
        btn.classList.remove("active");
    }
    element.classList.add("active");
}

// Conditional logic for outcomes
function generateDrink() {
    // Validation
    if (!selectedMood || !selectedBase) {
        alert("Please select both your Mood and Base first! ☕");
        return;
    }

    const resultCard = document.getElementById("result-card");
    const drinkImg = document.getElementById("drink-img");
    const drinkTitle = document.getElementById("drink-title");
    const drinkDesc = document.getElementById("drink-desc");

    // Show result card
    resultCard.classList.remove("hidden");

    // Decision tree (4 outcomes)
    if (selectedMood === "focus" && selectedBase === "coffee") {
        drinkTitle.innerText = "☕ Warm Coffee Latte";
        drinkDesc.innerText = "High caffeine and bold flavor. Perfect for powering through late-night assignments.";
        drinkImg.src = "assets/focus-coffee.jpg";
        document.body.style.backgroundColor = "#2b2624";
    } 
    else if (selectedMood === "focus" && selectedBase === "tea") {
        drinkTitle.innerText = "🍵 Matcha Focus Brew";
        drinkDesc.innerText = "Calm energy with sustained focus. Keeps you alert without the jittery crash.";
        drinkImg.src = "assets/focus-tea.jpg";
        document.body.style.backgroundColor = "#273028";
    } 
    else if (selectedMood === "chill" && selectedBase === "coffee") {
        drinkTitle.innerText = "🧊 Caramel Cream Iced Latte";
        drinkDesc.innerText = "Smooth, sweet, and comforting. Ideal for a slow afternoon chat.";
        drinkImg.src = "assets/chill-coffee.jpg";
        document.body.style.backgroundColor = "#e8ded2";
    } 
    else if (selectedMood === "chill" && selectedBase === "tea") {
        drinkTitle.innerText = "🍑 Sunset Peach Tea";
        drinkDesc.innerText = "Refreshing, fruity, and light. Your ultimate relaxation companion.";
        drinkImg.src = "assets/chill-tea.jpg";
        document.body.style.backgroundColor = "#ebd9cd";
    }
}
