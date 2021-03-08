

// Variables
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]; // The array with the components for the hex color
const btn = document.getElementById("btn"); // Targets the btn id in html and transforms it into a js variable 
const color = document.querySelector(".color"); // Targets the span text in html and trasforms it into a js variable  

btn.addEventListener("click", function() {
    let hexColor = "#";
    for (let i = 0; i < 6; i++ ) {  
        hexColor += hex[getRandomNumber()]; // Loop to get 6 numbers
    }
    color.textContent = hexColor; // Links var "color" to hexColor in the text of html
    document.body.style.backgroundColor = hexColor; // Links var "color" to hexColor in the CSS background
})

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length)
}




