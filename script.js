let currentIndex = 0;
const images = document.querySelectorAll(".carousel-images img"); // Récupère toutes les images du carrousel

// Fonction pour changer l'image
function changeImage(direction) {
  // Masquer l'image actuelle
  images[currentIndex].classList.remove("active");

  // Calculer le nouvel index
  currentIndex += direction;

  // S'assurer que l'index reste dans les limites
  if (currentIndex < 0) {
    currentIndex = images.length - 1; // Si inférieur à 0, passe à la dernière image
  } else if (currentIndex >= images.length) {
    currentIndex = 0; // Si supérieur au nombre d'images, retourne à la première image
  }

  // Afficher la nouvelle image
  images[currentIndex].classList.add("active");
}

// Initialiser l'affichage du carrousel
images[0].classList.add("active"); // Afficher la première image
