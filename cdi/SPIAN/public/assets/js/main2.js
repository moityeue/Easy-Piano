//quiz //
const audioQuiz = document.querySelectorAll('div audio');
const btnQuiz = document.getElementsByClassName('.notes');
let playBtnQuiz = document.getElementById("tracks");

let rValue;
let audio;


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

let MaudioQuiz = [];
let rValue = RandArray(audioQuiz);
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

let faux = document.getElementById("faux");
let juste = document.getElementById("juste");
let nbJuste =0;
let y = nbJuste++;
let nbFaux = 0;
let reponse = document.getElementById("reponse");
let boutonValider = document.getElementById("boutonValider");
question.content = "Quelle note as tu entendu?";
let n = 0;
console.log(rValue.innerText);
boutonValider.onclick= function () {
    let score = document.getElementById("score");
    if (reponse.value.toLowerCase() === rValue.innerText){
        reponse.value= "bravo!!!";  
        for(let nbJuste = 0; nbJuste <= audioQuiz.length ; nbJuste++){
          console.log(nbJuste++);
        }
        
    } else {
        reponse.value= ":-(";
        nbFaux += 1;
        faux.textContent = nbFaux;
    }
    setTimeout(function () {reponse.value=""},2000);
}
reponse.addEventListener('keydown', function(e){

})
})







