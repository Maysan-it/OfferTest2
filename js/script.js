// Hide loading screen
window.addEventListener('load', function() {
    setTimeout(() => {
        document.getElementById('loadingOverlay').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('loadingOverlay').style.display = 'none';
        }, 500);
    }, 2000);
});

// Countdown Timer
function updateCountdown() {
    const endDate = new Date('2024-09-30 23:59:59').getTime();
    const now = new Date().getTime();
    const timeLeft = endDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    if (timeLeft < 0) {
        document.getElementById('countdown').innerHTML = '<div style="color: var(--red); font-size: 1.5rem; font-weight: bold;">انتهى العرض!</div>';
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Smooth scroll to offers
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Add click tracking for analytics
document.querySelectorAll('.btn-primary, .btn-order, .whatsapp-float, .phone-float').forEach(button => {
    button.addEventListener('click', function() {
        // Track clicks (replace with your analytics code)
        console.log('Button clicked:', this.textContent || 'Float button');
        
        // Google Analytics tracking (uncomment and add your GA code)
        // if (typeof gtag !== 'undefined') {
        //     gtag('event', 'click', {
        //         'event_category': 'CTA',
        //         'event_label': this.textContent || 'Float button'
        //     });
        // }
    });
});

// Add scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, observerOptions);

document.querySelectorAll('.offer-card, .feature-item').forEach(el => {
    observer.observe(el);
});

// Add urgency messaging based on time
const currentHour = new Date().getHours();
if (currentHour >= 18 || currentHour <= 8) {
    const urgencyMessages = document.querySelectorAll('.urgency-title');
    urgencyMessages.forEach(msg => {
        msg.innerHTML = '🌙 عرض ليلي خاص - خصم إضافي 5%!';
    });
}

// Form validation and WhatsApp integration
function sendWhatsAppMessage(service) {
    const phoneNumber = '966500000000'; // Replace with actual number
    const message = `مرحباً، أريد الاستفسار عن ${service} من عروض اليوم الوطني 95`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Add floating button pulse effect on scroll
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        document.querySelector('.whatsapp-float').style.transform = 'scale(1.1)';
        setTimeout(() => {
            document.querySelector('.whatsapp-float').style.transform = 'scale(1)';
        }, 200);
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Auto-update countdown every second
setInterval(() => {
    const countdownElements = document.querySelectorAll('.countdown-number');
    countdownElements.forEach(el => {
        el.style.color = Math.random() > 0.5 ? 'var(--red)' : 'var(--saudi-green)';
        setTimeout(() => {
            el.style.color = 'var(--saudi-green)';
        }, 100);
    });
}, 5000);

console.log('🇸🇦 3WAY National Day 95 Landing Page Loaded Successfully! 🚗');