

//js para los botones que dan mas informacion sobre las membrecias 

// Mostrar el modal al hacer clic en los botones
document.querySelectorAll('.openModal').forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        document.getElementById(modalId).style.display = 'block';
    });
});

// Cerrar el modal al hacer clic en la X
document.querySelectorAll('.modal .close').forEach(span => {
    span.addEventListener('click', () => {
        span.closest('.modal').style.display = 'none';
    });
});

// Cerrar el modal si se hace clic fuera del contenido
window.addEventListener('click', event => {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});
