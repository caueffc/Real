// script.js

let users = [];  // Vetor para armazenar as contas

// Cadastro
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const newUsername = document.getElementById('newUsername').value.trim();
    const newPassword = document.getElementById('newPassword').value.trim();
    const message = document.getElementById('message');

    if (newUsername === '' || newPassword === '') {
        message.textContent = 'Preencha todos os campos.';
        return;
    }

    const userExists = users.find(user => user.username === newUsername);

    if (userExists) {
        message.textContent = 'Usuário já existe!';
    } else {
        users.push({ username: newUsername, password: newPassword });
        message.style.color = 'green';
        message.textContent = 'Usuário registrado com sucesso!';
        console.log(users);  // Para visualização no console
    }
});

// Login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const message = document.getElementById('message');

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        message.style.color = 'green';
        message.textContent = 'Login bem-sucedido!';
    } else {
        message.style.color = 'red';
        message.textContent = 'Usuário ou senha incorretos.';
    }
});

// Simulação de login social
document.getElementById('googleLogin').addEventListener('click', function() {
    alert('Login com Google simulado!');
});

document.getElementById('facebookLogin').addEventListener('click', function() {
    alert('Login com Facebook simulado!');
});
