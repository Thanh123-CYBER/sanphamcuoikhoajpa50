document.addEventListener('DOMContentLoaded', () => {

  const users = JSON.parse(localStorage.getItem('users')) || [];

  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', e => {
      e.preventDefault();

      const email = loginForm.querySelector('#login-email').value;
      const password = loginForm.querySelector('#login-password').value;

      const user = users.find(u => u.email === email && u.password === password);

      if (user) {
        localStorage.setItem('account', JSON.stringify(user));
        alert('Login successful');
        window.location.href = 'menu.html';
      } else {
        alert('Account does not exist or wrong password');
      }
    });
  }

  // REGISTER
  const registerForm = document.getElementById('register-form');
  if (registerForm) {
    registerForm.addEventListener('submit', e => {
      e.preventDefault();

      const name = registerForm.querySelector('#register-name').value;
      const email = registerForm.querySelector('#register-email').value;
      const password = registerForm.querySelector('#register-password').value;
      const confirm = registerForm.querySelector('#register-confirm-password').value;

      if (!name || !email || !password || !confirm) {
        return alert('Fill all fields');
      }

      if (password !== confirm) {
        return alert('Passwords do not match');
      }

      if (users.find(u => u.email === email)) {
        return alert('Account already exists');
      }

      users.push({ name, email, password });
      localStorage.setItem('users', JSON.stringify(users));

      alert('Registration successful');
      window.location.href = 'login.html';
    });
  }

  const resetForm = document.getElementById('reset-form');
  if (resetForm) {
    resetForm.addEventListener('submit', e => {
      e.preventDefault();

      const email = resetForm.querySelector('#reset-email').value;
      const user = users.find(u => u.email === email);

      if (user) {
        alert('Reset link sent ');
        window.location.href = 'login.html';
      } else {
        alert('Account does not exist');
      }
    });
  }

});
