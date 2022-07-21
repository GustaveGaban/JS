nombre=(Math.random()*10).toFixed(0);
console.log(nombre);
let ask=prompt("Devinez un nombre entre 0 et 10 inclus :");
let message="";

do{
    ask=prompt("Ce n'est pas ça, essayez à nouveau. Un nombre entre 0 et 100 inclus :");
} while(nombre!=ask);


if(ask==nombre){
    message="Victoire ! Vous avez trouvé le bon nombre.";
}

let messagehtml=document.getElementById("messagehtml");
messagehtml.innerHTML=message;


