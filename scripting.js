var  color = prompt("What is your favorite color?").toLowerCase();
window.onload = function run() {
    document.getElementById("colorChanger").innerHTML = color.charAt(0).toUpperCase() + color.slice(1) + "!";
    document.body.style.backgroundColor = "white";

    document.getElementById("container").style.gridTemplateColumns = 
    "repeat(" + Math.trunc(window.innerWidth/55) + ", 50px)";
}

function changeColor(item) {
    item.style.backgroundColor = color;
    if(document.body.style.backgroundColor == "white"){
        document.body.style.backgroundColor = color;
    } else {
        document.body.style.backgroundColor = "white";
    }
}

setInterval(function createBox() {
    var box = document.createElement("div")
    box.style.backgroundColor = color;
    document.getElementById("container").appendChild(box);
}, 1000);

setInterval(function keepTime(){
    document.getElementById("clock").innerHTML = Date();
}, 100);

document.addEventListener("keydown", function press(){
    alert("boop!");
});