// logica do menu
const menuToggle = document.querySelector('.menu-toggle');
const navContainer = document.querySelector('.nav-container');
const navLinks = document.querySelectorAll('.nav-menu a');

// liga ou desliga a classe 'active' no ícone do hambúrguer
menuToggle.addEventListener('click', function() {
    navContainer.classList.toggle('active');
});

// o menu recolhe automaticamente ao clicar em qualquer link de navegação
navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        navContainer.classList.remove('active');
    });
});

// ------------------------------------------
// simulação do envio do formulário


const formcontato = document.getElementById('form-contato');
const mensagemRetorno = document.getElementById('mensagem-retorno');

formcontato.addEventListener('submit', function(event) {

    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();

    mensagemRetorno.textContent = `Obrigado, ${nome}! A sua mensagem foi enviada com sucesso. Entrarei em contato em breve.`;
    mensagemRetorno.className = 'alert alert-success mt-4 d-block';
    
    // Acessibilidade: direciona o foco para o aviso para que leitores de ecrã o detetem
    mensagemRetorno.setAttribute('tabindex', '-1');
    mensagemRetorno.focus();

    formcontato.reset();
    
    // Esconde a mensagem de sucesso após 6 segundos
    setTimeout(function() {
        mensagemRetorno.classList.remove('d-block');
        mensagemRetorno.classList.add('d-none');
    }, 6000);
});