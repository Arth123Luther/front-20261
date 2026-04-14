import './style.css'

const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const botao = document.querySelector('button');

// Reniciar campos de resposta
email.addEventListener('input', function() {
    const erroEmail = document.querySelector('#erroEmail');
    erroEmail.textContent = '';
});

senha.addEventListener('input', function() {
    const erroSenha = document.querySelector('#erroSenha');
    erroSenha.textContent = '';
});

botao.addEventListener('click', function(e) {
    e.preventDefault();

    const erroEmail = document.querySelector('#erroEmail');
    const erroSenha = document.querySelector('#erroSenha');

    const valorEmail = email.value.trim();

    const verificarArroba = valorEmail.includes('@')
    const verificarPonto = valorEmail.includes('.');
    const temEspaco = valorEmail.includes(' ');
    const posicaoArroba = valorEmail.indexOf('@');

    erroEmail.textContent = '';
    erroSenha.textContent = '';
    
    if (email.value == '') {
        erroEmail.textContent = 'E-mail é obrigatório';
        return;
    };

    if (!verificarArroba || !verificarPonto || temEspaco || posicaoArroba <= 0) {
        erroEmail.textContent = "Insira um e-mail válido";
        return
    };

    if (senha.value == '') {
        erroSenha.textContent = 'Senha é obrigatória';
        return;
    };

    if (senha.value.length < 8) {
        erroSenha.textContent = 'Senha deve ter no mínimo 8 caracteres';
        return;
    };

    window.location.href = 'index.html';
});