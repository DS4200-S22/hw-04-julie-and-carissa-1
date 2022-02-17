function circle3Clicked() {
    const circleStyle = document.getElementById("circ3")
    if(circleStyle.getAttribute("class") == "filled") {
        circleStyle.setAttribute("class", "transparent")
    }
    else {
        circleStyle.setAttribute("class", "filled")
    }
}

// function circle3Clicked() {
//     let appear = document.getElementById("circle3").getAttribute("class");
//     if (appear == "outer-circle") {
//       document.getElementById("circle3").setAttribute("class", "transparent");
//     } else {
//       document.getElementById("circle3").setAttribute("class", "outer-circle")
//     }
//   }

function circle1Clicked() {
  console.log("circle 1 was clicked");
  let circleText = document.getElementById("circle1_text");
  circleText.innerHTML = parseInt(circleText.innerHTML) + 1;
}
