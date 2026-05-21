// =============================================
// Dashboard Page Script
// Handles dashboard functionality and user data display
// =============================================

/**
 * Logs out user by clearing session and redirecting to login
 */
function logoutUser() {
    localStorage.removeItem('currentUser');
    window.location.href = 'login.html';
}

/**
 * Clears the remembered email from localStorage
 */
function clearRememberedEmail() {
    localStorage.removeItem('rememberedEmail');
    alert('✓ Remembered email cleared!');
}

/**
 * Displays all registered users in a collapsible list
 * Toggles the visibility of the users list container
 */
function viewAllUsers() {
    const container = document.getElementById('usersListContainer');
    const usersList = document.getElementById('usersList');

    if (container.style.display === 'none') {
        // Retrieve all users from localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        usersList.innerHTML = '';

        // Display message if no users exist
        if (users.length === 0) {
            usersList.innerHTML = '<p>No registered users yet.</p>';
        } else {
            // Display each user with index and details
            users.forEach((user, index) => {
                usersList.innerHTML += `
                    <div class="user-item">
                        <p><strong>${index + 1}. ${user.username}</strong></p>
                        <p>Email: ${user.email}</p>
                    </div>
                `;
            });
        }

        container.style.display = 'block';
    } else {
        container.style.display = 'none';
    }
}

/**
 * Initialize dashboard on page load
 * Checks if user is logged in and displays their information
 * Redirects to login if no active session
 */
document.addEventListener('DOMContentLoaded', function () {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    // Redirect to login if not authenticated
    if (!currentUser) {
        window.location.href = 'login.html';
        return;
    }

    // Populate dashboard with user information
    document.getElementById('usernameDisplay').textContent = currentUser.username;
    document.getElementById('welcomeMessage').textContent = `You're successfully logged in as ${currentUser.username}! Welcome back! 🎉`;
    document.getElementById('userEmail').textContent = currentUser.email;
    document.getElementById('userUsername').textContent = currentUser.username;
});
