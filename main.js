function circle1Clicked() {
  console.log("circle 1 was clicked");
  let circleText = document.getElementById("circle1_text");
  circleText.innerHTML = parseInt(circleText.innerHTML) + 1;
}