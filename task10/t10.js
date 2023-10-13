var form=document.getElementById("my-form");
var i=0;
form.addEventListener("submit",submitForm);


function submitForm(e)
{   e.preventDefault();
    
        i=localStorage.getItem("index");
        i++;

    localStorage.setItem("index",i);
    localStorage.setItem("Name"+i,document.getElementById('name').value);
    localStorage.setItem("Email"+i,document.getElementById('mail').value);

}
