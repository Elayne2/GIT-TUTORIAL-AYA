let nav=document.getElementById("navBar");
console.log(nav)
nav.setAttribute("id","socialNetworkNavigation")

let li=document.createElement("li");
let logout=document.createTextNode("logout")
li.appendChild(logout)
console.log(li)

let ul=nav.firstElementChild
console.log(ul)
ul.appendChild(li)