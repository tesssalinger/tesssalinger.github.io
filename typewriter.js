const text = "Tess Salinger"; // Text to be displayed with typewriting effect
let index = 0;

function type() {
  if (index < text.length) {
    setTimeout(() => {
      document.getElementById("typewriter").innerHTML += text.charAt(index);
      index++;
      type(); // Call type() recursively for the next character
    }, 400); // Set a fixed delay of 400 milliseconds for each character
  } else {
    // After typing is complete, show cursor and schedule its disappearance
    document.getElementById("typewriter").classList.add("cursor-blink");
    setTimeout(() => {
      document.getElementById("typewriter").classList.remove("cursor-blink");
    }, 5000); // Hide cursor after 5 seconds
  }
}

type();
