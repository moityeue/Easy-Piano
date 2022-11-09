let arrayNotes = ['DO', 'RE', 'MI', 'FA', 'SOL', 'LA', 'SI'];
let arrayNotesRandom = [];
for (i=0;i<3;i++) {
    let notesRandom = arrayNotes.sort(()=> Math.random()- 0.5);
    arrayNotesRandom = arrayNotesRandom.concat(notesRandom);
}

console.log(arrayNotesRandom);
let indice=0;
let button = document.getElementById('buttonNotes');
let compte = 0;
let point = 0;
let click = 0;
let plus = document.getElementById('plus');
let suivant = document.getElementById('suivant');

//faire apparaitre les notes//
function viewButtonsNote(){
    for(i=0; i<arrayNotes.length; i++){
     document.getElementById("buttonNotes").innerHTML +=     
        '<button onclick="buttonClickNotes(this)" id="'+ arrayNotes[i]+'">'+arrayNotes[i]+'</button>';
    } 
}

 viewButtonsNote();

//récupérer l'audio//
function viewAudios(){
    for(i=0; i<arrayNotes.length; i++){
    document.getElementById("notes").innerHTML += '<audio id="play_' + arrayNotes[i]+'" class="click" src="public/assets/sounds2/' + arrayNotes[i]+'.mp3">'+arrayNotes[i] +'</audio>';
    }
    
}
viewAudios();

//lecture des notes "Jouer"//
function playAudio(){ 
    var a = document.getElementById('play_'+arrayNotesRandom[indice]);
    a.play();
     
};

//sélectionner la note suivante//
function Suivant(){
    indice++;
    if(indice >= 3*7) indice = 0;
    for(i=0; i<arrayNotes.length; i++){
       document.getElementById(arrayNotes[i]).style.background = '';  
    }
    playAudio();
    suivant.style.display = 'none';
}

function buttonClickNotes(balise){ 
   let nom = balise.id;
    click++;
    document.getElementById('plus').innerHTML = click + ' votre nombre de clics';
   if(nom == arrayNotesRandom[indice] ){
        balise.style.background = 'green';
        
     suivant.style.display = 'block';
    } else {
    balise.style.background = 'red';
   }
   if(click == 10){
    console.log(click );
   }
}

// //quiz //
// const audioQuiz = document.querySelectorAll('div audio');
// const btnQuiz = document.getElementsByClassName('.notes');
// let playBtnQuiz = document.getElementById("tracks");
// // let audio;
// let i = 0;
// let point = 0;
// function buttonClick() {
//     document.getElementById('plus').value++;
//     if(document.getElementById('plus').value == 10) {
//         playBtnQuiz.style.background = "red";
//         document.getElementById('plus').value = "Nouvelle Partie?", "Appuies sour 'Jouer";

//         if(playBtnQuiz.style.background = "red"){
//             setTimeout(function(){
//                 document.getElementById('plus').value = "";
//                 playBtnQuiz.style.background = "";
//             }, 3000);
//         }
//     } 
// }

// //lecture aléatoire des notes - démarrage du quiz//
// playBtnQuiz.addEventListener('click', (e) =>{
//     for(i = 0; i < 10; i++){
//             playBtnQuiz.addEventListener("click", buttonClick);
//     function RandArray(audioQuiz){
//     var rand = Math.random()*audioQuiz.length | 0;
//     var rValue = audioQuiz[rand];
//     return rValue;    
// }
//     }
// playBtnQuiz.onclick = function () {
//     function RandArray(audioQuiz){
//     var rand = Math.random()*audioQuiz.length | 0;
//     var rValue = audioQuiz[rand];
//     return rValue;    
// }

// let MaudioQuiz = [];
// const rValue = RandArray(audioQuiz);
// rValue.play();
// }
// //récupération des notes//
// let doB = document.getElementById("do");
// let reB = document.getElementById("ré");
// let miB = document.getElementById("mi");
// let faB = document.getElementById("fa");
// let solB = document.getElementById("sol");
// let laB = document.getElementById("la");
// let siB = document.getElementById("si");
// let notes = document.querySelectorAll('.click');

// let reponse= document.getElementById("reponse");

// function RandArray(audioQuiz){
//     var rand = Math.random()*audioQuiz.length | 0;
//     var rValue = audioQuiz[rand];
//     return rValue;   
// }

//     doB.onclick = function  (e) {
//     if(doB.innerText == rValue.innerText){
//         doB.style.background = "green";
//             reponse.innerHTML = "✔" + "Bravo!!";
//     } else {
//             reponse.innerHTML= "❌" + "Dommage!!!";
//             doB.style.background = "red";
            
            
//     }  setTimeout(function() {
//         doB.style.background = "";
//         reponse.innerHTML = ""; 
//      }, 2000);
     
//     }
//     reB.onclick = function  (e) {
//         if(reB.innerText == rValue.innerText){
//             reB.style.background = "green";
//             reponse.innerHTML = "✔" + "Bravo!!";
           
//         } else {
//             reponse.innerHTML= "❌" + "Dommage!!!";
//             reB.style.background = "red";
//         } setTimeout(function() {
//             reB.style.background = "";
//             reponse.innerHTML = ""; 
//          }, 2000);
//     }
//     miB.onclick = function  (e) {
//         if(miB.innerText == rValue.innerText){
//             miB.style.background = "green";
//             reponse.innerHTML = "✔" + "Bravo!!";
//         } else {
//             reponse.innerHTML= "❌" + "Dommage!!!";
//             miB.style.background = "red";
//         }
//         setTimeout(function() {
//             miB.style.background = "";
//             reponse.innerHTML = ""; 
//          }, 2000);
//     }
//     faB.onclick = function  (e) {
//         if(faB.innerText == rValue.innerText){
//             faB.style.background = "green";
//             reponse.innerHTML = "✔" + "Bravo!!";
//         } else {
//             reponse.innerHTML= "❌" + "Dommage!!!";
//             faB.style.background = "red";
//         }
//         setTimeout(function() {
//             faB.style.background = "";
//             reponse.innerHTML = ""; 
//          }, 2000);
//     }
//     solB.onclick = function  (e) {
//         if(solB.innerText == rValue.innerText){
//             solB.style.background = "green";
//             reponse.innerHTML = "✔" + "Bravo!!";
//         } else {
//             reponse.innerHTML= "❌" + "Dommage!!!";
//             solB.style.background = "red";
//         }
//         setTimeout(function() {
//             solB.style.background = "";
//             reponse.innerHTML = ""; 
//          }, 2000);
//     }
//     laB.onclick = function  (e) {
//         if(laB.innerText == rValue.innerText){
//             laB.style.background = "green";
//             reponse.innerHTML = "✔" + "Bravo!!";
//         } else {
//             reponse.innerHTML= "❌" + "Dommage!!!";
//             laB.style.background = "red";
//         }
//         setTimeout(function() {
//             laB.style.background = "";
//             reponse.innerHTML = ""; 
//          }, 2000);
//     }
//     siB.onclick = function  (e) {
//         if(siB.innerText == rValue.innerText){
//             siB.style.background = "green";
//             reponse.innerHTML = "✔" + "Bravo!!";
//         } else {
//             reponse.innerHTML= "❌" + "Dommage!!!";
//             siB.style.background = "red";
//         }
//         setTimeout(function() {
//             siB.style.background = "";
//             reponse.innerHTML = ""; 
//          }, 2000);
        
//     }

// const rValue = RandArray(audioQuiz);
// let MaudioQuiz = [];

// console.log(rValue.innerText);
// });
