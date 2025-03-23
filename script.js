// Loading Animation
document.addEventListener('DOMContentLoaded', function() {
    // Add loading screen
    const loading = document.createElement('div');
    loading.className = 'loading';
    document.body.appendChild(loading);

    // Remove loading screen after content loads
    window.addEventListener('load', function() {
        setTimeout(() => {
            loading.remove();
        }, 1500);
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form Submission Handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Log form data (replace with actual form submission)
        console.log('Form submitted:', data);
        
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        
        // Reset form
        this.reset();
    });
}

// Testimonial Carousel
const testimonialCarousel = document.getElementById('testimonialCarousel');
if (testimonialCarousel) {
    new bootstrap.Carousel(testimonialCarousel, {
        interval: 5000,
        pause: 'hover'
    });
}

// Scroll Animations
function animateOnScroll() {
    const elements = document.querySelectorAll('.scroll-animate');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('active');
        }
    });
}

// Add scroll-animate class to elements
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.service-card, .featured-product, .why-choose-us .card, .testimonial-card');
    animateElements.forEach(element => {
        element.classList.add('scroll-animate');
    });
});

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// WhatsApp Chat Button
function createWhatsAppButton() {
    const button = document.createElement('a');
    button.href = 'https://wa.me/233556866590'; 
    button.className = 'whatsapp-button';
    button.target = '_blank';
    button.innerHTML = '<i class="fab fa-whatsapp"></i>';
    document.body.appendChild(button);
}

// Create WhatsApp button
createWhatsAppButton();

// Add hover effect to service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Add hover effect to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Add custom styles for WhatsApp button
const style = document.createElement('style');
style.textContent = `
    .whatsapp-button {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #25D366;
        color: white;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 30px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        z-index: 1000;
        transition: all 0.3s ease;
    }
    
    .whatsapp-button:hover {
        transform: scale(1.1);
        color: white;
    }
    
    @media (max-width: 768px) {
        .whatsapp-button {
            width: 50px;
            height: 50px;
            font-size: 25px;
            bottom: 15px;
            right: 15px;
        }
    }
`;
document.head.appendChild(style); 