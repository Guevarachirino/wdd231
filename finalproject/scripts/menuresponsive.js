// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
const menuButton = document.querySelector('#menu');
const nav = document.querySelector('.navigation');

//probando menu
menuButton.addEventListener('click', () => {
    nav.classList.toggle('open');

    // Cambiar el ícono
    if (nav.classList.contains('open')) {
        menuButton.textContent = '✖'; // X (cerrar)
    } else {
        menuButton.textContent = '☰'; // ☰ (hamburguesa)
    }
});


// fecha de modificacion
const getyear = document.getElementById('year');
const actualyear = new Date().getFullYear();
getyear.textContent = actualyear;


let text = document.lastModified;
document.getElementById("oLastModif").innerHTML = text;