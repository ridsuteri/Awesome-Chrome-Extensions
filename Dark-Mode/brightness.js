rangeInput = document.getElementById('range');
container = document.getElementsByClassName('ch')[0];

rangeInput.addEventListener("change",function(){
container.style.filter = "brightness(" + rangeInput.value + "%)";
});