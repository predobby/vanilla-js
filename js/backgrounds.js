const images = ["birds.jpg", "deer.jpg", "pier.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url('img/${chosenImage}')`;
document.body.style.backgroundSize = "cover";