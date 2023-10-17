/*function addToWheel() {
    var inputValue = document.getElementById("myInput").value;

    if (inputValue.trim() !== "") {
        var wheel = document.getElementById(".container");
        var newSector = document.createElement("div");
        newSector.classList.add(".containerdiv");
        newSector.textContent = inputValue;
        wheel.appendChild(newSector);
        document.getElementById("myInput").value = "";
    }
}*/





function documentLoad() {
    let container = document.querySelector(".container");
    let btn = document.getElementById("spin");
    let number = Math.ceil(Math.random() * 8000);

    btn.onclick = function () {
        container.style.transform = "rotate(" + number + "deg)";
        number += Math.ceil(Math.random() * 1000);

    }
}
function addFood(foodName, classname) {
    var foodName = document.getElementById("myInput").value;
    let container = document.querySelector(".container");
    var div = document.createElement("div");
    div.textContent = foodName;
    div.classList.add(classname);
    container.appendChild(div);
    document.getElementById("myInput").value = "";
    document.getElementById("div");
    var newDiv = document.createElement("div");
    newDiv.className = divClass;
    newDiv.textContent = current;

    document.body.appendChild(newDiv);

    var foods = ["", "", ""];

    for (let i = 0; i < foods.length; i++) {
        var current = foods[i];
        var divClass = "";
        newDiv = document.getElementById(divClass);
        
        switch (i) {
            case 0:
                divClass = "one";
                break;
            case 1:
                divClass = "two";
                break;
            case 2:
                divClass = "three";
                break;
               
        }
        addFood(current, divClass)


    }
    
}




// function addFood(foodName,classname){
//     var foodName=document.getElementById("myInput").value;

//     if(foodName.trim()!="")
//     {
//         let container=document.querySelector(".container");
//         var div=document.createElement("div");
//         div.textContent=foodName;
//         div.classList.add(classname);
//         container.appendChild(div);
//         document.getElementById("myInput").value="";

//     }
// }







document.addEventListener('DOMContentLoaded', documentLoad, false);

/*
let container = document.querySelector(".container");
    const div = document.createElement("div");
    div.textContent=food;
    div.classList.add(classname);
    container.appendChild(div);
    */
/*
function addFood(foodName, classname) {
    var foodName=document.getElementById("myInput").value;
     let container=document.querySelector(".container");
     var div=document.createElement("div");
     div.textContent=foodName;
     div.classList.add(classname);
     container.appendChild(div);
     document.getElementById("myInput").value="";
     document.getElementById("div");

     var horizontalDisplay = document.getElementById("horizontalDisplay");
     horizontalDisplay.textContent = myInput;
*/
/*
var foodName=document.getElementById("myInput").value;
let container=document.querySelector(".container");
var div=document.createElement("div");
div.textContent=foodName;
div.classList.add(classname);
container.appendChild(div);
document.getElementById("myInput").value="";
document.getElementById("div");
var newDiv=document.createElement("div");
   newDiv.className=divClass;
   newDiv.textContent=current;

   document.body.appendChild(newDiv);

var foods = ["Pide","Kebap","Makarna"];

for (let i = 0; i < foods.length; i++) {
   var current = foods[i];
   var divClass = "";
   newDiv=document.getElementById(divClass);

   switch (i) {
       case 0:
           divClass="one";
           break;
       case 1:
           divClass="two";
           break;
       case 2:
           divClass="three";
           break;
           
   }
   

   addFood(current, divClass)
   */