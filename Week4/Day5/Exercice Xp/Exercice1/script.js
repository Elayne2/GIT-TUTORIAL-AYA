const div=document.getElementById('container');
console.log(div)

document.querySelector(".list").children[1].textContent="Richard";

const li=document.querySelectorAll(".list");
li[1].children[1].remove()

li.forEach(list=>list.firstElementChild.textContent="Aya")

