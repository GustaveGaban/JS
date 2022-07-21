let prenom = "Victor";
let age = "32";
age++;
let message = "Je suis "+prenom+" et j\'aurai "+age+" l\'an prochain.";
console.log(message);

//Afficher dans le html//
let messagehtml=document.getElementById("messagehtml");
messagehtml.innerHTML="Je suis "+prenom+" et j\'aurai "+age+" l\'an prochain.";
