var buttonEl = document.querySelector("#themeButton");
var root = document.querySelector(":root");

console.log(localStorage.getItem("theme"));
if(localStorage.getItem("theme") == null) {
    localStorage.setItem("theme", "dark");
}
var switchEffect = new Audio()
buttonEl.onclick = function() {
    switchEffect = new Audio("./assets/switch.mp3");
    switchEffect.play();

    if(localStorage.getItem("theme") == "dark") {
        localStorage.setItem("theme", "light");
        root.style.setProperty("--background", "white");
        root.style.setProperty("--foreground", "black");
        buttonEl.style.setProperty("color", "black");
    } else {
        localStorage.setItem("theme", "dark");
        root.style.setProperty("--background", "black");
        root.style.setProperty("--foreground", "white");
        buttonEl.style.setProperty("color", "white");
    }
}

if(localStorage.getItem("theme") == "dark") {
    root.style.setProperty("--background", "black");
    root.style.setProperty("--foreground", "white");
    buttonEl.style.setProperty("color", "white");
} else {
    root.style.setProperty("--background", "white");
    root.style.setProperty("--foreground", "black");
    buttonEl.style.setProperty("color", "black");
}

//add the transition effect after everything loads to stop weird effects
window.onload = function() {
    let anim_time = 200;
    document.body.setAttribute("style", `transition: background-color ${anim_time}ms, color ${anim_time}ms`);
    var gridItems = document.getElementsByClassName("grid-item");
    Array.from(gridItems).forEach(item => {
        item.setAttribute("style", `transition: background-color ${anim_time}ms, color ${anim_time}ms, outline ${anim_time}ms`)
    });
    document.querySelector("#grid").setAttribute("style", `transition: background-color ${anim_time}ms`);
}