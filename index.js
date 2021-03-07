submitButton = document.getElementById("submitButton")
const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const emailAdress = document.getElementById('emailAddress')
const password = document.getElementById('password')

submitButton.addEventListener('click', (e) => {
  e.preventDefault()
  checking()


})


function checking(){
  if(firstName.value.trim() === "" || firstName.value.trim() == null){
    document.getElementById('firstError').style.visibility = "visible"
    document.getElementById('firstName').classList.add("error")
  }
  else{
    document.getElementById('firstError').style.visibility = "hidden"
    document.getElementById('firstName').classList.remove("error")
  }

  if(lastName.value.trim() === "" || lastName.value.trim() == null){
    document.getElementById('secondError').style.visibility = "visible"
    document.getElementById('lastName').classList.add("error")
  }
  else{
    document.getElementById('secondError').style.visibility = "hidden"
    document.getElementById('lastName').classList.remove("error")
  }

  if(emailAdress.value.trim().match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
    document.getElementById('thirdError').style.visibility = "hidden"
    document.getElementById('emailAddress').classList.remove("error")
  }
  else{
    document.getElementById('thirdError').style.visibility = "visible"
    document.getElementById('emailAddress').classList.add("error")
  }

  if(password.value.trim().length == "0"){
    document.getElementById('fourthError').style.visibility = "visible"
    document.getElementById('password').classList.add("error")
  }
  else{
    document.getElementById('fourthError').style.visibility = "hidden"
    document.getElementById('password').classList.remove("error")
  }
}
