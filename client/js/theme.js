var buttonEl = document.querySelector("#themeButton");
var root = document.querySelector(":root");

console.log(localStorage.getItem("theme"));
if(localStorage.getItem("theme") == null) {
    localStorage.setItem("theme", "dark");
}
var switchEffect = new Audio()
buttonEl.onclick = function() {
    //switchEffect.pause();
    switchEffect = new Audio("./assets/switch.mp3");
    switchEffect.play();

    if(localStorage.getItem("theme") == "dark") {
        localStorage.setItem("theme", "light");
        root.style.setProperty("--background", "white")
        root.style.setProperty("--foreground", "black")
    } else {
        localStorage.setItem("theme", "dark");
        root.style.setProperty("--background", "black")
        root.style.setProperty("--foreground", "white")
    }
}

if(localStorage.getItem("theme") == "dark") {
    root.style.setProperty("--background", "black")
    root.style.setProperty("--foreground", "white")
} else {
    root.style.setProperty("--background", "white")
    root.style.setProperty("--foreground", "black")
}