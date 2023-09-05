let itemOne = document.getElementById("list-item-one");
let itemTwo = document.getElementById("list-item-two");
let itemThree = document.getElementById("list-item-three");
let itemFour = document.getElementById("list-item-four");
let itemFive = document.getElementById("list-item-five");
let resetButton = document.getElementById("reset-button");



let reset = function() {
    itemOne.style.width = "";
    itemTwo.style.backgroundColor = "";
    itemThree.innerHTML = "The mouse must leave the box to change the text";
    itemFive.style.display = "none";
};
resetButton.onclick = reset;

function increaseWidth(event) {
    event.target.style.width = "500px";
}
itemOne.addEventListener("mouseover", increaseWidth);

function changeBackground() {
    itemTwo.style.backgroundColor = "red";
}

itemTwo.onmouseup = changeBackground;

function changeText() {
    itemThree.innerHTML = "The mouse has left";
}
itemThree.onmouseout = changeText;

function showItem() {
    itemFive.style.display = "block";
}

itemFour.onmousedown = showItem
