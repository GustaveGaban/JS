let num=-1;
let result=""

do {
    num = parseInt (num)+1 ;
   result = result+"<li>"+"2^"+num+" = "+Math.pow(2,num)+"</li>"
  } while (num < 16);

document.getElementById("list1").innerHTML=result;
