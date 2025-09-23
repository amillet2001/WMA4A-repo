const form = document.getElementById('loginForm');
const errorMessage = document.getElementById('error-message');
const greeting = document.getElementById('greeting');

function setGreeting() {
    const now = new Date();
    const hour = now.getHours();
    let timeGreeting;

    if(hour >= 5 && hour < 12) {
        timeGreeting = "Good Morning!";
    } else if(hour >= 12 && hour < 18) {
        timeGreeting = "Good Afternoon!";
    } else {
        timeGreeting = "Good Evening!";
    }

    greeting.textContent = `Welcome, ${timeGreeting}`;
}

setGreeting();

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if(username === "shina" && password === "1234") {
        alert("Login successful!");
        errorMessage.textContent = "";
    } else {
        errorMessage.textContent = "Invalid username or password. Please try again!";
    }
});
