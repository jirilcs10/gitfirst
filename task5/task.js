 var secondli=document.querySelector(".list-group-item:nth-child(2)");
 secondli.style.backgroundColor="green";

 var thirdli=document.querySelector(".list-group-item:nth-child(3)");
 thirdli.style.visibility="hidden";

 var qall=document.querySelectorAll(".list-group-item");
 qall[1].style.color="green";

 var qodd=document.querySelectorAll("li:nth-child(odd)");
 for(var i=0;i<qodd.length;i++)
 {
    qodd[i].style.backgroundColor="green";
 }

 