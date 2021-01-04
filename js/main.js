const mainSection = document.querySelector('#mainSection');
const pistol = document.querySelector('.cGun');

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
    let rPercentage = Math.random() * 30;
    rNumber = Math.round(rNumber);
    
    const hole = document.createElement('img');
    hole.src = `../img/holes/hole-${rNumber}.png`;
    hole.classList.add('hole');
    hole.style.top = rPercentage+'%';
    hole.style.left = rPercentage+'%';
    mainSection.appendChild(hole);
    setTimeout(() => {
        mainSection.removeChild(hole);
    }, 3000);
}

// Mouse movement
window.addEventListener("mousemove", ()=>{
    
});

// Keyboard events //
window.addEventListener("keydown", function (event) {
    if(event.key === 'x'){
        shoot(gunOnHand.pistol);
    }
  },false);

window.addEventListener('click', ()=>{
    shoot(gunOnHand.pistol);
})

