// Verificação ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
    const token = localStorage.getItem('token');
  
    if ((window.location.pathname === '/' || window.location.pathname === '/login') && token) {
      window.location.href = '/protected-page';
    }
  
    if (window.location.pathname === '/protected-page') {
      loadProtected();
    }
  });
  
  // LOGIN
  function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          window.location.href = '/protected-page';
        } else {
          document.getElementById('msg').innerText = data.msg || 'Erro ao fazer login';
        }
      });
  }
  
  // REGISTRO
  function register() {
    const username = document.getElementById('reg-username').value;
    const password = document.getElementById('reg-password').value;
  
    fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })
      .then(res => res.json())
      .then(data => {
        document.getElementById('reg-msg').innerText = data.msg || 'Erro ao registrar';
      });
  }
  
  // PÁGINA PROTEGIDA
  function loadProtected() {
    const token = localStorage.getItem('token');
  
    if (!token) {
      window.location.href = '/';
      return;
    }
  
    fetch('http://localhost:5000/protected', {
      method: 'GET',
      headers: { 'Authorization': `Bearer ${token}` },
    })
      .then(res => {
        if (!res.ok) throw new Error('Token inválido');
        return res.json();
      })
      .then(data => {
        document.getElementById('protected-content').innerText = data.msg;
      })
      .catch(() => {
        localStorage.removeItem('token');
        window.location.href = '/';
      });
  }
  
  // LOGOUT
  function logout() {
    localStorage.removeItem('token');
    window.location.href = '/';
  }
  
  // NAVEGAÇÃO
  function goToRegister() {
    window.location.href = '/register';
  }
  
  function goToLogin() {
    window.location.href = '/';
  }
  