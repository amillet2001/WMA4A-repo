document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    if (usernameInput === 'admin' && passwordInput === 'password') {
        alert('Login Successfully!');
        errorMessage.textContent = '';

    } else {
        errorMessage.textContent = 'Invalid username or password.';
    }
});