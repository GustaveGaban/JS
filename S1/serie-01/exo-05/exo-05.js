let rayon = 10;
let surface = Math.pow(rayon,2)*Math.PI;
console.log(surface);

document.getElementById("result").innerHTML=" L'aire du cercle de rayon "+rayon+" cm est de "+surface.toFixed(2)+" cm² (arrondi au centième).";
