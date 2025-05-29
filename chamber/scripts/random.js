async function loadSpotlights() {
    try {
        const response = await fetch("data/members.json");
        const members = await response.json();
        console.log("Miembros cargados:", members);

        const filtered = members.filter(m => m.membershipLevel === 3 || m.membershipLevel === 2);
        console.log("Filtrados (Gold y Silver):", filtered);

        const count = Math.floor(Math.random() * 2) + 2;
        const randomMembers = getRandomElements(filtered, count);
        console.log("Aleatorios seleccionados:", randomMembers);

        const spotlightContainer = document.getElementById("resultados");
        spotlightContainer.innerHTML = "";

        randomMembers.forEach(member => {
            const card = document.createElement("div");
            card.innerHTML = `
                <h3>${member.name}</h3>
                <img src="images/${member.image}" alt="${member.name}" width="150">
                <p><strong>Level:</strong> ${getMembershipLevel(member.membershipLevel)}</p>
                <p>${member.phone}</p>
                <p>${member.address}</p>
                <p><a href="${member.website}" target="_blank">${member.website}</a></p>
                <p>${member.description}</p>
            `;
            spotlightContainer.appendChild(card);
        });

    } catch (error) {
        console.error("Error al cargar los miembros destacados:", error);
    }
}

function getMembershipLevel(level) {
    switch (level) {
        case 3: return "Gold";
        case 2: return "Silver";
        default: return "Member";
    }
}

function getRandomElements(arr, n) {
    const shuffled = arr.slice().sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
}

document.addEventListener("DOMContentLoaded", loadSpotlights);


//animacion de imagenes 
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
