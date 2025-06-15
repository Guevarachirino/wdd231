
import { places } from '../data/places.mjs';

const allPlacesContainer = document.querySelector('#allplaces');
const searchInput = document.querySelector('#search-input');

// Función para resaltar coincidencias
function highlightMatch(text, query) {
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

// Función para renderizar lugares
function renderPlaces(placeList, query = '') {
    allPlacesContainer.innerHTML = '';

    if (placeList.length === 0) {
        allPlacesContainer.innerHTML = '<p>No places found.</p>';
        return;
    }

    placeList.forEach(place => {
        const card = document.createElement('div');
        card.classList.add('place-card');

        const name = query ? highlightMatch(place.name, query) : place.name;
        const location = query ? highlightMatch(place.location, query) : place.location;
        const description = query ? highlightMatch(place.description, query) : place.description;

        card.innerHTML = `
      <img src="images/${place.imagen}" alt="${place.name}">
      <h3>${name}</h3>
      <p>${location}</p>
      <p>${description}</p>
    `;

        allPlacesContainer.appendChild(card);
    });
}

// Mostrar todos los lugares al cargar
renderPlaces(places);

// Buscar en tiempo real mientras se escribe
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();

    const filtered = places.filter(place =>
        place.name.toLowerCase().includes(query) ||
        place.location.toLowerCase().includes(query) ||
        place.description.toLowerCase().includes(query)
    );

    renderPlaces(filtered, query);
});
