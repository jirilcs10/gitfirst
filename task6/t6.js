//  var il=document.querySelector("#items");
//  console.log(il.parentNode);  

// var il=document.querySelector("#items");
// console.log(il.parentElement.parentElement);   

//  console.log(il.childNodes);

// console.log(il.children);
// console.log(il.firstChild); 
// console.log(il.firstElementChild); 
// il.firstElementChild.textContent="Hello 1";

// console.log(il.lastChild); 
//  il.firstChild.textContent="Hello";
// console.log(il.lastElementChild); 
// il.lastElementChild.style.backgroundColor="grey";

// console.log(il.nextSibling);
// console.log(il.nextElementSibling);
// il.nextElementSibling.style.color="red";

// console.log(il.previousSibling);
// console.log(il.previousElementSibling); 
// il.previousElementSibling.style.color="Green";

 var newDiv1=document.createElement('div');
 var newDiv2=document.createElement('div');
// console.log(newDiv);

newDiv1.className="newdiv1";
newDiv1.id="newdiv1";
newDiv1.setAttribute("title","New Div 1");

var newDivText1=document.createTextNode('HEllo word');
newDiv1.appendChild(newDivText1);
console.log(newDiv1);

var cont=document.querySelector('header .container');

var h1=document.querySelector('header h1');

cont.insertBefore(newDiv1,h1);

newDiv2.className="newdiv2";
newDiv2.id="newdiv2";
// newDiv2.setAttribute("id","NewDiv2");
newDiv2.setAttribute("title","New Div 2");
console.log(newDiv2);
var newDivText2=document.createTextNode('HEllo word');
newDiv2.appendChild(newDivText2);

newDiv2.appendChild(newDivText2);

var ul1=document.querySelector("ul");
var it1=document.querySelector("ul li");

ul1.insertBefore(newDiv2,it1);


  
  