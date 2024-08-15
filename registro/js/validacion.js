function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}


const colsm6 = document.getElementById('myForm');

colsm6.addEventListener ('submit', (event) => {
    const password1 = document.getElementById('password1').value;
    const password2 = document.getElementById('password2').value;   


    if (password1 !== password2) {
        alert('Las contraseñas no coinciden.');
        event.preventDefault();
} 

});