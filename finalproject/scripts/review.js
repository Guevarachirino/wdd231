async function loadRandomReview() {
    try {
        const response = await fetch("data/reviews.json");
        if (!response.ok) throw new Error('No se pudo cargar el archivo JSON.');

        const reviews = await response.json();

        const randomIndex = Math.floor(Math.random() * reviews.length);
        const review = reviews[randomIndex];

        const reviewDiv = document.getElementById('review');

        // Formatear la fecha (opcional: cambiar formato)
        const date = new Date(review.date).toLocaleDateString('es-SV', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        // Crear las estrellas según rating
        const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);

        reviewDiv.innerHTML = `
        <blockquote>
          <p>"${review.description}"</p>
          <footer>
            — <strong>${review.name}</strong> <br>
            <small>📅 ${date}</small> <br>
            <span class="stars">${stars}</span>
          </footer>
        </blockquote>
      `;
    } catch (error) {
        console.error('Error cargando la reseña:', error);
        document.getElementById('review').textContent = 'No se pudo cargar la reseña.';
    }
}
