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
    '.service-card, .step, .about-content, .about-visual, .contact-content, .contact-form, .section-header, .award-card, .award-detail-card, .finalist-card, .comparison-card, .cpo-teaser-content, .cpo-teaser-visual, .faq-card'
).forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Stagger animations
[
    ['.service-card', 100],
    ['.step', 150],
    ['.award-card', 100],
    ['.finalist-card', 100],
    ['.comparison-card', 100],
    ['.faq-card', 80],
].forEach(([selector, delay]) => {
    document.querySelectorAll(selector).forEach((el, i) => {
        el.style.transitionDelay = `${i * delay}ms`;
    });
});

// FAQ accordion toggle
document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
        const card = btn.closest('.faq-card');
        const isActive = card.classList.contains('active');

        // Close all other cards
        document.querySelectorAll('.faq-card.active').forEach(open => {
            if (open !== card) {
                open.classList.remove('active');
                open.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            }
        });

        // Toggle current card
        card.classList.toggle('active', !isActive);
        btn.setAttribute('aria-expanded', String(!isActive));
    });
});

// Selector chips (multi-select toggle)
const chips = document.querySelectorAll('.selector-chips .chip');
const interestInput = document.getElementById('interestValue');

chips.forEach(chip => {
    chip.addEventListener('click', () => {
        const wasSelected = chip.classList.contains('selected');
        chip.classList.toggle('selected');

        if (!wasSelected) {
            chip.classList.add('just-selected');
            setTimeout(() => chip.classList.remove('just-selected'), 300);
        }

        // Sync hidden input with all selected values
        const selected = [...document.querySelectorAll('.selector-chips .chip.selected')]
            .map(c => c.dataset.value);
        if (interestInput) interestInput.value = selected.join(',');
    });
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = 'Message Sent!';
    btn.classList.add('btn-success');
    btn.disabled = true;

    setTimeout(() => {
        btn.textContent = originalText;
        btn.classList.remove('btn-success');
        btn.disabled = false;
        contactForm.reset();
    }, 3000);
});
