let slider = document.getElementById("question-7-slider");
let outputSalary = document.getElementById("show-salary");
let outputAge = document.getElementById("show-age");

function setStyle(item, i) {
  x = Math.round(slider.value / 275);
  // Shifts the primary color for each container.
  console.log(x);
  hueIncrement = 60;
  // Offsets the secondary color of the gradient.
  gradientHueOffset = 100;
  // Adds 1 to i before multiplying by the hue increment.
  primaryColor = x;
  secondaryColor = primaryColor + gradientHueOffset;
  // Adds inline style to the currently processed container.
  item.setAttribute(
    "style",
    "background-image: linear-gradient(135deg, hsl(" +
      primaryColor +
      ", 60%, 83%), hsl(" +
      secondaryColor +
      ", 85%, 65%));"
  );
}

slider.oninput = function () {
  outputSalary.innerHTML = this.value;
  outputAge.innerHTML = Math.round(120 - this.value / 950);
  setStyle(document.querySelector("body"));
};
