
let messagehtml=document.getElementById("messagehtml");
question = prompt("En quelle année Christophe Colomb a découvert l'Amérique ?");




if (question=="1492"){
 messagehtml.innerHTML=("Vous avez trouvé !");
}

else{
    messagehtml.innerHTML=("non, ce n'est pas la bonne réponse.");
}


