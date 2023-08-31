let allBoldItems;

function getBoldItems() {
    allBoldItems = document.getElementsByTagName("strong");
}

function highlights(){
    getBoldItems();
    for(const boldItem of allBoldItems){
        boldItem.style.color = "blue";
    }
}

function returnToNormal(){
    getBoldItems();
    for(const boldItem of allBoldItems){
        boldItem.style.color = "black";
    }
}

const p = document.querySelector("p");
p.addEventListener("mouseover",highlights);
p.addEventListener("mouseout",returnToNormal);
