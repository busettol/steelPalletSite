//initialize emailjs
(function () {
  emailjs.init("ngolkZkTVk-ZPL5Av");
})();

// custom pallet form
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("palletForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    emailjs.sendForm("service_pp5q2fl", "template_fsadola", form)
      .then(function () {
        showAlert("Email sent successfully!");
        form.reset();

        form.reset();
      }, function (error) {
        console.error("Failed to send email:", error);
        showAlert("Failed to send email. Please try again.");
      });
  });
});

// contact us form
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("questionForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    emailjs.sendForm("service_pp5q2fl", "template_ft1lwwr", form)
      .then(function () {
        // showAlert("Email sent successfully!");
        alert("Email sent successfully.")
        print("Email sent successfully!")
        form.reset();

        form.reset();
      }, function (error) {
        console.error("Failed to send email:", error);
        // showAlert("Failed to send email. Please try again.");
        alert("Failed to send email. Please try again.")
      });
  });
});

// function showAlert(message) {
//   const alertBox = document.getElementById("emailAlert");
//   const alertMessage = document.getElementById("alertMessage");

//   alertMessage.textContent = message;
//   alertBox.classList.remove("hidden");
// }

// function closeAlert() {
//   const alertBox = document.getElementById("emailAlert");
//   alertBox.classList.add("hidden");
// }

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // optional for one-time animation
    }
  });
}, {
  threshold: 0.1
});

// Observe all sections with the fade-in class
document.querySelectorAll('.fade-in-section').forEach(section => {
  observer.observe(section);
});
