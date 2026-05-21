// =============================================
// Authentication Utilities
// Shared functions used across the application
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
 * Retrieves the currently logged-in user from localStorage
 * @returns {object|null} - User object or null if not logged in
 */
function getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
}

/**
 * Checks if a user is currently logged in
 * @returns {boolean} - True if user is logged in
 */
function isUserLoggedIn() {
    return getCurrentUser() !== null;
}

/**
 * Logs out the current user by removing session data
 */
function logout() {
    localStorage.removeItem('currentUser');
}
