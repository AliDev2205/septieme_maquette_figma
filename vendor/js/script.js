//Script pour le menu mobile 

  document.getElementById('mobile-menu-toggle').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
  });
    // Initialisation du Swiper
    document.addEventListener('DOMContentLoaded', function() {
        const swiper = new Swiper('.teamSwiper', {
            // Paramètres du carrousel
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            },
        });
    });


    // Ajouter un observateur d'intersection pour déclencher les animations
    document.addEventListener('DOMContentLoaded', function() {
        const reasons = document.querySelectorAll('.animate-float');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                    entry.target.classList.add('hover-float');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        });
        
        reasons.forEach(reason => {
            // Désactiver l'animation initialement
            reason.style.animationPlayState = 'paused';
            observer.observe(reason);
        });
    });