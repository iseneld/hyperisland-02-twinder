function gradientMaker(x) {
  let divs = document.querySelectorAll("body div");

  divs.forEach(setStyle);

  function setStyle(item, i) {
    // Shifts the primary color for each container.
    hueIncrement = 60;
    // Offsets the secondary color of the gradient.
    gradientHueOffset = 100;
    // Adds 1 to i before multiplying by the hue increment.
    primaryColor = (x + ++i * hueIncrement) % 255;
    secondaryColor = (primaryColor + gradientHueOffset) % 255;
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
}

// Randomizes a primary hue value.
gradientMaker(1000 * Math.random());
