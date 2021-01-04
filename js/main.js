const mainSection = document.querySelector('#mainSection');
const cGun = document.querySelector('.cGun');

// Sounds
const pistol_sound = document.createElement('audio');
pistol_sound.src = 'sounds/shots/pistol.mp3';

let gunOnHand = {
    pistol: {
        image: '',
        sound: pistol_sound,
        shootDelay: 850
    }
};

let canShoot = true;
let mouseX = 0;
let mouseY = 0;

function shoot(gun){
    if(canShoot){
        gun.sound.play();
        summonHole();
        canShoot = false; 
        setTimeout(() => {
            canShoot = true;
        }, gun.shootDelay);
    }
}

function summonHole(){
    let rNumber = Math.random() * 4;
    rNumber = Math.round(rNumber);

    const hole = document.createElement('img');
    hole.src = `../img/holes/hole-${rNumber}.png`;
    hole.style.top = mouseY+'px';
    hole.style.left = mouseX+'px';

    hole.classList.add('hole');
    mainSection.appendChild(hole);
    setTimeout(() => {
        mainSection.removeChild(hole);
    }, 3000);
}


// Keyboard events //
window.addEventListener("keydown", function (event) {
    if(event.key === 'x'){
        shoot(gunOnHand.pistol);
    }
  },false);

window.addEventListener('click', ()=>{
    shoot(gunOnHand.pistol);
})

// Mouse movement
window.addEventListener("mousemove", (event)=>{
    mouseX = event.clientX;
    mouseY = event.clientY;
    cGun.style.left = mouseX+'px';
    cGun.style.top = mouseY+'px';
});