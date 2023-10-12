var form=document.getElementById("addForm");
var itli=document.getElementById("items");

form.addEventListener("submit", addItem);



function addItem(e){

e.preventDefault();

var newit=document.getElementById("item").value;
var li=document.createElement("li");
li.className="list-group-item";

li.appendChild(document.createTextNode(newit));

var delb=document.createElement("button");
delb.className="btn btn-danger btn-sm float-right delete";
delb.appendChild(document.createTextNode('X'));


li.appendChild(delb);

var editb=document.createElement("button");
editb.className="btn btn-dark btn-sm float-right edit";
editb.appendChild(document.createTextNode('Edit'));
li.appendChild(editb);

itli.appendChild(li);

}

itli.addEventListener("click", removeItem);
function removeItem(e){
    if(e.target.classList.contains('delete'))
    {
        if(confirm("Are you sure")){
            var li=e.target.parentElement;
            itli.removeChild(li);
        }

    }
   
}


var li=document.getElementsByClassName("list-group-item");

for(var i=0;i<li.length;i++)
{
var editb=document.createElement("button");
editb.className="btn btn-dark btn-sm float-right edit";
editb.appendChild(document.createTextNode('Edit'));
li[i].appendChild(editb);

}

