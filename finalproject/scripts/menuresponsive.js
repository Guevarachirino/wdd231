// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});
// fecha de modificacion
const getyear = document.getElementById('year');
const actualyear = new Date().getFullYear();
getyear.textContent = actualyear;


let text = document.lastModified;
document.getElementById("oLastModif").innerHTML = text;