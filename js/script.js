document.addEventListener('DOMContentLoaded', function() {
    // Handle login form
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;

            if (email && password) {
                alert('Login successful! (This is just a demo)');
             window.location.href = 'menu.html';
            } else {
                alert('Please fill in all fields');
            }
        });
    }

    // Handle register form
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('register-name').value;
            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;
            const confirmPassword = document.getElementById('register-confirm-password').value;

            if (name && email && password && confirmPassword) {
                if (password === confirmPassword) {
                    alert('Registration successful! (This is just a demo)');
                    // Here you would typically send the data to your server
                    // After successful registration, redirect to login
                    window.location.href = 'login.html';
                } else {
                    alert('Passwords do not match');
                }
            } else {
                alert('Please fill in all fields');
            }
        });
    }

    // Handle reset password form
    const resetForm = document.getElementById('reset-form');
    if (resetForm) {
        resetForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('reset-email').value;

            if (email) {
                alert('Password reset link sent! Check your email. (This is just a demo)');
                // Here you would typically send the reset request to your server
                // After sending reset link, redirect to login
                window.location.href = 'login.html';
            } else {
                alert('Please enter your email address');
            }
        });
    }
});