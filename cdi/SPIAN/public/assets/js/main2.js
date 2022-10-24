//quiz //
const audioQuiz = document.querySelectorAll('div audio');
const btnQuiz = document.getElementsByClassName('.notes');
let playBtnQuiz = document.getElementById("tracks");
let playHb = document.querySelector('.btn_list3');
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

//click notes réponses-Comparaison des deux réponses + points//
notes.forEach((item) => {

    item.addEventListener('click', function(e) {
       
        if(e.target.id == rValue.innerText){
            alert('bravo'); 
            alert(rValue); 
            if( e.target.id == rValue.innerText){
                let point = 0;
                let result = document.getElementById('score');
                point ++;
            }
        }
    })
})
//chrono//
timeLeft = 10;
timeOut = document.querySelector('time');
function countdown() {
	timeLeft--;
	document.getElementById("seconds").innerHTML = String( timeLeft );
	if (timeLeft > 0) {
        setTimeout(countdown, 1000);
    }  
};

setTimeout(countdown, 1000);
})

   




