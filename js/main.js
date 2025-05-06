document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    
    burger.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            if (this.classList.contains('nav__link')) {  
                nav.classList.remove('active');
                burger.classList.remove('active');
            };
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', () => {
            const currentlyActive = document.querySelector('.accordion-item.active');
            
            if (currentlyActive && currentlyActive !== item) {
                currentlyActive.classList.remove('active');
            }
            
            item.classList.toggle('active');
        });
    });

    const modal = document.querySelector('.modal');
    const modalTriggers = document.querySelectorAll('.open-modal');
    const modalClose = document.querySelector('.modal__close');
    
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    const forms = document.querySelectorAll('.form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            alert('Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.');
            
            this.reset();
            if (this.closest('.modal')) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
});