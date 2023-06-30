var el = document.querySelector("#splash")

const splashes = [
    "Writing slow code!",
    "Blazingly fast!",
    "Powering 3 billion devices!",
    "Error on line 42!",
    "//This causes memory leaks!",
    "The code is simple!",
    "Also try alador.dev!",
    "As seen on TV!",
    "Awesome!",
    "Open Source!",
    "Now powered by ChatGPT!"

]

const random = splashes[Math.floor(Math.random() * splashes.length)];

let text = document.createElement("p");
text.innerText = random;
el.appendChild(text);
