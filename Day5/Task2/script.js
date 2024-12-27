function saveFormData(){
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
}

function loadFormData(){
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    if(name){
        document.querySelector("#name").value= name;
        document.querySelector("#email").value = email;
    }
}

document.querySelector("#name").addEventListener("input", saveFormData);
document.querySelector("#email").addEventListener("input", saveFormData);

window.onload = loadFormData;
