// Random Background //
const superContainer = document.querySelector('#superContainer');
let rNumber = Math.random() * (2);
rNumber = Math.round(rNumber);
const bg = `url("../img/backgrounds/bg-${rNumber}.jpg")`;
superContainer.style.backgroundImage = bg;