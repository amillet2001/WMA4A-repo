document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const user = document.getElementById('user').value.trim();
        const password = document.getElementById('password').value;
        
        if (!user) {
            showError('Please enter your email address');
            return;
        }
        
        if (!isValidEmail(user)) {
            showError('Please enter a valid email address');
            return;
        }
        
        if (!password) {
            showError('Please enter your password');
            return;
        }
        
        if (password.length < 6) {
            showError('Password must be at least 6 characters long');
            return;
        }
        
        showSuccess('Login successful! Redirecting...');
        
        setTimeout(() => {
            alert('Login functionality would redirect to dashboard here');
        }, 1500);
    });
    
    function isValiUser(user) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(user);
    }
    
    function showError(message) {
        removeMessages();
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.cssText = `
            background: #f8d7da;
            color: #721c24;
            padding: 12px;
            border-radius: 6px;
            margin-bottom: 20px;
            border: 1px solid #f5c6cb;
            font-size: 14px;
        `;
        errorDiv.textContent = message;
        
        loginForm.insertBefore(errorDiv, loginForm.firstChild);
    }
    
    function showSuccess(message) {
        removeMessages();
        
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.style.cssText = `
            background: #d4edda;
            color: #155724;
            padding: 12px;
            border-radius: 6px;
            margin-bottom: 20px;
            border: 1px solid #c3e6cb;
            font-size: 14px;
        `;
        successDiv.textContent = message;
        
        loginForm.insertBefore(successDiv, loginForm.firstChild);
    }
    
    function removeMessages() {
        const existingMessages = document.querySelectorAll('.error-message, .success-message');
        existingMessages.forEach(msg => msg.remove());
    }
});