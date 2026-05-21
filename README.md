# 🔐 Login & Register Authentication System

A complete, responsive frontend authentication system built with **HTML5, CSS3, and Vanilla JavaScript** using localStorage for data persistence.

## 📋 Features

### ✅ Core Features
- **Login Page** - Email/password authentication with validation
- **Register Page** - Create new accounts with duplicate checking
- **Dashboard** - Welcome page showing user information
- **localStorage Authentication** - No backend required
- **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **Form Validation** - Email format, password requirements, field validation

### 🎁 Bonus Features
- **Show/Hide Password Toggle** - Eye icon to reveal/hide passwords
- **Remember Me** - Save email for next login
- **Logout Button** - Clear session and return to login
- **User Management** - View all registered users
- **Error Messages** - Clear feedback on login/registration errors
- **Success Messages** - Confirmation on successful registration
- **Modern Styling** - Animated glowing effect with blue theme

## 📁 Project Files

```
login project/
├── index.html          (Auto-redirect home page)
├── login.html          (Login page)
├── register.html       (Registration page)
├── dashboard.html      (User dashboard)
├── style.css           (All styles)
├── auth.js             (Shared utilities)
├── login.js            (Login logic)
├── register.js         (Registration logic)
├── dashboard.js        (Dashboard logic)
└── README.md           (This file)
```

## 🚀 Quick Start

### Clone the Repository
```bash
git clone https://github.com/yourusername/login-authentication-system.git
cd login-authentication-system
```

### Open the Project
- Open `index.html` in your browser
- You'll be automatically redirected based on login status

### 2. **Create an Account**
- Click "Sign up here" on the login page
- Fill in: Username (min 3 chars), Email, Password (min 6 chars)
- Confirm password
- Click "Sign Up"

### 3. **Login**
- Enter your registered email and password
- Optionally check "Remember me"
- Click "Login"

### 4. **Dashboard**
- View your profile information
- See your username and email
- Click "View All Users" to see all registered accounts
- Click "Logout" to clear your session

## 📝 Form Validation Rules

### Register Page
- **Username**: Minimum 3 characters, must be unique
- **Email**: Valid email format (x@x.x), must be unique
- **Password**: Minimum 6 characters
- **Confirm Password**: Must match the password field

### Login Page
- **Email**: Required, valid format
- **Password**: Required
- Credentials must match registered account

## 🎨 UI/UX Features

- **Modern Design** - Dark theme with electric blue accents and beige highlights
- **Animated Backgrounds** - Glowing light effects
- **Smooth Transitions** - Hover effects on buttons and links
- **Mobile Responsive** - Flexbox grid layout
- **Accessible** - Clear labels and error messages
- **Visual Feedback** - Loading states and success/error indicators

## 💾 Data Storage

All user data is stored in the browser's **localStorage**:

- `users` - Array of registered user objects
- `currentUser` - Currently logged-in user
- `rememberedEmail` - Saved email for "Remember Me" feature

**Example localStorage structure:**
```json
{
  "users": [
    {
      "username": "john_doe",
      "email": "john@example.com",
      "password": "securepass123"
    }
  ],
  "currentUser": {
    "username": "john_doe",
    "email": "john@example.com"
  }
}
```

## ⚠️ Security Note

This is a **frontend-only demo** for educational purposes. In production:
- **NEVER** store passwords in localStorage
- Use bcrypt or similar for password hashing
- Implement a backend server with secure authentication (JWT, OAuth, etc.)
- Use HTTPS for all communications
- Never trust client-side validation alone

## 🎯 Test Account

1. Register a new account OR use this test data
2. Email: `test@example.com`
3. Password: `test123`
4. Username: `testuser`

## 🔧 Customization

### Change Colors
Edit `style.css`:
- Primary color: `#1E90FF` (Dodger Blue)
- Dark background: `#050505`
- Highlight color: `#F5F5DC` (Beige)
- Error color: `#ff4444`

### Add New Fields
1. Add input field to HTML
2. Add validation in JavaScript
3. Update localStorage structure
4. Add display in dashboard

## 📱 Responsive Breakpoints

- **Desktop**: Full layout with all features
- **Tablet** (≤768px): Adjusted spacing and grid layout
- **Mobile** (≤480px): Single column, full-width buttons

## 🎓 Learning Outcomes

This project demonstrates:
- DOM manipulation with vanilla JavaScript
- Form validation and error handling
- localStorage API usage
- Event handling and preventDefault
- CSS animations and transitions
- Responsive web design
- String manipulation and regex (email validation)

## 💡 Future Enhancements

- [ ] Password reset functionality
- [ ] User profile editing
- [ ] Two-factor authentication (2FA)
- [ ] Email verification
- [ ] Password strength indicator
- [ ] User avatar upload
- [ ] Session timeout
- [ ] Dark/Light theme toggle

## 📂 Project Structure

```
login-authentication-system/
│
├── index.html              # Entry point (Auto-redirect)
├── login.html              # Login page
├── register.html           # Registration page
├── dashboard.html          # User dashboard
│
├── style.css               # Main stylesheet (All pages)
│
├── auth.js                 # Shared utilities
├── login.js                # Login logic
├── register.js             # Registration logic
└── dashboard.js            # Dashboard logic
```

## 💬 Questions?

If you have any questions, feel free to open an issue or contact me.

---

**Made with ❤️ for learning and development**

**Enjoy your authentication system!** 🎉
