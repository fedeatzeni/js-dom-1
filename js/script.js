let img = document.querySelector("img")
let button = document.querySelector("button")

console.log(img, button);


button.addEventListener("click", function() {
    turnOn(img, "./img/yellow_lamp.png")
})

function turnOn(img, string) {
    img.src = string
}