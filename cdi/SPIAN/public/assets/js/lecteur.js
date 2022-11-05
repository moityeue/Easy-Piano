//play Audio//
const zikUn = new Audio('public/assets/sounds3/Au clair de la lune.mp3');
const zikDeux = new Audio('public/assets/sounds3/Bella ciao.mp3');
const zikTrois = new Audio('public/assets/sounds3/Ce rêve bleu.mp3');
const zikQuatre = new Audio('public/assets/sounds3/Frère Jacques.mp3');
const zikCinq = new Audio('public/assets/sounds3/Joyeux anniversaire.mp3');
const zikSix = new Audio('public/assets/sounds3/La panthère rose.mp3');
const zikSept = new Audio('public/assets/sounds3/Les Choristes.mp3');
const zikHuit = new Audio('public/assets/sounds3/Lettre à Elise.mp3');
const zikNeuf = new Audio('public/assets/sounds3/Petit Papa Noël.mp3');
const zikDix = new Audio('public/assets/sounds3/Raiponce.mp3');

 let btnA = document.getElementById("un");
 let btnB = document.getElementById("deux");
 let btnC = document.getElementById("trois");
 let btnD = document.getElementById("quatre");
 let btnE = document.getElementById("cinq");
 let btnF = document.getElementById("six");
 let btnG = document.getElementById("sept");
 let btnH = document.getElementById("huit");
 let btnI = document.getElementById("neuf");
 let btnJ = document.getElementById("dix");

   


    
    btnA.addEventListener('click', ()=>{
        zikUn.play();  
    })
    btnB.addEventListener('click', ()=>{
        zikDeux.play();
    })
    btnC.addEventListener('click', ()=>{
        zikTrois.play();
    })
    btnD.addEventListener('click', ()=>{
        zikQuatre.play();
    })
    btnE.addEventListener('click', ()=>{
        zikCinq.play();
    })
    btnF.addEventListener('click', ()=>{
        zikSix.play();
    })
    btnG.addEventListener('click', ()=>{
        zikSept.play();
    })
    btnH.addEventListener('click', ()=>{
        zikHuit.play();
    })
    btnI.addEventListener('click', ()=>{
        zikNeuf.play();
    })
    btnJ.addEventListener('click', ()=>{
        zikDix.play();
    })
