const errorMessage = document.querySelector(".error-message")

const form = document.querySelector("form");
const fname = document.querySelector("#first-name")
const surname = document.querySelector("#last-name")
const mail = document.querySelector("#email")
const phone = document.querySelector("#phone")
const password = document.querySelector("#password")
const passwordCheck = document.querySelector("#password2")
const inputs = document.querySelectorAll("input")
errorMessage.textContent = "No error"
let validity = false

password.addEventListener("input", (event) =>{
    
    if(password.validity.tooShort){
        errorMessage.textContent = "Password too short"
    } else {
        errorMessage.textContent = ""
    }
})

inputs.forEach(input => {
    input.addEventListener("click", () => {
        input.classList.remove("error-red");
    });
});

  mail.addEventListener("input", (event) => {
    if(mail.validity.typeMismatch ){
        errorMessage.textContent = "Value must be e-mail"
        validity = true
    } else {
        errorMessage.textContent=""
        validity = false
    }
  });

form.addEventListener("submit", (event) => {

    const notValid = formIsValid()
    if (notValid == true) {
      event.preventDefault();
    }
  });

  passwordCheck.addEventListener("input", (event) => {
    
    if(password.value != passwordCheck.value){
        errorMessage.textContent = "Passwords doesn't match"
        } else {
            errorMessage.textContent = ""
        }
  });


// AFTER BUTTON PRESS  
function formIsValid(){

for (i = 0; i < inputs.length; ++i) {

    if(password.value != passwordCheck.value){
        errorMessage.textContent = "Passwords doesn't match"
        validity= true
        } else {
            errorMessage.textContent = ""
        }

    if(inputs[i].validity.valueMissing){
        errorMessage.textContent = "*You need to fill all fields"
        inputs[i].classList.add("error-red");
        validity = true
    }
  }
 
    return validity
    
}



