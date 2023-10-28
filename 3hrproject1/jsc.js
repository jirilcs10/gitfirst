var form=document.getElementById("addForm");

var itli=document.getElementById("items");
form.addEventListener("submit",submitForm);

var obj={
    amount:5,
    des:"abc",
    cat:"abc"
}

function submitForm(e)
{  if(!form.checkValidity()){
     e.preventDefault();
     form.classList.add('was-validated');
}
else{
    e.preventDefault();
   form.classList.add('was-validated');
    obj.amount=document.getElementById('exp').value;
    obj.des=document.getElementById('expdes').value;
    obj.cat=document.getElementById('cat').value;
    var li=document.createElement("li");
    var btn=document.createElement("button");
    var editb=document.createElement("button");

    btn.className="btn btn-danger btn-sm float-right del";
    editb.className="btn btn-dark btn-sm float-right edit";

    btn.appendChild(document.createTextNode("Delete"));
    editb.appendChild(document.createTextNode("Edit"));

    li.className="list-group-item";

    li.appendChild(document.createTextNode(obj.amount));
    li.appendChild(document.createTextNode("-"));
    li.appendChild(document.createTextNode(obj.des));
    li.appendChild(document.createTextNode("-"));
    li.appendChild(document.createTextNode(obj.cat));
    li.appendChild(document.createTextNode("    "));
    li.appendChild(btn);
    li.appendChild(editb);

    let obj_string=JSON.stringify(obj);

    localStorage.setItem(obj.des,obj_string);
    itli.appendChild(li);

    
   
}
}
itli.addEventListener("click", removeItem);
function removeItem(e){
    e.preventDefault();

    form.classList.remove('was-validated')
    if(e.target.classList.contains('del'))
    {
           
            var li=e.target.parentElement;
            
            localStorage.removeItem(li.childNodes[2].textContent);

            itli.removeChild(li);
           

    }
   
}

itli.addEventListener("click", editItem);
function editItem(e){
    e.preventDefault();
    form.classList.remove('was-validated')
    if(e.target.classList.contains('edit'))
    {
           
            var li=e.target.parentElement;
            
            localStorage.removeItem(li.childNodes[2].textContent);
            document.getElementById("exp").value=li.childNodes[0].textContent;
            document.getElementById("expdes").value=li.childNodes[2].textContent;
            document.getElementById("cat").value=li.childNodes[4].textContent;
            itli.removeChild(li);
           

    }
   
}