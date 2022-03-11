const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

const choseImg = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${choseImg}`;
// console.log(bgImage);

document.body.appendChild(bgImage);