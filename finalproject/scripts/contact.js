

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

// Solo ejecuta si estamos en join.html
if (window.location.pathname.includes("contact.html")) {
    const timestampInput = document.getElementById('form_timestamp');
    const now = new Date();
    const formatted = now.toLocaleString(); // ej: "31/5/2025, 14:35:22"
    timestampInput.value = formatted;
}
// solo para funcione al estar en thankyou.html
// Verifica si estamos en thankyou.html
if (window.location.pathname.includes("thanks.html")) {
    const params = new URLSearchParams(window.location.search);

    document.querySelector('#thankyouresult').innerHTML = `
      <h2>Congratulations, Thank you for reserving with us!</h2>
      <p><strong>Name:</strong> ${params.get('first')}</p>
      <p><strong>Email:</strong> ${params.get('email')}</p>
      <p><strong>Mobile Number:</strong> ${params.get('phone')}</p>
      <p><strong>Check in Date:</strong> ${params.get('checkin')}</p>
      <p><strong>Check out Date:</strong> ${params.get('checkout')}</p>
      <p><strong>Number of Guests:</strong> ${params.get('numberguests')}</p>
      <p><Reservation Type:</strong> ${params.get('tipodeestadia')}</p>
      <p><strong>Submission Date:</strong> ${params.get('form_timestamp')}</p>
    `;
}
