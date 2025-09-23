const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    const correctUsername = "pasion";
    const correctPassword = "12345";

    if (username === "" || password === "") {
        alert("Please enter both username and password.");
    } else if (username === correctUsername && password === correctPassword) {
        alert("Login successful!");
    } else {
        alert("Invalid username or password.");
    }
});