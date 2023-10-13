var form=document.getElementById("my-form");

var itli=document.getElementById("items");
form.addEventListener("submit",submitForm);

var obj={
    name:'abc',
    email:"abc@gmail.com"
}

function submitForm(e)
{   e.preventDefault();
   
    obj.name=document.getElementById('name').value;
    obj.email=document.getElementById('mail').value;
    var li=document.createElement("li");
    var btn=document.createElement("button");
    btn.className="del"
    btn.appendChild(document.createTextNode("delete"));
    li.className="list-group-item";

    li.appendChild(document.createTextNode(obj.name+" "));
    li.appendChild(document.createTextNode(obj.email));
    li.appendChild(btn);
    
    let obj_string=JSON.stringify(obj);

    localStorage.setItem(obj.email,obj_string);
    itli.appendChild(li);

    
   

}
itli.addEventListener("click", removeItem);
function removeItem(e){
    e.preventDefault();
    if(e.target.classList.contains('del'))
    {
           
            var li=e.target.parentElement;
            
            localStorage.removeItem(li.childNodes[1].textContent);

            itli.removeChild(li);
           

    }
   
}