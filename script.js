function documentLoad() {
    let container = document.querySelector(".container");
    let btn = document.getElementById("spin");
    let number = Math.ceil(Math.random() * 8000);

    btn.onclick = function () {
        container.style.transform = "rotate(" + number + "deg)";
        number += Math.ceil(Math.random() * 1000);

    }

    let addBtn = document.getElementById("addbutton");
    addBtn.onclick = function () {
        var foodName = document.getElementById("myInput").value;

        addFood(foodName, "wheelelement")

        document.getElementById("myInput").value = "";

    }

}


function addFood(foodName, classname) {
    let container = document.getElementById("wheelcontainer");
    var div = document.createElement("div");
    div.textContent = foodName;
    div.classList.add(classname);

    container.appendChild(div);

    const angle = 360 / container.children.length;

    for (let index = 0; index < container.children.length; index++) {
        container.children[index].style.transform = `rotate(${angle * index}deg)`;
    }

}


document.addEventListener('DOMContentLoaded', documentLoad, false);
