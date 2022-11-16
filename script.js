let submit = document.querySelector("#inpSubmit");
let formsInput = document.querySelectorAll("#formsInput");
let span = document.querySelector("#message");
let password = document.querySelector(".password");
let confirmPassword = document.querySelector(".confirmPassword");
let mySpan = document.querySelector("#mySpan");


submit.addEventListener("click", function (event) {
  for (let index = 0; index < formsInput.length; index++) {
    if (formsInput[index].value == "") {
      event.preventDefault()
      span.innerHTML = "you must be fill all fileds"
      span.style.color = "red";
      formsInput[index].style.borderColor = "red";

    } else {
      if (password.value == confirmPassword.value) {
      
      }
       else {
        event.preventDefault()
        span.innerHTML = " Not Matching"
        span.style.color = "red";
        password.style.borderColor = "red";
        confirmPassword.style.borderColor = "red";
      }
    }

  }
})

function myFunction(){
  mySpan.innerHTML = formsInput[0].value + " "+ formsInput[1].value
 
}