var form=document.getElementById("my-form");

var itli=document.getElementById("items");
form.addEventListener("submit",submitForm);

var obj={
    name:'abc',
    email:"abc@gmail.com",
    phno:"974532145"
}

function submitForm(e)
{   e.preventDefault();
    obj.name=document.getElementById('name').value;
    obj.email=document.getElementById('mail').value;
    obj.phno=document.getElementById('phno').value;
    // let obj_string=JSON.stringify(obj);

    // localStorage.setItem(obj.email,obj_string);
    axios.post('https://crudcrud.com/api/7f5bd1e509224765aa00de5e650ae05d/appointmentData',obj)
    .then(response=>{

        console.log(response);
        showOnScreen(response.data);
    })
    .catch(err=>{
        document.body.innerHTML=document.body.innerHTML+"<h3 align='center'>something went wrong</h3>"
        console.log(err);
    })

    
   

}
function showOnScreen(appdata){
    
    var li=document.createElement("li");
    var btn=document.createElement("button");
    var editb=document.createElement("button");

    btn.className="del";
    editb.className="edit";

    btn.appendChild(document.createTextNode("Delete"));
    editb.appendChild(document.createTextNode("Edit"));

    li.className="list-group-item";

    li.appendChild(document.createTextNode(appdata.name));
    li.appendChild(document.createTextNode("-"));
    li.appendChild(document.createTextNode(appdata.email));
    li.appendChild(document.createTextNode("-"));
    li.appendChild(document.createTextNode(appdata.phno));

    li.appendChild(btn);
    li.appendChild(editb);
    itli.appendChild(li);
}

window.addEventListener("DOMContentLoaded",()=>{
    axios.get('https://crudcrud.com/api/7f5bd1e509224765aa00de5e650ae05d/appointmentData')
    .then(response=>{

        console.log(response);
        for(var i=0;i<response.data.length;i++)
        showOnScreen(response.data[i]);
    })
    .catch(err=>{
        document.body.innerHTML=document.body.innerHTML+"<h3 align='center'>something went wrong</h3>"
        console.log(err);
    })
})

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