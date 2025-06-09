import { places } from '../data/places.mjs';

const allPlacesContainer = document.querySelector('#allplaces');


places.forEach(place => {
    const card = document.createElement('div');

    const title = document.createElement('h2');
    title.textContent = place.name;

    const figure = document.createElement('figure');
    const image = document.createElement('img');
    image.src = `images/${place.imagen_url}`;
    image.alt = place.name;
    figure.appendChild(image);

    const address = document.createElement('address');
    address.textContent = place.address;

    const description = document.createElement('p');
    description.textContent = place.descripcion;

    const button = document.createElement('button');
    button.textContent = 'Learn more';
    button.classList.add('learn-more');

    card.appendChild(title);
    card.appendChild(figure);
    card.appendChild(address);
    card.appendChild(description);
    card.appendChild(button);

    allPlacesContainer.appendChild(card);
});



// Función para calcular la diferencia en días enteros
function daysBetween(date1, date2) {
    const msPerDay = 1000 * 60 * 60 * 24;
    // Redondear hacia abajo para días enteros
    return Math.floor((date2 - date1) / msPerDay);
}

window.addEventListener('DOMContentLoaded', () => {
    const messageContainer = document.getElementById('visitor-message');
    const now = Date.now();
    const lastVisit = localStorage.getItem('lastVisit');

    if (!lastVisit) {
        // Primera visita
        messageContainer.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const lastVisitTime = parseInt(lastVisit, 10);
        const daysDiff = daysBetween(lastVisitTime, now);

        if (daysDiff < 1) {
            // Menos de un día
            messageContainer.textContent = "Back so soon! Awesome!";
        } else if (daysDiff === 1) {
            // Un día exacto
            messageContainer.textContent = "You last visited 1 day ago.";
        } else {
            // Más de un día
            messageContainer.textContent = `You last visited ${daysDiff} days ago.`;
        }
    }

    // Guardar la fecha actual para la próxima visita
    localStorage.setItem('lastVisit', now.toString());
});
