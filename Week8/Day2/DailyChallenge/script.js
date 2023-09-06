const form = document.getElementById("myForm");
const outputDiv = document.getElementById("output");

form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const lastName = document.getElementById("lastName").value;

        const data = {
            name: name,
            lastName: lastName
        };

        const jsonData = JSON.stringify(data);

        outputDiv.innerText = jsonData;
        });