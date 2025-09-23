document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault(); 

  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value.trim();
  let message = document.getElementById("message");

  let validUser = "kenzolian11";
  let validPass = "12345";

  if (username === "" || password === "") {
    message.style.color = "red";
    message.textContent = "Please fill in all fields!";
  } else if (username === validUser && password === validPass) {
    message.style.color = "green";
    message.textContent = "Login successful!";
 
    setTimeout(() => {
      window.location.href = "https://github.com/amillet2001/WMA4A-repo"; 
      
    }, 1500);
  } else {
    message.style.color = "red";
    message.textContent = "Invalid username or password.";
  }
});