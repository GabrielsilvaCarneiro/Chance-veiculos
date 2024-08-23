const form = document.querySelector('.form');
const usuárioInput = form.querySelector("input[type='text']");
const senhaInput = form.querySelector("input[type='password']");

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const usuário = usuárioInput.value.trim();
    const senha = senhaInput.value.trim();

    if (usuário === '' || senha === '') {
        alert("Por favor, preencha os campos corretamente.");
    } else if (usuário === 'Gabrielsesi.sc@gmail.com' && senha === 'Gabriel03.') {
        alert("Bem-vindo! Redirecionando para a página inicial.");
        // Use window.location.href para redirecionar corretamente
        window.location.href = "Loja.html"; // Certifique-se de que o caminho está correto
    } else {
        alert("Usuário ou senha incorreto, por favor, tente novamente.");
    }
});

// Login com Google
function onGoogleSignIn() {
    gapi.auth2.getAuthInstance().signIn().then(onGoogleSignInSuccess);
}

function onGoogleSignInSuccess(googleUser) {
    var profile = googleUser.getBasicProfile();
    alert('Bem-vindo, ' + profile.getName() + '!');
    
}

// Login com Apple
document.addEventListener('DOMContentLoaded', function () {
    loadAppleSDK();
});

function loadAppleSDK() {
    AppleID.auth.init({
        clientId: 'seu-client-id',
        scope: 'email',
        redirectURI: 'sua-url-de-redirecionamento',
    });

    var button = AppleID.auth.createSignInButton(document.getElementById('apple-signin-button'));
    document.getElementById('apple-signin-button').appendChild(button);

    AppleID.auth.getLoginStatus(function (response) {
        if (response.status === AppleID.auth.Status.AUTHORIZED) {
            alert('Usuário autenticado com a Apple!');
        
        }
    });
}

var password1 = document.getElementById('entradaSenha');
var medidorPoder = document.getElementById('medidorPoder');
var requisitoComprimento = document.getElementById('requisitoComprimento');
var requisitoMinuscula = document.getElementById('requisitoMinuscula');
var requisitoMaiuscula = document.getElementById('requisitoMaiuscula');
var requisitoNumero = document.getElementById('requisitoNumero');
var requisitoSimbolo = document.getElementById('requisitoSimbolo');
var textoPoder = document.getElementById('textoPoder');
var mostrarSenha = document.getElementById('mostrarSenha');

password1.addEventListener('input', function () {
    var senha = password1.value;
    var poder = verificarPoder(senha);

    var cor = poder < 50 ? 'red' : poder < 80 ? 'yellow' : 'green';

    medidorPoder.style.width = poder + '%';
    medidorPoder.style.backgroundColor = cor;

    textoPoder.textContent = 'Força da Senha: ' + poder + '%';
});

function ocultarBarra() {
    medidorPoder.style.display = 'none';
    textoPoder.textContent = 'Força da Senha: 0%';
}

password1.addEventListener('input', function () {
    var senha = password1.value;
    var poder = verificarPoder(senha);

    var cor = poder < 50 ? 'red' : poder < 80 ? 'yellow' : 'green';

    if (poder === 0) {
        ocultarBarra();
    } else {
        medidorPoder.style.display = 'block'; // Exibe a div
        medidorPoder.style.width = poder + '%';
        medidorPoder.style.backgroundColor = cor;
        textoPoder.textContent = 'Força da Senha: ' + poder + '%';
    }
});

mostrarSenha.addEventListener('click', function () {
    password1.type = password1.type === 'password' ? 'text' : 'password';
});

function verificarPoder(senha) {
    var comprimentoMinimo = 8;
    var possuiMinuscula = /[a-z]/.test(senha);
    var possuiMaiuscula = /[A-Z]/.test(senha);
    var possuiNumeros = /\d/.test(senha);
    var possuiSimbolo = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(senha);

    var poder = 0;

    if (senha.length >= comprimentoMinimo) {
        poder += 25;
        requisitoComprimento.classList.remove('vermelho');
        requisitoComprimento.classList.add('verde');
    } else {
        requisitoComprimento.classList.remove('verde');
        requisitoComprimento.classList.add('vermelho');
    }

    if (possuiMinuscula) {
        poder += 25;
        requisitoMinuscula.classList.remove('vermelho');
        requisitoMinuscula.classList.add('verde');
    } else {
        requisitoMinuscula.classList.remove('verde');
        requisitoMinuscula.classList.add('vermelho');
    }

    if (possuiMaiuscula) {
        poder += 25;
        requisitoMaiuscula.classList.remove('vermelho');
        requisitoMaiuscula.classList.add('verde');
    } else {
        requisitoMaiuscula.classList.remove('verde');
        requisitoMaiuscula.classList.add('vermelho');
    }

    if (possuiNumeros) {
        poder += 25;
        requisitoNumero.classList.remove('vermelho');
        requisitoNumero.classList.add('verde');
    } else {
        requisitoNumero.classList.remove('verde');
        requisitoNumero.classList.add('vermelho');
    }

    if (possuiSimbolo) {
        poder += 25;
        requisitoSimbolo.classList.remove('vermelho');
        requisitoSimbolo.classList.add('verde');
    } else {
        requisitoSimbolo.classList.remove('verde');
        requisitoSimbolo.classList.add('vermelho');
    }

    return Math.min(100, poder);
}

function atualizar(senha) {
    var poder = verificarPoder(senha);
    console.log("O poder da senha é:", poder);
    
}