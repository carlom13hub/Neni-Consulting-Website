// Neni Consulting — Interactive Scripts

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile navigation toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile nav when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Scroll-triggered fade-in animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Apply fade-in to sections and cards
document.querySelectorAll(
    '.service-card, .step, .about-content, .about-visual, .contact-content, .contact-form, .section-header, .award-card, .award-detail-card, .finalist-card'
).forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Stagger animation for service cards
document.querySelectorAll('.service-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 100}ms`;
});

// Stagger animation for steps
document.querySelectorAll('.step').forEach((step, i) => {
    step.style.transitionDelay = `${i * 150}ms`;
});

// Stagger animation for award cards
document.querySelectorAll('.award-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 100}ms`;
});

// Stagger animation for finalist cards
document.querySelectorAll('.finalist-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 100}ms`;
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = 'Message Sent!';
    btn.style.background = '#22C55E';
    btn.disabled = true;

    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.disabled = false;
        contactForm.reset();
    }, 3000);
});
