const buttons = document.getElementsByClassName("lang_button")

Array.from(buttons).forEach(button => {
    button.addEventListener("click", () => {
        redirect(button.innrtText);
    });
});

const javaRepos = [];
const nodeRepos = ["https://github.com/brandonzx3/portfolio"];
const lvRepos = [];

function redirect(name) {
    let links = [];
    switch(name) {
        case "Java": links = javaRepos; break;
        case "NodeJS": links = nodeRepos; break;
        case "Labview": links = lvRepos; break;
        default: console.log("something went so wrong");
    }
    window.open(links[Math.floor(Math.random()*links.length)], "_blank");
}