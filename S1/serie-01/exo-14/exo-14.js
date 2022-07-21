let list="";

for (let n2 = Math.pow(2,0) ; n2 < Math.pow(2,17); n2=n2+Math.pow(n2,1)) {
    list = list+"<li>"+n2+"</li>";    
}

let ul1=document.getElementById("list1");
list1.innerHTML=list