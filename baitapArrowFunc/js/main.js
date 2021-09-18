const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];
let content = "";
let colorContainer = document.getElementById("colorContainer");
colorList.map((item) => {
    content += `
            <button class="color-button ${item}" onclick="changeColor('${item}')" ></button>
        `
})

colorContainer.innerHTML = content;
document.querySelector(".pallet").classList.add("active");
document.querySelector(".house").classList.add("pallet");

let house = document.querySelector("#house");
let list = document.querySelectorAll(".color-button");
let active = document.querySelectorAll(".color-button");

let changeColor = (color) => {
    removeClass(color);
    house.classList.add("house", `${color}`);   
}

for(let i = 0 ; i < list.length ; i++) {
    list[i].addEventListener("click", function() {
        list[i].classList.toggle("active");

    })
}

function removeClass() {
    house.removeAttribute("class");
    active.forEach(item => {
        item.classList.remove("active");
    })
}


















   

    



