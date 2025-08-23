function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function whatButton() {
    const button1 = document.getElementById("what");
    const text1 = document.getElementById("what-text")
    button1.classList.add("fade-out");
    text1.classList.add("fade-out");
    button1.addEventListener("transitionend", () => button1.classList.add("d-none"), text1.classList.add("d-none"));

    await sleep(800);

    const button2 = document.getElementById("know");
    const text2 = document.getElementById("know-text");
    button2.classList.remove("fade-out");
    text2.classList.remove("fade-out");

    button2.classList.add("fade-in");
    text2.classList.add("fade-in");
}

async function knowButton() {
    const button1 = document.getElementById("know");
    const text1 = document.getElementById("know-text")
    button1.classList.remove("fade-in")
    text1.classList.remove("fade-in")

    button1.classList.add("fade-out");
    text1.classList.add("fade-out");
    
    button1.addEventListener("transitionend", () => button1.classList.add("d-none"), text1.classList.add("d-none"));

    await sleep(800);

    const button2 = document.getElementById("question");
    const text2 = document.getElementById("question-text");
    button2.classList.remove("fade-out");
    text2.classList.remove("fade-out");

    button2.classList.add("fade-in");
    text2.classList.add("fade-in");
}

async function questionButton() {
    const button1 = document.getElementById("question");
    const text1 = document.getElementById("question-text")
    button1.classList.remove("fade-in")
    text1.classList.remove("fade-in")

    button1.classList.add("fade-out");
    text1.classList.add("fade-out");
    
    button1.addEventListener("transitionend", () => button1.classList.add("d-none"), text1.classList.add("d-none"));

    await sleep(800);

    const button2 = document.getElementById("goout-yes");
    const button3 = document.getElementById("goout-no");
    const text2 = document.getElementById("goout-text");
    button2.classList.remove("fade-out");
    button3.classList.remove("fade-out");
    text2.classList.remove("fade-out");

    button2.classList.add("fade-in");
    button3.classList.add("fade-in");
    text2.classList.add("fade-in");
}

function goOutButton() {
    const button = document.getElementById("goout-no");
    
    button.style.setProperty("position", "absolute", "important");

    const btnWidth = button.offsetWidth;
    const btnHeight = button.offsetHeight;

    const maxX = window.innerWidth - btnWidth;
    const maxY = window.innerHeight - btnHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    button.style.setProperty("left", randomX + "px", "important");
    button.style.setProperty("top", randomY + "px", "important");

}