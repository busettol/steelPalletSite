//initialize emailjs
(function () {
  emailjs.init("ngolkZkTVk-ZPL5Av");
})();

// contact us form
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("questionForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    emailjs.sendForm("service_pp5q2fl", "template_ft1lwwr", form)
      .then(function () {
        // showAlert("Email sent successfully!");
        alert("Email sent successfully.")
        form.reset();

      }, function (error) {
        console.error("Failed to send email:", error);
        // showAlert("Failed to send email. Please try again.");
        alert("Failed to send email. Please try again.")
      });
  });
});


const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2,
  rootMargin: "0px 0px -10% 0px"
});

// Observe all sections with the fade-in class
document.querySelectorAll('.fade-in-section').forEach(section => {
  observer.observe(section);
});

