import { places } from '..touristPlaces.mjs';

const allPlacesContainer = document.querySelector('#allplaces');

places.forEach(place => {
    const card = document.createElement('div');
    card.classList.add('place-card');

    card.innerHTML = `
    <img src="images/${place.imagen}" alt="${place.name}">
    <h3>${place.name}</h3>
    <p>${place.location}</p>
    <p>${place.description}</p>
  `;

    allPlacesContainer.appendChild(card);
});