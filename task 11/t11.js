var form=document.getElementById("my-form");
var i=0;
form.addEventListener("submit",submitForm);

var obj={
    name:'abc',
    email:"abc@gmail.com"
}

function submitForm(e)
{   e.preventDefault();
    i=localStorage.getItem("index");
    i++;
    localStorage.setItem("index",i);
    obj.name=document.getElementById('name').value;
    obj.email=document.getElementById('mail').value;
    let obj_string=JSON.stringify(obj);

    localStorage.setItem("obj"+i,obj_string);

    // objnew=JSON.parse(localStorage.getItem("obj"+i));
    // console.log(objnew.name);
   

}
