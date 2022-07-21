let celsius=prompt("saisissez une température en degrés Celsius :");
let kelvin=parseInt(celsius)+273.15;
console.log(celsius+" degrés Celsius sont égaux à "+kelvin+" Kelvin.");

let messagehtml=document.getElementById("messagehtml");
messagehtml.innerHTML=celsius+" degrés Celsius sont égaux à "+kelvin+" Kelvin.";