let keyboard = document.querySelector('.piano__keyboard');
let pianoNotes = ['C', 'D', 'E', 'F', 'G','A','B'];
let keyboardMap = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'A', 'Z', 'E', 'R', 'T', 'Y','U', 'I', 'O', 'P', 'Q', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'W', 'X', 'C', 'V', 'B', 'N'];
let playBtn = document.querySelector('.piano__play-btn');
 let playBtn2 = document.querySelector('.btn_list3');
let keys = [];

// let happyBirthday = `G1,G1,A1,G1,G1,B1,G1,G1,A1,G1,D1,C1,G1,G1,G1,E1,C1,B1,A1,F1,F1,E1,C1,D1,C1`;
let happyBirthday = `F4,F4,A4,G4,C4,B4`;
          
//activation bouton play//                   
let playSong =  (notesString, tempo) => {
    let notes = notesString.split(',');
    let currentNote = 0;
    let mousedown = new Event('mousedown');
    let interval = setInterval(() => {
        if(currentNote < notes.length){
            let btn = document.querySelector(`[data-letter-note="${notes[currentNote]}"]`);
            btn.dispatchEvent(mousedown);
            currentNote++;
        } else {
            clearInterval(interval);
        }
    }, 800);
}  
playBtn.addEventListener('mousedown' , () => {
    playSong(happyBirthday, );
})                
playBtn2.addEventListener('mousedown' , () => {
    playSong(happyBirthday, 1);
})                
//on initialise chaque touches//
let init = () => {
    for(let i = 1; i <= 3; i++){
        for(let j = 0; j < 7; j++){
           let key = createKey('white', pianoNotes[j], i);
           key.dataset.keyboard = keyboardMap[j + (i-1) * 7];
           keyboard.appendChild(key);
           
           
           if(j != 2 && j !=6){
            key = createKey('black', pianoNotes[j], i);
            key.dataset.keyboard = '↑+'  + keyboardMap[j + (i-1) * 7];
            let emptySpace = document.createElement('div');
            emptySpace.className = 'empty-space';
            emptySpace.appendChild(key);
            keyboard.appendChild(emptySpace);
           }
        }
    }
}

//création des touches//
let createKey = (type, note, octave) => {
    let key = document.createElement('button');
    key.className = `piano__key piano__key--${type}`;
    key.dataset.letterNote = type == 'white' ? note + octave : note + '#' +octave;
    key.dataset.letterNoteFileName = type == 'white' ? note + octave : note + 's' +octave;
    key.textContent = key.dataset.letterNote;

    
//animation couleur des touches//
    key.addEventListener('mousedown', () => {
        playSound(key);
        key.classList.add('piano__key--playing');
    })
    key.addEventListener('mouseup', () => {
        key.classList.remove('piano__key--playing');
    } )
    key.addEventListener('mouseleave', () => {
        key.classList.remove('piano__key--playing');
    })
    return key;
}
//évenements des touches//
document.addEventListener('keyup', (e) => {
    let lastLetter = e.code.substring(e.code.length -1);
    let isShiftPressed = e.shiftKey;
    let selector;
    if(isShiftPressed){
        selector = `[data-keyboard="↑+${lastLetter}"]`;
    } else {
        selector = `[data-keyboard=${lastLetter}]`;
    }
    let key = document.querySelector(selector);
    if(key !== null){
        let mouseup = new Event('mouseup');
        key.dispatchEvent(mouseup);
    }
})

//bouton shift touches noires//
document.addEventListener('keydown', (e) => {
    let lastLetter = e.code.substring(e.code.length -1);
    let isShiftPressed = e.shiftKey;
    let selector;
    if(isShiftPressed){
        selector = `[data-keyboard="↑+${lastLetter}"]`;
    } else {
        selector = `[data-keyboard=${lastLetter}]`;
    }
    let key = document.querySelector(selector);
    if(key !== null){
        let mousedown = new Event('mousedown');
        key.dispatchEvent(mousedown);
    }
})

//lecture des notes importées//
let playSound = (key) => {
    let audio = document.createElement('audio');
    audio.src = './public/assets/sounds/' + key.dataset.letterNoteFileName + '.mp3';
    audio.play().then(() => audio.remove());  
}

init();



// window.addEventListener('click', (e) => {
//     const circle = document.createElement('div')
//     circle.className = 'welcome'
//     circle.style.top = `${e.pageY - 50}px`
//     circle.style.left = `${e.pageX - 50}px`
//     document.body.appendChild(circle)
//     setTimeout(() => {
//         circle.remove();
//     },1500)
// })





