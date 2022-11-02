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
 let faux = document.getElementById("faux");
 let juste = document.getElementById("juste");
doB.onclick = function  (e) {
   if(doB.innerText == rValue.innerText){
        
        reponse.innerHTML = "✔" + "Bravo!!";
   } else {
        reponse.innerHTML= "❌" + "Dommage!!!";
    
   }
}
reB.onclick = function  (e) {
    if(reB.innerText == rValue.innerText){
        reponse.innerHTML = "✔" + "Bravo!!";
    } else {
         reponse.innerHTML= "❌" + "Dommage!!!";
    }
}
miB.onclick = function  (e) {
    if(miB.innerText == rValue.innerText){
        reponse.innerHTML = "✔" + "Bravo!!";
    } else {
         reponse.innerHTML= "❌" + "Dommage!!!";
    }
}
faB.onclick = function  (e) {
    if(faB.innerText == rValue.innerText){
        reponse.innerHTML = "✔" + "Bravo!!";
    } else {
         reponse.innerHTML= "❌" + "Dommage!!!";
    }
}
solB.onclick = function  (e) {
    if(solB.innerText == rValue.innerText){
        reponse.innerHTML = "✔" + "Bravo!!";
    } else {
         reponse.innerHTML= "❌" + "Dommage!!!";
    }
}
laB.onclick = function  (e) {
    if(laB.innerText == rValue.innerText){
        reponse.innerHTML = "✔" + "Bravo!!";
    } else {
         reponse.innerHTML= "❌" + "Dommage!!!";
    }
}
siB.onclick = function  (e) {
    if(siB.innerText == rValue.innerText){
        reponse.innerHTML = "✔" + "Bravo!!";
    } else {
         reponse.innerHTML= "❌" + "Dommage!!!";
    }
}
const rValue = RandArray(audioQuiz);
let MaudioQuiz = [];
console.log(rValue.innerText);

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


});
