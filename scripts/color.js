function gradientMaker(x) {
  let divs = document.querySelectorAll("body div");

  divs.forEach(setStyle);

  function setStyle(item, i) {
    // Adds 25 hue to each increment.
    hueIncrement = 60;
    z = (x + (i + 1) * hueIncrement) % 255;
    y = (z + 100) % 255;

    item.setAttribute(
      "style",
      "background-image: linear-gradient(135deg, hsl(" +
        z +
        ", 60%, 83%), hsl(" +
        y +
        ", 85%, 65%));"
    );
  }
}

gradientMaker(1000 * Math.random());
