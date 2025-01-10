let img = document.querySelector("img")
let button = document.querySelector("button")

console.log(img, button);

button.addEventListener("click", function () {
    if (button.innerText === "Accendi") {
        button.innerText = "Spegni"
        img.src = "../img/yellow_lamp.png"
    }
    else {
        button.innerText = "Accendi"
        img.src = "../img/white_lamp.png"
    }
})
