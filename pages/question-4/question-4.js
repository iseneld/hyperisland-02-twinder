
// Here I make the value of the slider show!
let slider = document.getElementById("question-4-slider");
let output = document.getElementById("show-values");

output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;

  if (this.value <=100){
      output.innerHTML = sliderSentences [5]
  }
  if (this.value <= 95){
      output.innerHTML = sliderSentences [4]
  }

  if (this.value < 75){
      output.innerHTML = sliderSentences [3]
  }

  if (this.value < 60) {
      output.innerHTML = sliderSentences [2]
  }

  if (this.value < 40){
    output.innerHTML = sliderSentences[1]
    }
 
  if (this.value < 20){
    output.innerHTML = sliderSentences[0]
    }

  if (this.value < 10){
    output.innerHTML = sliderSentences[7]
    }
}

let sliderSentences = 
    ["Quite a vibe actually", "Not bothered", "I´m fine", "My day was good before this",  "I want to destroy something", "Where's the nearest bridge?", "Drag slider!", "I actually feel happier now"];

output.innerHTML = sliderSentences [6]; 


function testtest(e) {
  // read the value from the slider:
  var value = document.getElementById("question-4-slider").value;
  // now compare:
  if (value > 0 && value < 5) {
      alert("First");
  } else {
      alert("Second");
  }
}