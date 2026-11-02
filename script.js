// Global State Variables
let selectedMood = "";
let selectedBase = "";

// Function to handle mood selection
function selectMood(mood, element) {
    selectedMood = mood;
    
    // Remove active class from sibling buttons and add to clicked button
    let buttons = element.parentNode.getElementsByClassName("btn-option");
    for (let btn of buttons) {
        btn.classList.remove("active");
    }
    element.classList.add("active");
}

// Function to handle base selection
function selectBase(base, element) {
    selectedBase = base;
    
    // Remove active class from sibling buttons and add to clicked button
    let buttons = element.parentNode.getElementsByClassName("btn-option");
    for (let btn of buttons) {
        btn.classList.remove("active");
    }
    element.classList.add("active");
}

// Conditional logic to generate the final drink outcome
function generateDrink() {
    // Validation check: ensure both options are selected
    if (!selectedMood || !selectedBase) {
        alert("Please select both your Mood and Base first! ☕");
        return;
    }

    const resultCard = document.getElementById("result-card");
    const drinkImg = document.getElementById("drink-img");
    const drinkTitle = document.getElementById("drink-title");
    const drinkDesc = document.getElementById("drink-desc");

    // Show the hidden result card
    resultCard.classList.remove("hidden");

    // Decision tree (4 conditional outcomes)
    if (selectedMood === "focus" && selectedBase === "coffee") {
        drinkTitle.innerText = "☕ Midnight Espresso";
        drinkDesc.innerText = "High caffeine and bold flavor. Perfect for powering through late-night assignments.";
        drinkImg.src = "images/focus-coffee.jpg";
        document.body.style.backgroundColor = "#2b2624";
    } 
    else if (selectedMood === "focus" && selectedBase === "tea") {
        drinkTitle.innerText = "🍵 Matcha Focus Brew";
        drinkDesc.innerText = "Calm energy with sustained focus. Keeps you alert without the jittery crash.";
        drinkImg.src = "images/focus-tea.jpg";
        document.body.style.backgroundColor = "#273028";
    } 
    else if (selectedMood === "chill" && selectedBase === "coffee") {
        drinkTitle.innerText = "🧊 Vanilla Ice Latte";
        drinkDesc.innerText = "Smooth, sweet, and comforting. Ideal for a slow afternoon chat.";
        drinkImg.src = "images/chill-coffee.jpg";
        document.body.style.backgroundColor = "#e8ded2";
    } 
    else if (selectedMood === "chill" && selectedBase === "tea") {
        drinkTitle.innerText = "🍑 Sunset Peach Tea";
        drinkDesc.innerText = "Refreshing, fruity, and light. Your ultimate relaxation companion.";
        drinkImg.src = "images/chill-tea.jpg";
        document.body.style.backgroundColor = "#ebd9cd";
    }
}
