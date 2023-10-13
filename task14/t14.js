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
    var editb=document.createElement("button");

    btn.className="del";
    editb.className="edit";

    btn.appendChild(document.createTextNode("Delete"));
    editb.appendChild(document.createTextNode("Edit"));

    li.className="list-group-item";

    li.appendChild(document.createTextNode(obj.name));
    li.appendChild(document.createTextNode("-"));
    li.appendChild(document.createTextNode(obj.email));
    li.appendChild(btn);
    li.appendChild(editb);

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

itli.addEventListener("click", editItem);
function editItem(e){
    e.preventDefault();
    if(e.target.className=="edit")
    {
           
            var li=e.target.parentElement;
            
            localStorage.removeItem(li.childNodes[2].textContent);
            document.getElementById("name").value=li.childNodes[0].textContent;
            document.getElementById("mail").value=li.childNodes[2].textContent;
            itli.removeChild(li);
           

    }
   
}