const form = document.getElementById('MyForm')
form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const radiusInput = document.getElementById('radius');
    const radius = parseFloat(radiusInput.value);

    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    const volumeInput = document.getElementById('volume');
    volumeInput.value = volume.toFixed(2); 
});


let myElement = document.querySelector(".myelement");

myElement.addEventListener("click", function(event) {
    myElement.style.left = getRandomPosition();
    myElement.style.top = getRandomPosition();
});

myElement.addEventListener("mouseover", function(event) {
    myElement.style.backgroundColor = ("blue");
});

myElement.addEventListener("mouseout", function(event) {
    myElement.style.backgroundColor = "red";
});

myElement.addEventListener("dblclick", function(event) {
    myElement.style.fontSize = getRandomFontSize();
});