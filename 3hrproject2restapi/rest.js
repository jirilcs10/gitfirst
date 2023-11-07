
var itli;
var obj={
    price:5,
    item:"abc",
    table:"abc"
}

var form=document.getElementById("resForm");
form.addEventListener("submit",submitForm);

function submitForm(e)
{  if(!form.checkValidity()){
     e.preventDefault();
     form.classList.add('was-validated');
}
else{
    e.preventDefault();
    form.classList.remove('was-validated')
   obj.price=document.getElementById('price').value;
    obj.item=document.getElementById('item').value;
    obj.table=document.getElementById('table').value;
   
   axios.post('https://crudcrud.com/api/56425e583579459eb1dbd9cb377b5675/orders',obj) 
    .then(response=>{

        console.log(response);
        showOnScreen(response.data);
    })
    .catch(err=>{
        document.getElementById('error').innerHTML="<h3 align='center'>Uh Oh Something went wrong</h3>";
        console.log(err);
    })
    document.getElementById('price').value="";
    document.getElementById('item').value="";
    document.getElementById('table').value=""; 
}
}

function showOnScreen(appdata){

    itli=document.getElementById(appdata.table);
    var li=document.createElement("li");
    var btn=document.createElement("button");
    var hid=document.createElement("P");
    hid.hidden=true;

    btn.className="del";

    btn.appendChild(document.createTextNode("Delete"));
    hid.appendChild(document.createTextNode(appdata._id))
    
    

    li.appendChild(document.createTextNode(appdata.price));
    li.appendChild(document.createTextNode("-"));
    li.appendChild(document.createTextNode(appdata.item));
    li.appendChild(document.createTextNode("-"));
    li.appendChild(document.createTextNode(appdata.table));
    li.appendChild(hid);
    li.appendChild(btn);
 
    itli.appendChild(li);
    itli.addEventListener("click", removeItem);
}

function removeItem(e){
    e.preventDefault();

   
    if(e.target.classList.contains('del'))
    {
           
            var li=e.target.parentElement;
            itli=document.getElementById(li.childNodes[4].textContent);
            const id=li.childNodes[5].textContent;
            console.log(id);
            axios.delete(`https://crudcrud.com/api/56425e583579459eb1dbd9cb377b5675/orders/${id}`)
             .then(res=>console.log(res))
               .catch(err=>{
                document.getElementById('error').innerHTML="<h3 align='center'>Uh Oh Something went wrong</h3>"
                console.log(err);
               })

            itli.removeChild(li);
           

    }
   
}
window.addEventListener("DOMContentLoaded",()=>{
    axios.get('https://crudcrud.com/api/56425e583579459eb1dbd9cb377b5675/orders')
    .then(response=>{
        console.log(response);
        for(var i=0;i<response.data.length;i++)
        showOnScreen(response.data[i]);
    })
    .catch(err=>{
        document.getElementById('error').innerHTML="<h3 align='center'>Cannot retrieve order details</h3>"
        console.log(err);
    })
})
