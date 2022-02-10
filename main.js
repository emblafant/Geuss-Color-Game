const colorCodeText = document.querySelector("#colorCode");


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
}
