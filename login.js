// =============================================
// Login Page Script
// Handles user login functionality
// =============================================

/**
 * Validates email format using regex pattern
 * @param {string} email - Email address to validate
 * @returns {boolean} - True if email is valid
 */
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

/**
 * Toggles password visibility by changing input type
 */
function togglePasswordLogin() {
    const passwordField = document.getElementById('loginPassword');
    const icon = document.querySelector('.toggle-password i');
    passwordField.type = passwordField.type === 'password' ? 'text' : 'password';
    icon.classList.toggle('fa-eye');
    icon.classList.toggle('fa-eye-slash');
}

/**
 * Handles forgot password functionality
 */
function handleForgotPassword(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();

    if (!email) {
        alert('❌ Please enter your email address first!');
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(u => u.email === email);

    if (!userExists) {
        alert('❌ Email not found in our system!');
        return;
    }

    alert('✅ Password reset link sent to: ' + email + '\n(Demo: This is a demo system)');
}

/**
 * Authenticates user by checking credentials against localStorage
 * Validates email format and password match
 * If successful, stores current user and redirects to dashboard
 */
function loginUser() {
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    const rememberMe = document.getElementById('rememberMe').checked;

    // Validate input fields
    if (!email || !password) {
        alert('❌ Email and password are required!');
        return;
    }

    // Validate email format
    if (!validateEmail(email)) {
        alert('❌ Please enter a valid email!');
        return;
    }

    // Retrieve all users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email);

    // Check if user exists
    if (!user) {
        alert('❌ Email not found!');
        return;
    }

    // Verify password
    if (user.password !== password) {
        alert('❌ Incorrect password!');
        return;
    }

    // Store logged-in user session
    localStorage.setItem('currentUser', JSON.stringify({
        username: user.username,
        email: user.email
    }));

    // Save email if remember me is checked
    if (rememberMe) {
        localStorage.setItem('rememberedEmail', email);
    }

    // Redirect to dashboard
    window.location.href = 'dashboard.html';
}

// Initialize event listeners when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            loginUser();
        });
    }

    // Load remembered email if it exists
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail) {
        document.getElementById('loginEmail').value = rememberedEmail;
        document.getElementById('rememberMe').checked = true;
    }
});
