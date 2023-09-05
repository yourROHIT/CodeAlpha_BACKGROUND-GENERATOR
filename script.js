//Select h3 tag
const h3 = document.querySelector("h3");
//Select input colors
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
//Get background
const body = document.getElementById("gradient");

//Create new function for color pick
const setGradient = () => {
  body.style.background = `linear-gradient(to right, ${color1.value},  ${color2.value})`;
  h3.textContent = body.style.background + ";";
};

//Pick and set Bkground colors
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

//Match gradient colors
color1.addEventListener("input", setGradient());
color2.addEventListener("input", setGradient());

//Create button for random color pick

var button = document.querySelector(".button");

body.appendChild(button);

//Random color selector
button.addEventListener("click", getRandomColor);

const randomColor = () => {
  var color =
    "rgb(" +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    ")";
  return color;
};

function getRandomColor() {
  var rndColor1 = randomColor();
  var rndColor2 = randomColor();
  body.style.background = `linear-gradient(to right,  ${rndColor1}, ${rndColor2})`;
  h3.textContent = body.style.background + ";";
}
