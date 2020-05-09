
function playSound(e) {
    addPlayingClass(e);
    playAudio(e);
    };

function playAudio(e){
    const audioQuery = 'audio[data-key="'+ e.keyCode + '"]'; // String interpolation doesn't work!
    const audio = document.querySelector(audioQuery);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
}

function addPlayingClass(e){
    const keyQuery = '.key[data-key="' + e.keyCode + '"]';
    const key = document.querySelector(keyQuery);
    key.classList.add('playing');
}    

function removePlayingClass(e){
    console.log('transition will happen soon!');
    if(e.propertyName !== 'transform') return;
    console.log(e.propertyName);
    const query = '.key[data-key="' + e.keyCode + '"]';
    this.classList.remove('playing');
}


const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removePlayingClass));
window.addEventListener("keydown", playSound);