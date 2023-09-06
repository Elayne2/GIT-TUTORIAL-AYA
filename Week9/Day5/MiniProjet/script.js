let div = document.getElementById("infos")
let divData = document.getElementById("dataInfos")
let button = document.getElementById("button")
let divIcon = document.getElementById("icons")
let p = document.getElementById("loading")

let h2 = document.createElement("h2")
let p1 = document.createElement("P")
let p2 = document.createElement("P")
let p3 = document.createElement("P")
let p4 = document.createElement("P")

divIcon.style.display="none"

button.addEventListener("click", getInfos)

let findSomeone = ()=>{
      
    divData.innerHTML =""

    fetch("https://www.swapi.tech/api/people/"+Math.floor(Math.random()*88))
    .then((response)=>{
        if(response.ok){
            return response.json()
        }else{
            return "Oh No! That person isn't avaible"
        }
    }).then((object)=> {

        divIcon.style.display="none"

       h2.innerHTML =object.result.properties.name
     
       p1.innerHTML = "Height : "+ object.result.properties.height
       
       p2.innerHTML = "Gender : "+ object.result.properties.gender
      
       p3.innerHTML ="Birth Year : "+ object.result.properties.birth_year
       divData.innerHTML = ""
       divData.appendChild(h2)
       divData.appendChild(p1)
       divData.appendChild(p2)
       divData.appendChild(p3)
   
       fetch(object.result.properties.homeworld)
      .then((Answer)=>{
              if(Answer.ok){
                return Answer.json()
              }else{
                return "Error"
              }
            }).then((respond)=>{
                   
    
     p4.innerHTML = " Home World : "+ respond.result.properties.name
       
      divData.appendChild(p4)
              }).catch((mistake)=>{
                    p4.innerHTML="Home World : "+ mistake
              })
            

    }).catch((error)=>{
        divData.innerHTML = error 
    })
}

function getInfos(){
    divIcon.style.display="block"
    p.innerHTML="Loading..."
    findSomeone()
    
}