const textElement = document.getElementById('text');

const phrases = [
   " Beginner as  ",
   " A Software ",
   " Engineer"
];

let index = 0;

function updateText() {
    textElement.textContent = phrases[index];
    index = (index + 1) % phrases.length;
}

// Initial update
updateText();

// Update the text every 3 seconds (3000 milliseconds)
setInterval(updateText, 1000);