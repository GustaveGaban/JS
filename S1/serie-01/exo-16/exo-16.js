let nombre="";
let result="";
let num= -1;


do{
    nombre=prompt("Saisissez un nombre entre 0 et 100 inclus :");
}
while((nombre<0)||(nombre>100)||(isNaN(nombre)));
console.log(nombre);


do {
   num = parseInt (num)+1 ;
   result = result+"<li>"+"2^"+num+" = "+Math.pow(2,num)+"</li>";
  } while (num < nombre);

document.getElementById("liste1").innerHTML=result;


