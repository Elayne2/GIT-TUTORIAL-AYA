let div=document.querySelector("div");
div.style.backgroundColor="lightblue";

let users=document.querySelectorAll("li")
users[0].style.display="none";

users[1].style.border="1px solid black";
let bd=document.querySelector("body")
bd.style.fontSize="20px"

if(div1==="lightblue"){
    alert(`Hello ${users[0].textContent} et ${users[1].textContent}`)
}