let x=prompt("Saisissez un  x :");
let y=prompt("Saisissez un nombre y :");
let result=""
if(x>y){
    result="x est plus grand que y";
}
else if(x<y){
    result="x est plus petit que y";
}
else{
    result="x est égal à y.";
}

document.getElementById("p1").innerHTML=result;

