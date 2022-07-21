let temperatureCelsius = 0;
let temperatureKelvin = temperatureCelsius+273.15;
let message="la temperature de "+temperatureCelsius+"° Celsius vaut "+temperatureKelvin+" en Kelvin.";
console.log(message);

let messagehtml=document.getElementById("messagehtml");
messagehtml.innerHTML="La temperature de "+temperatureCelsius+"° Celsius vaut "+temperatureKelvin+" en Kelvin.";