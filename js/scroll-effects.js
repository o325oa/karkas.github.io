document.addEventListener('DOMContentLoaded', function() {
    const scrollElements = document.querySelectorAll('[data-scroll]');
    
    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        
        return (
            elementTop <= 
            (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };
    
    const elementOutofView = (el) => {
        const elementTop = el.getBoundingClientRect().top;
        
        return (
            elementTop > (window.innerHeight || document.documentElement.clientHeight)
        );
    };
    
    const displayScrollElement = (element) => {
        element.classList.add('is-visible');
    };
    
    const hideScrollElement = (element) => {
        element.classList.remove('is-visible');
    };
    
    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            } else if (elementOutofView(el)) {
                hideScrollElement(el);
            }
        });
    };

    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });

    handleScrollAnimation();

    const heroTitle = document.querySelector('.hero__title');
    const heroSubtitle = document.querySelector('.hero__subtitle');
    const heroFeatures = document.querySelectorAll('.feature');
    const heroButton = document.querySelector('.hero .btn');
    
    if (heroTitle) heroTitle.classList.add('slide-up');
    if (heroSubtitle) heroSubtitle.classList.add('slide-up', 'delay-1');
    
    heroFeatures.forEach((feature, index) => {
        feature.classList.add('slide-up', `delay-${index + 2}`);
    });
    
    if (heroButton) heroButton.classList.add('slide-up', 'delay-4');
});