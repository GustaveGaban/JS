let longueur=10;
let largeur=5;
let surface= longueur*largeur;
let message="Le rectangle de longueur "+longueur+" cm et de largeur "+largeur+" cm a une aire de "+longueur*largeur+" cm.";
console.log(message);

let messagehtml=document.getElementById("messagehtml");
messagehtml.innerHTML="Le rectangle de longueur "+longueur+" cm et de largeur "+largeur+" cm a une aire de "+longueur*largeur+" cm.";