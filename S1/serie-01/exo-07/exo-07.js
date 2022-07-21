let username=prompt("Quel est votre nom ?");
let userage=prompt("Quel âge avez-vous ?");
userage++;
console.log("vous vous appelez "+username+" et vous aurez "+userage+" ans l'an prochain.");

let messagehtml=document.getElementById("messagehtml");
messagehtml.innerHTML="Vous vous appelez "+username+" et vous aurez "+userage+" ans l'an prochain."