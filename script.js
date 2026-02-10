// script.js - Interatividade para a página estática
document.addEventListener('DOMContentLoaded', function() {
    // Menu hamburguer para dispositivos móveis
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Fechar o menu ao clicar em um link
        document.querySelectorAll('.nav-menu a').forEach(n => n.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }));
    }
    
    // Formulário de contato
    const messageForm = document.getElementById('messageForm');
    
    if (messageForm) {
        messageForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulação de envio do formulário
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            
            // Limpar formulário
            messageForm.reset();
            
            // Mostrar mensagem de sucesso
            alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso. Em um site real, ela seria enviada para ${email}.`);
        });
    }
    
    // Adicionar classe ativa ao item do menu conforme rolagem
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Animações de entrada suave para elementos
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // Observar elementos para animação
    document.querySelectorAll('.about-card, .portfolio-card').forEach(el => {
        observer.observe(el);
    });
});