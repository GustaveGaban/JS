let longueur=prompt("Choisissez une longueur en cm:");
let largeur=prompt("Choisissez une largeur en cm:");
let surface= longueur*largeur;
console.log("Le rectangle de longueur "+longueur+" cm et de largeur "+largeur+" cm a une aire de "+surface+" cm².");

let messagehtml=document.getElementById("messagehtml");
messagehtml.innerHTML="Le rectangle de longueur "+longueur+" cm et de largeur "+largeur+" cm a une aire de "+surface+" cm².";