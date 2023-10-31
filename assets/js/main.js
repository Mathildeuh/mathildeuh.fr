window.onload = setInterval(cmdPrompt, 500);

function cmdPrompt() {
    const prompt = document.getElementById("prompt");
    if (prompt.style.display === "none") {
        prompt.style.display = "inline";
    } else {
        prompt.style.display = "none";
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setRandomInteger() {
    var spanElement = document.getElementById("randint");
    var randomInt = getRandomInt(1, 2023); 
    spanElement.textContent = randomInt;
}

function getCurrentYear() {
    return new Date().getFullYear();
}

function setActualYear() {
    var spanElement = document.getElementById("actualYear");
    var currentYear = getCurrentYear();
    spanElement.textContent = currentYear;
}

document.addEventListener("DOMContentLoaded", setRandomInteger);
document.addEventListener("DOMContentLoaded", setActualYear);