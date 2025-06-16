async function loadRandomReview() {
  try {
    const response = await fetch("data/reviews.json");
    if (!response.ok) throw new Error("Could not load JSON file.");

    const reviews = await response.json();

    const randomIndex = Math.floor(Math.random() * reviews.length);
    const review = reviews[randomIndex];

    const reviewDiv = document.getElementById('review');

    const date = new Date(review.date).toLocaleDateString('es-SV', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);

    reviewDiv.innerHTML = `
      <blockquote>
        <p>"${review.description}"</p>
        <footer>
          — <strong>${review.name}</strong> <br>
          <small>${date}</small> <br>
          <span class="stars">${stars}</span>
        </footer>
      </blockquote>
    `;
  } catch (error) {
    // Mostrar mensaje visible para el usuario
    document.getElementById('review').textContent = "No se pudo cargar la reseña.";
  }
}

loadRandomReview();

