document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const msg = document.getElementById('message');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const u = document.getElementById('username').value.trim();
    const p = document.getElementById('password').value;

    // demo credentials
    if (u === 'student' && p === 'password') {
      msg.textContent = 'Login successful ✓';
      msg.className = 'success';
    } else {
      msg.textContent = 'Invalid username or password';
      msg.className = 'error';
    }
  });
});
