function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

const form = document.getElementById('myForm');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const alertSuccess = document.getElementById('alert-success');
const alertDanger = document.getElementById('alert-danger');

const regBtn = document.getElementById('regBtn');

regBtn.addEventListener('click', (event) => {
  event.preventDefault(); 

  const passwordValue1 = password1.value;
  const passwordValue2 = password2.value;

  if (passwordValue1 === passwordValue2) {
    
    alertSuccess.classList.remove('d-none'); 
    alertDanger.classList.add('d-none'); 
    
  } else {
    
    alertDanger.classList.remove('d-none');
    alertSuccess.classList.add('d-none'); 
  }
});
