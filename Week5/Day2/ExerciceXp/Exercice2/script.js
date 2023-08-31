const form = document.querySelector("Form");
form.addEventListener("submit",logFormInputs);

function logFormInputs(e){
    e.preventdefault();
    const firstname =  document.getElementById("[name=fname]").value;
    const lastname = document.getElementById("[name=lname]").value;
    console.log(firstname,lastname);
    if (firstname === '' || lastname === '') {
        alert("Please fill in all fields");
        return;
      }
 const ul= document.querySelector(".userAnswer");
 const Fli = document.createElement("li");
 const Sli = document.createElement("li");
 Fli.innerText=firstname;
 Sli.innerText=lastname;
 ul.append(Fli,Sli);
}






   
      