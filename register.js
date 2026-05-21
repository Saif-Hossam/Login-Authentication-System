// =============================================
// Register Page Script
// Handles user registration functionality
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
 * Toggles password visibility for register field
 */
function togglePasswordRegister() {
    const passwordField = document.getElementById('registerPassword');
    const toggleIcon = document.querySelector('#registerPassword').nextElementSibling.querySelector('i');
    passwordField.type = passwordField.type === 'password' ? 'text' : 'password';
    toggleIcon.classList.toggle('fa-eye');
    toggleIcon.classList.toggle('fa-eye-slash');
}

/**
 * Toggles password visibility for confirm password field
 */
function toggleConfirmPassword() {
    const passwordField = document.getElementById('confirmPassword');
    const toggleIcon = document.querySelector('#confirmPassword').nextElementSibling.querySelector('i');
    passwordField.type = passwordField.type === 'password' ? 'text' : 'password';
    toggleIcon.classList.toggle('fa-eye');
    toggleIcon.classList.toggle('fa-eye-slash');
}

/**
 * Registers a new user with validation
 * Validates all input fields, checks for duplicates
 * Stores new user in localStorage and redirects to login
 */
function registerUser() {
    const username = document.getElementById('registerUsername').value.trim();
    const email = document.getElementById('registerEmail').value.trim();
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validate all fields are filled
    if (!username || !email || !password || !confirmPassword) {
        alert('❌ All fields are required!');
        return;
    }

    // Validate username length
    if (username.length < 3) {
        alert('❌ Username must be at least 3 characters long!');
        return;
    }

    // Validate email format
    if (!validateEmail(email)) {
        alert('❌ Please enter a valid email!');
        return;
    }

    // Validate password length
    if (password.length < 6) {
        alert('❌ Password must be at least 6 characters long!');
        return;
    }

    // Verify password match
    if (password !== confirmPassword) {
        alert('❌ Passwords do not match!');
        return;
    }

    // Retrieve existing users
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check for duplicate email
    if (users.some(u => u.email === email)) {
        alert('❌ Email already registered!');
        return;
    }

    // Check for duplicate username
    if (users.some(u => u.username === username)) {
        alert('❌ Username already taken!');
        return;
    }

    // Add new user to database
    users.push({
        username: username,
        email: email,
        password: password
    });

    // Save to localStorage
    localStorage.setItem('users', JSON.stringify(users));
    alert('✅ Account created successfully! Redirecting to login...');

    // Redirect to login after delay
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 2000);
}

// Initialize event listeners when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function (e) {
            e.preventDefault();
            registerUser();
        });
    }
});
