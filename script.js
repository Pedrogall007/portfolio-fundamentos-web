


// ALTERNADOR DE TEMA (CLARO / ESCURO)


// Captura o botão de alternância de tema pelo ID definido no HTML
const themeBtn = document.getElementById('toggle-theme');

// Adiciona um ouvinte de evento para detectar o clique no botão
themeBtn.addEventListener('click', () => {
    // Liga/desliga a classe 'dark-mode' na tag <body> a cada clique
    document.body.classList.toggle('dark-mode');
});


//  VALIDAÇÃO E SIMULAÇÃO DO FORMULÁRIO DE CONTATO


// Captura o formulário de contato pelo ID estrutural
const form = document.getElementById('form-contato');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // Validação de Campos Vazios: Impede o envio se algum campo estiver em branco
    if (nome === '' || email === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return; // Interrompe a execução da função
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    

    if (!emailRegex.test(email)) {
        alert('Por favor, insira um endereço de e-mail válido (exemplo@dominio.com).');
        return; // Interrompe a execução da função
    }
    alert('Mensagem enviada com sucesso!');
    

    form.reset(); 
});