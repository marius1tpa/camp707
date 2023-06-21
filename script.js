// Smooth Scroll
const navLinks = document.querySelectorAll("nav a");

for (const link of navLinks) {
  link.addEventListener("click", smoothScroll);
}

function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href");
  document.querySelector(targetId).scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

// Form Validation
const submitButton = document.getElementById("submitButton");
const errorMessage = document.getElementById("errorMessage");

submitButton.addEventListener("click", validateForm);

function validateForm(event) {
  event.preventDefault();
  const nameInput = document.querySelector('input[name="name"]');
  const ageInput = document.querySelector('input[name="age"]');
  const emailInput = document.querySelector('input[name="email"]');
  const messageInput = document.querySelector('textarea[name="message"]');

  if (nameInput.value === "" || ageInput.value === "" || emailInput.value === "" || messageInput.value === "") {
    submitButton.style.backgroundColor = "#CCCCCC";
    errorMessage.innerText = "Something is missing, check again!";
    errorMessage.style.color = "red";
  } else {
    submitButton.style.backgroundColor = '#FF430F';
    errorMessage.textContent = 'Registration successful!';
    errorMessage.style.color = 'green';
    form.reset();
  }
});