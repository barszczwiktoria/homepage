console.log("Hello again!");

let button = document.querySelector(".js-button");
let img = document.querySelector(".js-image")

button.addEventListener("click", () => {
    img.remove();
    button.textContent = "Usunięto "
});

let body = document.querySelector(".js-body");
let whiteBackground = document.querySelector(".body--whiteBackground");
let buttonBackground = document.querySelector(".js-buttonBackground");
let themeName = document.querySelector(".js-themeName")

buttonBackground.addEventListener("click", () => {
    body.classList.toggle("body--whiteBackground");
    themeName.innerText = body.classList.contains("body--whiteBackground") ? "domyślne" : "jasne";
});

let buttonUp = document.querySelector(".js-buttonUp");

buttonUp.addEventListener("click", () => {
    scroll(0, 0);
});
