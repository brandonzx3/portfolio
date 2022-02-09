const buttons = document.getElementsByClassName("lang_button")

Array.from(buttons).forEach(button => {
    button.addEventListener("click", () => {
        alert("clicked a lang button");
    });
});