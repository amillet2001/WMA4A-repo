document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault(); 

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const messageElement = document.getElementById('message');

            if (username === 'user' && password === 'pass') {
                messageElement.style.color = 'green';
                messageElement.textContent = 'Login successful!';
                window.location.href = 'atchazo.html'; 
            } else {
                messageElement.style.color = 'red';
                messageElement.textContent = 'Invalid username or password.';
            }
        });