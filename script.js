// Initialize Animations
document.addEventListener('DOMContentLoaded', () => {
    // 1. AOS Animation
    AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-in-out'
    });

    // 2. Preloader
    window.addEventListener('load', () => {
        const loader = document.getElementById('loader');
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 500);
    });

    // 3. Custom Cursor
    const cursor = document.querySelector('.cursor');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // 4. Typewriter Effect
    new Typed('.typewriter', {
        strings: ['Creative Web Developer', 'UI/UX Enthusiast', 'Problem Solver'],
        typeSpeed: 65,
        backSpeed: 40,
        loop: true
    });

    // 5. Smooth Scroll for Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 6. Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(5, 5, 5, 0.9)';
            nav.style.padding = '15px 0';
        } else {
            nav.style.background = 'transparent';
            nav.style.padding = '25px 0';
        }
    });
});