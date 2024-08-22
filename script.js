document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const errorMessage = document.getElementById('error-message');
    const commentList = document.getElementById('comment-list');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche le rechargement de la page

        // Récupération des valeurs des champs
        const firstName = document.getElementById('first-name').value.trim();
        const lastName = document.getElementById('last-name').value.trim();
        const message = document.getElementById('message').value.trim();

        // Vérification des champs vides
        if (!firstName || !lastName || !message) {
            errorMessage.style.display = 'block';
            return;
        } else {
            errorMessage.style.display = 'none';
        }