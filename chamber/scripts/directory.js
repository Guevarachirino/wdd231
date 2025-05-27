const membersContainer = document.getElementById("membersContainer");
const gridBtn = document.getElementById("gridBtn");
const listBtn = document.getElementById("listBtn");

async function loadMembers() {
    try {
        const response = await fetch("data/members.json");
        const members = await response.json();
        displayMembers(members);
    } catch (error) {
        console.error("Error loading members:", error);
    }
}

function displayMembers(members) {
    membersContainer.innerHTML = "";

    members.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("member-card");

        card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name}" />
      <div>
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
        <p><strong>Level:</strong> ${getMembershipLevel(member.membershipLevel)}</p>
        <p>${member.description}</p>
      </div>
    `;
        membersContainer.appendChild(card);
    });
}

function getMembershipLevel(level) {
    switch (level) {
        case 3: return "Gold";
        case 2: return "Silver";
        default: return "Member";
    }
}

gridBtn.addEventListener("click", () => {
    membersContainer.classList.add("grid-view");
    membersContainer.classList.remove("list-view");
});

listBtn.addEventListener("click", () => {
    membersContainer.classList.add("list-view");
    membersContainer.classList.remove("grid-view");
});

loadMembers();

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

//get random element
// Función para obtener 3 elementos aleatorios
function mostrarMiembrosAleatorios(members) {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = ""; // Limpiar contenido anterior

    // Filtrar solo miembros GOLD o SILVER
    const miembrosFiltrados = members.filter(member =>
        member.membershipLevel === 3 || member.membershipLevel === 2
    );

    //Obtener 3 aleatorios entre los filtrados
    const aleatorios = obtenerElementosAleatorios(miembrosFiltrados, 3);

    aleatorios.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("destacado");
        card.innerHTML = `
            <h4>${member.name}</h4>
            <img src="images/${member.image}" alt="${member.name}">
            <p><strong>Level:</strong> ${getMembershipLevel(member.membershipLevel)}</p>
            <p>${member.description}</p>
        `;
        resultadoDiv.appendChild(card);
    });
}

