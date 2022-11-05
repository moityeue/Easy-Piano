//quiz //
const audioQuiz = document.querySelectorAll('div audio');
const btnQuiz = document.getElementsByClassName('.notes');
let playBtnQuiz = document.getElementById("tracks");
// let audio;

const notes = document.querySelectorAll('.notes');
const doM = document.querySelector('.do');
const reM = document.querySelector('.ré');
const miM = document.querySelector('.mi');
const faM = document.querySelector('.fa');
const solM = document.querySelector('.sol');
const laM = document.querySelector('.la');
const siM = document.querySelector('.si');
let score = document.getElementById("score");

//lecture aléatoire des notes - démarrage du quiz//
playBtnQuiz.addEventListener('click', (e) =>{
    function RandArray(audioQuiz){
    var rand = Math.random()*audioQuiz.length | 0;
    var rValue = audioQuiz[rand];
    return rValue;    
}
playBtnQuiz.onclick = function () {
    function RandArray(audioQuiz){
    var rand = Math.random()*audioQuiz.length | 0;
    var rValue = audioQuiz[rand];
    return rValue;    
}

let MaudioQuiz = [];
const rValue = RandArray(audioQuiz);
rValue.play();

for(i= 0 ; i<audioQuiz.length   ; i++){}
//click notes réponses-Comparaison des deux réponses + points//
notes.forEach((item) => {
    item.addEventListener('click', function(e) {
        if(e.target.id == rValue.innerText){
            alert('bravo'); 
            if( e.target.id == rValue.innerText){
            }
        }
    })
})

}
//récupération des notes//
let doB = document.getElementById("do");
let reB = document.getElementById("ré");
let miB = document.getElementById("mi");
let faB = document.getElementById("fa");
let solB = document.getElementById("sol");
let laB = document.getElementById("la");
let siB = document.getElementById("si");
let notes = document.querySelectorAll('.click');

let reponse= document.getElementById("reponse");

function RandArray(audioQuiz){
    var rand = Math.random()*audioQuiz.length | 0;
    var rValue = audioQuiz[rand];
    return rValue;   
}



let juste = 0;
for (let i=0; i<=7; i++) {
 
    doB.onclick = function  (e) {
    if(doB.innerText == rValue.innerText){
        doB.style.background = "green";
            reponse.innerHTML = "✔" + "Bravo!!";
            juste++; 
    } else {
            reponse.innerHTML= "❌" + "Dommage!!!";
            doB.style.background = "red";
            
            
    }  setTimeout(function() {
        doB.style.background = "";
        reponse.innerHTML = ""; 
     }, 2000);
    }
    reB.onclick = function  (e) {
        if(reB.innerText == rValue.innerText){
            reB.style.background = "green";
            reponse.innerHTML = "✔" + "Bravo!!";
            juste++; 
        } else {
            reponse.innerHTML= "❌" + "Dommage!!!";
            reB.style.background = "red";
        } setTimeout(function() {
            reB.style.background = "";
            reponse.innerHTML = ""; 
         }, 2000);
    }
    miB.onclick = function  (e) {
        if(miB.innerText == rValue.innerText){
            miB.style.background = "green";
            reponse.innerHTML = "✔" + "Bravo!!";
            juste++; 
        } else {
            reponse.innerHTML= "❌" + "Dommage!!!";
            miB.style.background = "red";
        }
        setTimeout(function() {
            miB.style.background = "";
            reponse.innerHTML = ""; 
         }, 2000);
    }
    faB.onclick = function  (e) {
        if(faB.innerText == rValue.innerText){
            faB.style.background = "green";
            reponse.innerHTML = "✔" + "Bravo!!";
            juste++; 
        } else {
            reponse.innerHTML= "❌" + "Dommage!!!";
            faB.style.background = "red";
        }
        setTimeout(function() {
            faB.style.background = "";
            reponse.innerHTML = ""; 
         }, 2000);
    }
    solB.onclick = function  (e) {
        if(solB.innerText == rValue.innerText){
            solB.style.background = "green";
            reponse.innerHTML = "✔" + "Bravo!!";
            juste++; 
        } else {
            reponse.innerHTML= "❌" + "Dommage!!!";
            solB.style.background = "red";
        }
        setTimeout(function() {
            solB.style.background = "";
            reponse.innerHTML = ""; 
         }, 2000);
    }
    laB.onclick = function  (e) {
        if(laB.innerText == rValue.innerText){
            juste++; 
            laB.style.background = "green";
            reponse.innerHTML = "✔" + "Bravo!!";
        } else {
            reponse.innerHTML= "❌" + "Dommage!!!";
            laB.style.background = "red";
        }
        setTimeout(function() {
            laB.style.background = "";
            reponse.innerHTML = ""; 
         }, 2000);
    }
    siB.onclick = function  (e) {
        if(siB.innerText == rValue.innerText){
            juste++; 
            siB.style.background = "green";
            reponse.innerHTML = "✔" + "Bravo!!";
        } else {
            reponse.innerHTML= "❌" + "Dommage!!!";
            siB.style.background = "red";
        }
        setTimeout(function() {
            siB.style.background = "";
            reponse.innerHTML = ""; 
         }, 2000);
        
    }
 
}

const rValue = RandArray(audioQuiz);
let MaudioQuiz = [];
console.log(rValue.innerText);
});


// let notes = document.getElementById("container");
// let result = document.getElementById("reponse");
// let start = document.getElementById("tracks");
// let nbrQuestion = document.getElementById("nbrNote");
// let note_screen = document.getElementById("note_screen");

// let audio = document.getElementById("onclick");
// // console.log(audio.textContent);
// // console.log(notes.textContent);

// start.addEventListener('click', (e) => {
//     for (let i = 0; i <= 7; i++) {
//         console.log(CurrentNote);
//     }
// });


// function QuizMusic() {
//     this.notes = [];
//     this.audio = [];
//     this.indexCurrentNote = 0;
//     this.nbrCorrects = 0;

//     this.addNote = function(note){
//         this.notes.push(note.textContent);
//     }

//     this.displayCurrentNote = function(){
//         if(this.indexCurrentNote < this.notes.length){
//             this.notes[this.indexCurrentNote].getElement(this.indexCurrentNote + 1, this.notes.length);
//         } else {
//             alert('bonjour');
//         }
//     }
// }

// function Note(title , anwers, answersCorrects){
//     this.title = title,
//     this.anwers = answers;
//     this.answers = answersCorrects

//     this.getElement = function(indexNote, nbrOfNotes){
//         let noteTitle = document.createElement("h3");
//         noteTitle.classList.add("reponse");
//         noteTitle.textContent = this.title;

//         result.append(noteTitle);

//         let noteAnswer = document.createElement("ul");
//         noteAnswer.classList.add("list_notes");

//         this.answers.forEach((answer , index) => {
//             let answerElement = document.createElement("li");
//             answerElement.classList.add(answers);
//             answerElement.textContent = answer;
//             answerElement.id = index + 1;
//             answserElement.addEventListener("click",this.chekAnswer);
//             noteAnswer.appendChild(answerElement);
//         })

//         let noteNumber = document.createElement("h4");
//         noteNumber.classList.add("nbrNotes");
//         noteNumber.textContent = "Note numéro :" + indexNote + "/ " + nbrOfNotes;

//         nbrQuestion.append(noteNumber);
//         nbrQuestion.append(noteAnswer);
//     }
//     this.addAnswer = function(answer){
//         this.answers.push(anwser);
//     },

//     this.chekAnswer = (e) => {
//         let answerSelect = e.target;
//         if(this.isCorrectAnswer(answerSelect.Id)){
//             answerSelect.classList.add("juste");

//             quizMusic.nbrCorrects++;
//         }
//         else {
//             answerSelect.classList.add("faux");

//         }
//         setTimeout(function() {
//             note_screen.textContent = '';
//             quizMusic.indexCurrentNote++;
//             quizMusic.displayCurrentNote();
//         }, 2000);

//     }

//     this.isCorrectAnswer = function(answerUser) {
//         if(answerUser == this.answerCorrect) {
//             return true;
//         }
//         else {
//             return false;
//         }
//     }
   
// };

// let quizMusic = new QuizMusic();

// let note1 = new Note(audio, ["do", "ré", "mi", "fa", "sol"] , 2);

// quizMusic.addNote(note1);
// console.log(note1);