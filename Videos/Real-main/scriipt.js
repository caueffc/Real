const modal1 = document.getElementById("login-modal1");
const loginForm1 = document.getElementById("login-form1");
const registerForm1 = document.getElementById("register-form1");
const loginButton = document.querySelector(".login-button");
const userNameDisplay = document.getElementById("user-name");
const logoutBtn = document.getElementById("logout-btn");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  modal1.style.display = "flex";
});

function closeModal1() {
  modal1.style.display = "none";
}

function toggleForm1() {
  if (loginForm1.style.display === "none") {
    loginForm1.style.display = "block";
    registerForm1.style.display = "none";
  } else {
    loginForm1.style.display = "none";
    registerForm1.style.display = "block";
  }
}

function register1() {
  const username = document.getElementById("register-username").value;
  const password = document.getElementById("register-password").value;

  if (username && password) {
    localStorage.setItem("user_" + username, password);
    alert("Cadastro realizado com sucesso!");
    toggleForm1(); // volta pro login
  } else {
    alert("Preencha todos os campos para se cadastrar.");
  }
}

function login1() {
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;
  const savedPassword = localStorage.getItem("user_" + username);

  if (savedPassword === password) {
    localStorage.setItem("username", username);
    updateUserState();
    closeModal1();
  } else {
    alert("Usuário ou senha incorretos.");
  }
}

function logout() {
  localStorage.removeItem("username");
  updateUserState();
}

function updateUserState() {
  const savedUser = localStorage.getItem("username");
  if (savedUser) {
    userNameDisplay.textContent = `Olá, ${savedUser}`;
    loginButton.style.display = "none";
    logoutBtn.style.display = "inline";
  } else {
    userNameDisplay.textContent = "";
    loginButton.style.display = "inline";
    logoutBtn.style.display = "none";
  }
}

window.onload = updateUserState;
window.onload = updateUserState;
window.onload = updateUserState;
 const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.main-nav ul');

hamburger.addEventListener('click', () => {
navMenu.classList.toggle('show');
hamburger.classList.toggle('active');
});
  const itensMenu = document.querySelectorAll('.main-nav li');
const modal = document.getElementById('meuModal');
const fechar = document.querySelector('.fechar');
const mensagem = document.getElementById('mensagemModal');

const textos = {
  produtos: 'Confira nossos produtos incríveis para elevar seu treino!',
  contato: 'Entre em contato conosco pelo Instagram ou WhatsApp /  @use.shefit - (24)99999-9999',
  sobre: 'A SheFit é muito mais do que uma marca de roupas fitness. Somos um movimento que acredita no poder, na força e na beleza de cada mulher. Criamos peças que unem conforto, estilo e funcionalidade para que você se sinta confiante em todos os momentos — seja na academia, no seu treino ao ar livre ou no seu dia a dia.'
}

itensMenu.forEach(item => {
  item.addEventListener('click', () => {
    const tipo = item.getAttribute('data-content');
    mensagem.textContent = textos[tipo] || 'Conteúdo não encontrado.';
    modal.style.display = 'block';
  });
});

fechar.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

document.addEventListener('DOMContentLoaded', () => {
const filterButtons = document.querySelectorAll('.filter-button');
const products = document.querySelectorAll('.product');
const cartCount = document.getElementById('cart-count');


filterButtons.forEach(button => {
button.addEventListener('click', () => {
  const color = button.getAttribute('data-color');
  
  products.forEach(product => {
      if (color === 'todos' || product.getAttribute('data-color') === color) {
          product.style.display = 'block';
      } else {
          product.style.display = 'none';
      }
  });
});
});

// Configuração para rolar suavemente para a seção de produtos
document.querySelector('.button').addEventListener('click', function(e) {
e.preventDefault();
document.querySelector('#produtos').scrollIntoView({
  behavior: 'smooth'
});
});

// Smooth scroll para todos os links com hash #
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
  });
});
});

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("nav");

// Alterna a classe para mostrar ou esconder o menu
menuButton.addEventListener('click', () => {
nav.classList.toggle("show-menu");
});

const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
if (window.scrollY > 300) {
  backToTopButton.style.display = 'block';
} else {
  backToTopButton.style.display = 'none';
}
});

const animatedElements = document.querySelectorAll('.scroll-animation');
const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
  if (entry.isIntersecting) {
      entry.target.classList.add('visible');
  }
});
});

animatedElements.forEach(element => {
observer.observe(element);
});

// Seleciona o modal e o botão de fechar
const modal = document.getElementById("site-info-modal");
const closeButton = document.querySelector(".close-button");

// Adiciona um evento de clique ao item do menu
document.querySelectorAll('nav ul li').forEach(item => {
item.addEventListener('click', () => {
  modal.style.display = "flex"; // Mostra o modal
});
});

// Fecha o modal ao clicar no botão de fechar
closeButton.addEventListener('click', () => {
modal.style.display = "none";
});

// Fecha o modal se o usuário clicar fora da área de conteúdo do modal
window.addEventListener('click', (event) => {
if (event.target === modal) {
  modal.style.display = "none";
}
});

// Aumenta o contador do carrinho ao clicar no botão "Comprar"
document.querySelectorAll('.buy-button').forEach(button => {
button.addEventListener('click', () => {
  count++; // Incrementa o contador
  cartCount.textContent = count; // Atualiza o contador no carrinho
  
});
});
});
document.addEventListener('DOMContentLoaded', function() {
const searchInput = document.getElementById('search-input');
const products = document.querySelectorAll('.product');

searchInput.addEventListener('input', function() {
const searchTerm = searchInput.value.toLowerCase();

products.forEach(product => {
  const productName = product.querySelector('.product-name').textContent.toLowerCase();
  if (productName.includes(searchTerm)) {
      product.style.display = 'block';
  } else {
      product.style.display = 'none';
  }
});
});
});
// Script para interação com a barra de pesquisa
const searchInput = document.getElementById('search-input');

searchButton.addEventListener('click', () => {
const searchTerm = searchInput.value.toLowerCase();
const products = document.querySelectorAll('.product');

products.forEach(product => {
const productName = product.querySelector('.product-name').textContent.toLowerCase();
if (productName.includes(searchTerm)) {
  product.style.display = 'block';
} else {
  product.style.display = 'none';
}
});
});

// Script para interação com a barra de pesquisa
const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', () => {
const searchTerm = searchInput.value.toLowerCase();
const products = document.querySelectorAll('.product');

products.forEach(product => {
const productName = product.querySelector('.product-name').textContent.toLowerCase();
if (productName.includes(searchTerm)) {
  product.style.display = 'block';
} else {
  product.style.display = 'none';
}
});
});

// Script para filtro de cores de produtos
const filterButtons = document.querySelectorAll('.filter-button');

filterButtons.forEach(button => {
button.addEventListener('click', () => {
const color = button.getAttribute('data-color');
const products = document.querySelectorAll('.product');

products.forEach(product => {
  if (color === 'todos' || product.getAttribute('data-color') === color) {
      product.style.display = 'block';
  } else {
      product.style.display = 'none';
  }
});
});
});
