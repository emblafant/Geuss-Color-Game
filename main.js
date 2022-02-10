const colorCodeText = document.querySelector("#colorCode");

const randomColorCode = () => {
  const colorCode = "#"+Math.floor(Math.random()*16777215).toString(16);
  return colorCode;
}

const colorCode = randomColorCode()

colorCodeText.innerText = colorCode;