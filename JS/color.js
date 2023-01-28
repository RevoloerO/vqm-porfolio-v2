const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const btn1 = document.getElementById("btn1");
const defaultBtn = document.getElementById("defaultBtn");
const color = document.querySelector(".color");
const activeColor = document.querySelector(".active-color");
let hexColor = "#E5E5DB";

btn.addEventListener("click", function () {
  hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  // console.log(hexColor);

  color.textContent = hexColor;
  color.style.color = hexColor;

  //document.body.style.backgroundColor = hexColor;
});
btn1.addEventListener("click", function () {
  activeColor.textContent = hexColor;
  activeColor.style.color = hexColor;
  document.body.style.backgroundColor = hexColor;
  //btn.style.backgroundColor = hexColor;
  //btn1.style.backgroundColor = hexColor;
  //btn2.style.backgroundColor = hexColor;
});

defaultBtn.addEventListener("click", function () {
  activeColor.textContent =  "#E5E5DB";
  activeColor.style.color =  "#E5E5DB";
  document.body.style.backgroundColor = "#E5E5DB";
  //btn.style.backgroundColor = "#f1f5f8";
  //btn1.style.backgroundColor = "#f1f5f8";
  //btn2.style.backgroundColor = "#f1f5f8";
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
