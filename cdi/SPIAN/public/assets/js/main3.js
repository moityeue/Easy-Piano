
    //Play Audio//
    const zikUn = new Audio('public/assets/sounds3/Petit Papa Noël.mp3');
    const zikDeux = new Audio('public/assets/sounds3/La panthère rose.mp3');
    const zikTrois = new Audio('public/assets/sounds3/Frère Jacques.mp3');
    const zikQuatre = new Audio('public/assets/sounds3/Lettre à Elise.mp3');
    const zikCinq = new Audio('public/assets/sounds3/Raiponce.mp3');
    const zikSix = new Audio('public/assets/sounds3/Les Choristes.mp3');
    const zikSept = new Audio('public/assets/sounds3/Ce rêve bleu.mp3');
    const zikHuit = new Audio('public/assets/sounds3/Joyeux anniversaire.mp3');
    const zikNeuf = new Audio('public/assets/sounds3/Au clair de la lune.mp3');
    const zikDix = new Audio('public/assets/sounds3/La panthère rose.mp3');

    const un = document.getElementsById('un');
    const deux = document.getElementById('deux');
    const trois = document.getElementById('trois');
    const quatre = document.getElementById('quatre');
    const cinq = document.getElementById('cinq');
    const six = document.getElementById('six');
    const sept = document.getElementById('sept');
    const huit = document.getElementById('huit');
    const neuf = document.getElementById('neuf');
    const dix = document.getElementById('dix');
    
   
console.log(btnUn);
    // deux.addEventListener('click', ()=>{
    //     zikDeux.play();
    // })
    // trois.addEventListener('click', ()=>{
    //     zikTrois.play();
    // })
    // quatre.addEventListener('click', ()=>{
    //     zikQuatre.play();
    // })
    // cinq.addEventListener('click', ()=>{
    //     zikCinq.play();
    // })
    // six.addEventListener('click', ()=>{
    //     zikSix.play();
    // })
    // sept.addEventListener('click', ()=>{
    //     zikSept.play();
    // })
    // huit.addEventListener('click', ()=>{
    //     zikHuit.play();
    // })
    // neuf.addEventListener('click', ()=>{
    //     zikNeuf.play();
    // })
    // dix.addEventListener('click', ()=>{
    //     zikDix.play();
    // })

let reponse1 = document.getElementById("anim_rep1");
let reponse2 = document.getElementById("anim_rep2");
let reponse3 = document.getElementById("anim_rep3");
let reponse4 = document.getElementById("anim_rep4");
let reponse5 = document.getElementById("anim_rep5");
let reponse6 = document.getElementById("anim_rep6");
let reponse7 = document.getElementById("anim_rep7");
let reponse8 = document.getElementById("anim_rep8");
let reponse9 = document.getElementById("anim_rep9");
let reponse10 = document.getElementById("anim_rep10");

let repUser1 = document.getElementById("input1");
let repUser2 = document.getElementById("input2");
let repUser3 = document.getElementById("input3");
let repUser4 = document.getElementById("input4");
let repUser5 = document.getElementById("input5");
let repUser6 = document.getElementById("input6");
let repUser7 = document.getElementById("input7");
let repUser8 = document.getElementById("input8");
let repUser9 = document.getElementById("input9");
let repUser10 = document.getElementById("input10");

let option1= document.getElementById("option1");

let option2= document.getElementById("option2");

let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");
let option5 = document.getElementById("option5");
let option6 = document.getElementById("option6");
let option7 = document.getElementById("option7");
let option8 = document.getElementById("option8");
let option9 = document.getElementById("option9");
let option10 = document.getElementById("option10");



const opt = document.querySelectorAll('.opt');

let buto1 = document.getElementById("boutonValidation1");

let buto2 = document.getElementById("boutonValidation2");
let buto3 = document.getElementById("boutonValidation3");
let buto4 = document.getElementById("boutonValidation4");
let buto5 = document.getElementById("boutonValidation5");
let buto6 = document.getElementById("boutonValidation6");
let buto7 = document.getElementById("boutonValidation7");
let buto8 = document.getElementById("boutonValidation8");
let buto9 = document.getElementById("boutonValidation9");
let buto10 = document.getElementById("boutonValidation10");

let search = document.getElementById("searchResult");








// buto2.onclick = function ()  {
//     if(repUser2.value == reponse2.innerText){
//         repUser2.value = "✔" ;
//         point+=1;
//     } else {
//         repUser2.value = "❌" + reponse2.innerText;
//         faux+=1;
//     }
//     console.log(point);  
// }

// buto3.onclick = function ()  {
//     if(repUser3.value == reponse3.innerText){
//         repUser3.value = "✔" ;
//         point+=1;
//     } else {
//         repUser3.value = "❌" + reponse3.innerText;
//         faux+=1;
//     }
//     console.log(point);  
// }
// buto4.onclick = function ()  {
//     if(repUser4.value == reponse4.innerText){
//         repUser4.value = "✔";
//         point+=1;
//     } else {
//         repUser4.value = "❌" + reponse4.innerText;
//         faux+=1;
//     }
//     console.log(point);  
// }
// buto5.onclick = function ()  {
//         if(repUser5.value == reponse5.innerText){
//         repUser5.value = "✔";
//         point+=1;
//     } else {
//         repUser5.value = "❌" + reponse5.innerText;
//         faux+=1;
//     }
//     console.log(point);  
// }
// buto6.onclick = function ()  {
//     if(repUser6.value == reponse6.innerText){
//         repUser6.value = "✔";
//         point+=1;
//     } else {
//         repUser6.value = "❌" + reponse6.innerText;
//         faux+=1;
//     }
//     console.log(point);  
// }
// buto7.onclick = function ()  {
//     if(repUser7.value == reponse7.innerText){
//         repUser7.value = "✔";
//         point+=1;
//     } else {
//         repUser7.value = "❌" + reponse7.innerText;
//         faux+=1;
//     }
//     console.log(point);  
// }
// buto8.onclick = function ()  {
//     if(repUser8.value == reponse8.innerText){
//         repUser8.value = "✔";
//         point+=1;
//     } else {
//         repUser8.value = "❌" + reponse8.innerText;
//         faux+=1;
//     }
//     console.log(point);  
// }
// buto9.onclick = function ()  {
//     if(repUser9.value == reponse9.innerText){
//         repUser9.value = "✔";
//         point+=1;
//     } else {
//         repUser9.value = "❌" + reponse9.innerText;
//         faux+=1;
//     }
//     console.log(point);  
// }
// buto10.onclick = function ()  {
//     if(repUser10.value == reponse10.innerText){
//         repUser10.value = "✔";
//         point+=1;
//     } else {
//         repUser10.value = "❌" + reponse10.innerText;
//         faux+=1;
//     }
     
// }
// }
// console.log(nbBonneRep.innerText);
