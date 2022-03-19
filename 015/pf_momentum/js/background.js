const images = ["Female.png", "Female02.png"]; 
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img"); 

const conceptImage = document.querySelector('.concept-img');
bgImage.src =`./img/${chosenImage}`;
conceptImage.appendChild(bgImage);
 