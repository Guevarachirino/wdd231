const allPlacesContainer = document.querySelector('#allplaces');
const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('#search-button');

async function loadPlaces() {
    try {
        const response = await fetch("data/places.json");
        const places = await response.json();
        displayPlaces(places);

        // Añadir evento al botón para buscar
        searchButton.addEventListener('click', () => {
            const query = searchInput.value.toLowerCase().trim();

            const filtered = places.filter(place =>
                place.name.toLowerCase().includes(query) ||
                place.location.toLowerCase().includes(query) ||
                place.description.toLowerCase().includes(query) ||
                place.imagen.toLowerCase().includes(query) // buscar por nombre de imagen también
            );

            displayPlaces(filtered);
        });

    } catch (error) {
        console.error("Error loading places:", error);
        allPlacesContainer.innerHTML = "<p>Error cargando los lugares.</p>";
    }
}

function displayPlaces(places) {
    allPlacesContainer.innerHTML = "";

    if (places.length === 0) {
        allPlacesContainer.innerHTML = "<p>No se encontraron lugares.</p>";
        return;
    }

    places.forEach(place => {
        const card = document.createElement("div");
        card.classList.add("place-card");

        card.innerHTML = `
            <img src="images/${place.imagen}" alt="${place.name}">
            <h3>${place.name}</h3>
            <p>${place.location}</p>
            <p>${place.description}</p>
        `;
        allPlacesContainer.appendChild(card);
    });
}

// Iniciar la carga y mostrar los lugares
loadPlaces();
