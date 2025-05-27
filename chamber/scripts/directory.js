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

// Función para obtener N elementos aleatorios de un array
function obtenerElementosAleatorios(array, n) {
    const shuffled = array.slice().sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
}

// Función para mostrar entre 2 y 3 miembros gold o silver al azar
function mostrarMiembrosAleatorios(members) {
    const resultadoDiv = document.getElementById("resultados");
    resultadoDiv.innerHTML = "";

    // Filtrar solo gold y silver
    const miembrosFiltrados = members.filter(m => m.membershipLevel === 3 || m.membershipLevel === 2);

    // Elegir aleatoriamente 2 o 3
    const cantidad = Math.floor(Math.random() * 2) + 2;

    const aleatorios = obtenerElementosAleatorios(miembrosFiltrados, cantidad);

    aleatorios.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("destacado");
        card.innerHTML = `
        <h3>${member.name}</h3>
        <img src="images/${member.image}" alt="${member.name}" />
        <p><strong>Level:</strong> ${getMembershipLevel(member.membershipLevel)}</p>
        <p><strong>Teléfono:</strong> ${member.phone}</p>
        <p><strong>Dirección:</strong> ${member.address}</p>
        <p><strong>Sitio web:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
        <p>${member.description}</p>
      `;
        resultadoDiv.appendChild(card);
    });
}

// Cargar el JSON desde archivo externo
async function loadMembers() {
    try {
        const response = await fetch("data/members.json");
        if (!response.ok) throw new Error("Error al cargar JSON");
        const members = await response.json();
        mostrarMiembrosAleatorios(members);
    } catch (error) {
        console.error("Error loading members:", error);
    }
}

// Ejecutar cuando la página esté lista
document.addEventListener("DOMContentLoaded", () => {
    loadMembers();
});
