// Initialize EmailJS with your public key
(function () {
  emailjs.init("ngolkZkTVk-ZPL5Av"); // Replace with your actual public key
})();

// Handle form submission
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("palletForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    emailjs.sendForm("service_pp5q2fl", "template_fsadola", form)
      .then(function () {
        alert("Email sent successfully!");

        form.reset();
      }, function (error) {
        console.error("Failed to send email:", error);
        alert("Failed to send email. Please try again.");
      });
  });
});