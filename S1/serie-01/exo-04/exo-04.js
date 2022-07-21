let nombre = (Math.random()*100).toFixed(0);
console.log(nombre)

let messagehtml=document.getElementById("messagehtml");
messagehtml.innerHTML="Nombre aléatoire entre 0 et 100 : "+nombre;

let nbre1_1d10=(Math.random()*9).toFixed(0);
let nbre2_1d10=(Math.random()*9).toFixed(0);
console.log(nbre1_1d10, nbre2_1d10);
let d10system=document.getElementById("d10system");
d10system.innerHTML="Système 100 avec 2D10 : "+nbre1_1d10+" et "+nbre2_1d10

