(function () {
  emailjs.init("9ziLhpjfskf9C0GRS"); // Remplacer par votre USER_ID fourni par EmailJS
})();

// Ajout d'un gestionnaire d'événement pour le formulaire
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche l'envoi du formulaire de manière traditionnelle

    // Envoyer les données du formulaire via EmailJS
    emailjs.sendForm("service_t87ab5f", "template_gcope21", this).then(
      function (response) {
        console.log("Succès!", response.status, response.text);
        alert("Votre message a été envoyé avec succès !");
      },
      function (error) {
        console.log("Erreur!", error);
        alert("Une erreur s'est produite lors de l'envoi du message.");
      }
    );
  });
