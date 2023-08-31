const planets = [
    { name: "Mercure", color: "orange", moons: 0 },
    { name: "Vénus", color: "yellow", moons: 0 },
    { name: "Terre", color: "blue", moons: 1 },
    { name: "Mars", color: "red", moons: 2 },
    { name: "Jupiter", color: "brown", moons: 79 },
    { name: "Saturne", color: "lightyellow", moons: 82 },
    { name: "Uranus", color: "lightblue", moons: 27 },
    { name: "Neptune", color: "darkblue", moons: 14 }
  ];
  
const listPlanets = document.querySelector(".PlanetsList");
  

planets.forEach(planet => {
    const planetDiv = document.createElement("div");
    planetDiv.className = "planet";
    planetDiv.style.backgroundColor = planet.color;
    planetDiv.innerText = planet.name;
    PlanetsList.appendChild(planetDiv);
  
    if (planet.moons > 0) {
      const moonDivs = createMoonDivs(planet.moons);
      moonDivs.forEach(moonDiv => {
        planetDiv.appendChild(moonDiv);
      });
    }
  });
  
  function createMoonDivs(numMoons) {
    const moonDivs = [];
    for (let i = 0; i < numMoons; i++) {
      const moonDiv = document.createElement("div");
      moonDiv.className = "moon";

const planets = [
    { name: "Mercure", color: "orange", moons: 0 },
    { name: "Vénus", color: "yellow", moons: 0 },
    { name: "Terre", color: "blue", moons: 1 },
    { name: "Mars", color: "red", moons: 2 },
    { name: "Jupiter", color: "brown", moons: 79 },
    { name: "Saturne", color: "lightyellow", moons: 82 },
    { name: "Uranus", color: "lightblue", moons: 27 },
    { name: "Neptune", color: "darkblue", moons: 14 }
  ];
  

const listPlanets = document.querySelector(".PlanetsList");
  
  
planets.forEach(planet => {
    const planetDiv = document.createElement("div");
    planetDiv.className = "planet";
    planetDiv.style.backgroundColor = planet.color;
    planetDiv.innerText = planet.name;
    PlanetsList.appendChild(planetDiv);
  
   
    if (planet.moons > 0) {
      const moonDivs = createMoonDivs(planet.moons);
      moonDivs.forEach(moonDiv => {
        planetDiv.appendChild(moonDiv);
      });
    }
  });
  
 
function createMoonDivs(numMoons) {
    const moonDivs = [];
    for (let i = 0; i < numMoons; i++) {
      const moonDiv = document.createElement("div");
      moonDiv.className = "moon";
      moonDiv.style.left = `${Math.random() * 80 + 10}%`;
      moonDiv.style.top = `${Math.random() * 80 + 10}%`;
      moonDivs.push(moonDiv);
    }
    return moonDivs;
  }
      moonDivs.push(moonDiv);
    }
    return moonDivs;
  }
  