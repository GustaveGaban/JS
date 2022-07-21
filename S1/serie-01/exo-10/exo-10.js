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

let messagep1=document.getElementById("p1");
messagep1.innerHTML=result;
