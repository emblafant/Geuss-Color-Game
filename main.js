const colorCodeText = document.querySelector("#colorCode");

const colorBoxesContainer = document.querySelector("#colorBoxesContainer");
const colorBoxCorrect = document.querySelector("#colorBox1");
const colorBox2 = document.querySelector("#colorBox2");
const colorBox3 = document.querySelector("#colorBox3");

const randomColorCode = () => {
  const colorCode = "#"+Math.floor(Math.random()*16777215).toString(16);
  return colorCode;
}

const colorCodeCorrect = randomColorCode();
colorCodeText.innerText = colorCodeCorrect;

let colorCode2 = randomColorCode();
let colorCode3 = randomColorCode();

const checkForUniqueColors = () => {
  if (colorCode2 == colorCodeCorrect) {
    colorCode2 = randomColorCode();
    checkForUniqueColors();
  } else if (colorCode3 == colorCodeCorrect || colorCode3 == colorCode2) {
    colorCode3 = randomColorCode();
    checkForUniqueColors();
  }
  return;
};

colorBoxCorrect.style.background = colorCodeCorrect;
colorBox2.style.background = colorCode2;
colorBox3.style.background = colorCode3;

for (let i = colorBoxesContainer.children.length; i >= 0; i--) {
  colorBoxesContainer.appendChild(colorBoxesContainer.children[Math.random() * i | 0]);
}
