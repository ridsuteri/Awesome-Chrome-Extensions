//Select input colors
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
//Get background
var body = document.getElementById("gradient");
//Select h3 and h4 tag
var h3 = document.querySelector("h3");
var h4 = document.querySelector("h4");



//Create new function for color pick
function setGradient() {
  body.style.background = "linear-gradient(to right, " + color1.value + ", " 
  + color2.value +")";
  h3.textContent = body.style.background + ";";
}

//Pick and set Background colors 
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

//Match gradient colors
color1.addEventListener("input", setGradient());
color2.addEventListener("input", setGradient());

button.addEventListener("click", getRandomColor);
function randomColor() {
  var color = 'rgba(' + (Math.floor(Math.random() * 256)) + ',' 
  + (Math.floor(Math.random() * 256)) + ',' 
  + (Math.floor(Math.random() * 256)) + ')';
  return color;
}

function getRandomColor() {
  var rndColor1 = randomColor();
  var rndColor2 = randomColor();
  body.style.background = "linear-gradient(to right, " + rndColor1 + ", " 
  + rndColor2 +")";
  h3.textContent = body.style.background + ";";
}

btnimage.addEventListener("click", getRandomBgImage);
function randomImage() {
  //Assign random variable
  var rndmimg = Math.floor(Math.random() * 10);
  return rndmimg;
}

function getRandomBgImage() {
  var rndm = randomImage();
  body.style.backgroundImage = "url('"+mypics[rndm]+"')";
  body.style.backgroundRepeat = "no-repeat";
  body.style.backgroundSize = "cover";
  body.style.backgroundAttachment = "fixed";
  document.getElementById("currentBg").innerHTML = body.style.backgroundImage + "";
}

//Add an array of background pictures
var mypics = [
    "https://wallpaperaccess.com/full/497914.jpg", 
    "https://wallpaperaccess.com/full/497915.jpg",
    "https://wallpaperaccess.com/full/497917.jpg",
    "https://wallpaperaccess.com/full/497923.jpg", 
    "https://wallpaperaccess.com/full/497927.jpg", 
    "https://wallpaperaccess.com/full/497928.jpg", 
    "https://wallpaperaccess.com/full/497956.jpg", 
    "https://wallpaperaccess.com/full/497975.jpg",
    "https://wallpaperaccess.com/full/498015.jpg",
    "https://wallpaperaccess.com/full/160167.jpg", 
  ];