// Decision tree (4 outcomes)
    if (selectedMood === "focus" && selectedBase === "coffee") {
        drinkTitle.innerText = "☕ Midnight Espresso";
        drinkDesc.innerText = "High caffeine and bold flavor. Perfect for powering through late-night assignments.";
        drinkImg.src = "images/focus-coffee.jpg"; // Ganti jadi images/
        document.body.style.backgroundColor = "#2b2624";
    } 
    else if (selectedMood === "focus" && selectedBase === "tea") {
        drinkTitle.innerText = "🍵 Matcha Focus Brew";
        drinkDesc.innerText = "Calm energy with sustained focus. Keeps you alert without the jittery crash.";
        drinkImg.src = "images/focus-tea.jpg"; // Ganti jadi images/
        document.body.style.backgroundColor = "#273028";
    } 
    else if (selectedMood === "chill" && selectedBase === "coffee") {
        drinkTitle.innerText = "🧊 Vanilla Ice Latte";
        drinkDesc.innerText = "Smooth, sweet, and comforting. Ideal for a slow afternoon chat.";
        drinkImg.src = "images/chill-coffee.jpg"; // Ganti jadi images/
        document.body.style.backgroundColor = "#e8ded2";
    } 
    else if (selectedMood === "chill" && selectedBase === "tea") {
        drinkTitle.innerText = "🍑 Sunset Peach Tea";
        drinkDesc.innerText = "Refreshing, fruity, and light. Your ultimate relaxation companion.";
        drinkImg.src = "images/chill-tea.jpg"; // Ganti jadi images/
        document.body.style.backgroundColor = "#ebd9cd";
    }
