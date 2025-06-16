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

// Wayfinding: marcar el enlace actual
const links = document.querySelectorAll('.navigation a');
const currentPage = location.pathname.split('/').pop();

links.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});


// fecha de modificacion
const getyear = document.getElementById('year');
const actualyear = new Date().getFullYear();
getyear.textContent = actualyear;


let text = document.lastModified;
document.getElementById("oLastModif").innerHTML = text;