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


// --- NUEVO: función para mostrar miembros destacados ---
/*async function loadSpotlights() {
    try {
        const response = await fetch("data/members.json");
        const members = await response.json();

        // Filtrar solo gold y silver
        const filtered = members.filter(m => m.membershipLevel === 3 || m.membershipLevel === 2);

        // Obtener 2 o 3 aleatorios
        const count = Math.floor(Math.random() * 2) + 2; // 2 o 3
        const randomMembers = getRandomElements(filtered, count);

        // Contenedor donde mostrar destacados
        const spotlightContainer = document.getElementById("resultados");
        if (!spotlightContainer) return;  // si no existe no hace nada
        spotlightContainer.innerHTML = "";

        randomMembers.forEach(member => {
            const card = document.createElement("div");
            card.classList.add("destacado");
            card.innerHTML = `
                <h3>${member.name}</h3>
                <img src="images/${member.image}" alt="${member.name}" />
                <p><strong>Level:</strong> ${getMembershipLevel(member.membershipLevel)}</p>
                <p>${member.phone}</p>
                <p>${member.address}</p>
                <p><a href="${member.website}" target="_blank">${member.website}</a></p>
                <p>${member.description}</p>
            `;
            spotlightContainer.appendChild(card);
        });

    } catch (error) {
        console.error("Error loading spotlights:", error);
    }
}

function getRandomElements(arr, n) {
    const shuffled = arr.slice().sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
}

// Solo llamamos loadSpotlights si existe el contenedor de destacados (para evitar problemas en la página que no lo tenga)
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("resultados")) {
        loadSpotlights();
    }
});*/

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



