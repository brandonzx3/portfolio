const buttons = document.getElementsByClassName("lang_button")

Array.from(buttons).forEach(button => {
    button.addEventListener("click", () => {
        redirect(button.innerText);
    });
});

const javaRepos = [
    "https://github.com/brandonzx3/disable-off-hand",
    "https://github.com/brandonzx3/admin-events",
    "https://github.com/brandonzx3/server-selector",
    "https://gitlab.com/ironclad_code/fish-tracker"
];
const nodeRepos = [
    "https://github.com/brandonzx3/portfolio",
    "https://github.com/brandonzx3/glaprs",
    "https://github.com/brandonzx3/bbsc"
];
const lvRepos = [
    "https://github.com/brandonzx3/ironclad5847-2020-infinite-recharge",
    "https://github.com/brandonzx3/Ironclad_deepspace_2019",
    "https://github.com/brandonzx3/FRC_Encoder_Recorder",
    "https://gitlab.com/ironclad_code/ironclad-pathplanner",
    "https://gitlab.com/ironclad_code/ironclad-2022",
    "https://gitlab.com/ironclad_code/ironclad-2021",
    "https://gitlab.com/ironclad_code/swerve-drive",
    "https://gitlab.com/ironclad_code/t-shirt-robot"
];



function redirect(name) {
    let links = [];
    switch(name) {
        case "Java": links = javaRepos; break;
        case "Javascript": links = nodeRepos; break;
        case "Labview": links = lvRepos; break;
        default: console.log("something went so wrong");
    }
    console.log(links);
    window.open(links[Math.floor(Math.random() * links.length)], "_blank");
}