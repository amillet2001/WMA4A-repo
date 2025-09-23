const loginBtn = document.querySelector('.Login');
const emailInput = document.querySelector('.email');
const passInput = document.querySelector('.pass');
const message = document.querySelector('.message');
const togglePass = document.querySelector('.togglePass i'); // target the <i> inside

loginBtn.addEventListener('click', () => {
  const email = emailInput.value.trim();
  const pass = passInput.value.trim();

  if (email === "" || pass === "") {
    message.style.color = "#9f8803ff";
    message.textContent = "⚠ Please enter email and password.";
  } else {
    message.style.color = "#096537ff";
    message.textContent = "Login successful";
  }
});

togglePass.addEventListener('click', () => {
  if (passInput.type === "password") {
    passInput.type = "text";
    togglePass.classList.remove("fa-eye");
    togglePass.classList.add("fa-eye-slash");
  } else {
    passInput.type = "password";
    togglePass.classList.remove("fa-eye-slash");
    togglePass.classList.add("fa-eye");
  }
});
