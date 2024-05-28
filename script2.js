const text = "Tess Salinger"; // Text to be displayed with typewriting effect
let index = 0;
let typewriterText = "";

function type() {
  if (index < text.length) {
    typewriterText += text.charAt(index);
    document.getElementById("typewriter").innerHTML = typewriterText;
    index++;
    setTimeout(type, 100); // Adjust typing speed here
  }
}

type();
