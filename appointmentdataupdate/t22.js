var form=document.getElementById("my-form");
var id1;
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
    
    if(axios.get(`https://crudcrud.com/api/d5547f45cdbc480880b805c90cc30862/appointmentData/${id1}`))
     {
         axios.put(`https://crudcrud.com/api/d5547f45cdbc480880b805c90cc30862/appointmentData/${id1}`,obj)
         .then(response=>{
            console.log(response)
            axios.get(`https://crudcrud.com/api/d5547f45cdbc480880b805c90cc30862/appointmentData/${id1}`)
            .then(response=>{
                console.log(response)
                showOnScreen(response.data) 
            }).catch(err=>console.log(err))
        })
        .catch(err=>console.log(err))
     }
     else{
    axios.post('https://crudcrud.com/api/d5547f45cdbc480880b805c90cc30862/appointmentData',obj) 
    .then(response=>{

        console.log(response);
        showOnScreen(response.data);
    })
    .catch(err=>{
        document.body.innerHTML=document.body.innerHTML+"<h3 align='center'>something went wrong</h3>"
        console.log(err);
    })
     }
    document.getElementById('name').value="";
    document.getElementById('mail').value="";
    document.getElementById('phno').value="";
   
     
}
function showOnScreen(appdata){
    
    var li=document.createElement("li");
    var btn=document.createElement("button");
    var editb=document.createElement("button");
    var hid=document.createElement("P");
    hid.hidden=true;

    btn.className="del";
    editb.className="edit";

    btn.appendChild(document.createTextNode("Delete"));
    editb.appendChild(document.createTextNode("Edit"));
    hid.appendChild(document.createTextNode(appdata._id))
    
    li.className="list-group-item";

    li.appendChild(document.createTextNode(appdata.name));
    li.appendChild(document.createTextNode("-"));
    li.appendChild(document.createTextNode(appdata.email));
    li.appendChild(document.createTextNode("-"));
    li.appendChild(document.createTextNode(appdata.phno));
    li.appendChild(hid);
    li.appendChild(btn);
    li.appendChild(editb);
    itli.appendChild(li);
}

window.addEventListener("DOMContentLoaded",()=>{
    axios.get('https://crudcrud.com/api/d5547f45cdbc480880b805c90cc30862/appointmentData')
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
        const id=li.childNodes[5].textContent
        console.log(id);
        axios.delete(`https://crudcrud.com/api/d5547f45cdbc480880b805c90cc30862/appointmentData/${id}`)
          .then(res=>console.log(res))
          .catch(err=>console.log(err));
            itli.removeChild(li);  

        }
    }
   


itli.addEventListener("click", editItem);
function editItem(e){
    e.preventDefault();
    if(e.target.className=="edit")
    {
           
            var li=e.target.parentElement;
            id1=li.childNodes[5].textContent;
            console.log(id1);
            

            document.getElementById("name").value=li.childNodes[0].textContent;
            document.getElementById("mail").value=li.childNodes[2].textContent;
            document.getElementById("phno").value=li.childNodes[4].textContent;

            itli.removeChild(li);
           

    }
   
}