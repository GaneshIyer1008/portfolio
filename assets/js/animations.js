/* ===================================
   ANIMATIONS - Scroll Animation Handlers
   ==================================== */

'use strict';

// ===================================
// Intersection Observer Setup
// ===================================

/**
 * Initialize Intersection Observer for scroll animations
 */
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation class when element enters viewport
                entry.target.classList.add('animated');
                
                // Optional: Unobserve after animation
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all elements with animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });
}

// ===================================
// Stagger Animation Setup
// ===================================

/**
 * Setup staggered animations for elements
 */
function setupStaggerAnimations() {
    const projectCards = document.querySelectorAll('.project-card[data-animate="fade-in"]');
    const publicationItems = document.querySelectorAll('.publication-item[data-animate="slide-up"]');
    const skillBadges = document.querySelectorAll('.skill-badge');
    
    // Stagger animation delays
    projectCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
    
    publicationItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.15}s`;
    });
    
    skillBadges.forEach((badge, index) => {
        badge.style.animationDelay = `${index * 0.05}s`;
    });
}

// ===================================
// Scroll Progress Indicator
// ===================================

/**
 * Update scroll progress bar
 */
function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    
    const progressBar = document.querySelector('progress');
    if (progressBar) {
        progressBar.value = scrollPercent;
    }
}

// ===================================
// Parallax Effect
// ===================================

/**
 * Simple parallax effect for hero section
 */
function handleParallax() {
    const scrolled = window.scrollY;
    const heroGradient = document.querySelector('.hero-gradient');
    
    if (heroGradient) {
        heroGradient.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
}

// ===================================
// Counter Animation
// ===================================

/**
 * Animate numbers counting up
 */
function animateCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-counter'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// ===================================
// Hover Effects
// ===================================

/**
 * Add hover effects to interactive elements
 */
function setupHoverEffects() {
    const hoverElements = document.querySelectorAll('.project-card, .skill-badge, .social-icon');
    
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// ===================================
// Keyboard Navigation
// ===================================

/**
 * Enhance keyboard navigation
 */
function setupKeyboardNavigation() {
    const buttons = document.querySelectorAll('a, button');
    
    buttons.forEach(btn => {
        btn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                btn.click();
            }
        });
    });
}

// ===================================
// Cursor Effect
// ===================================

/**
 * Custom cursor tracking (optional)
 */
function setupCursorTracking() {
    const interactiveElements = document.querySelectorAll('a, button, .project-card');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            document.body.style.cursor = 'pointer';
        });
        
        element.addEventListener('mouseleave', () => {
            document.body.style.cursor = 'auto';
        });
    });
}

// ===================================
// Scroll Spy for Navigation
// ===================================

/**
 * Highlight active navigation item based on scroll position
 */
function setupScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const callback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };
    
    const observer = new IntersectionObserver(callback, {
        threshold: 0.5
    });
    
    sections.forEach(section => observer.observe(section));
}

// ===================================
// Text Animation on Scroll
// ===================================

/**
 * Animate text appearing on scroll
 */
function animateTextOnScroll() {
    const textElements = document.querySelectorAll('[data-animate-text]');
    
    textElements.forEach(element => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Trigger text animation
                    animateText(element);
                    observer.unobserve(element);
                }
            });
        });
        
        observer.observe(element);
    });
}

/**
 * Helper function to animate text character by character
 */
function animateText(element) {
    const text = element.innerText;
    element.innerText = '';
    
    let index = 0;
    const delay = 30; // milliseconds between each character
    
    function typeChar() {
        if (index < text.length) {
            element.innerText += text[index];
            index++;
            setTimeout(typeChar, delay);
        }
    }
    
    typeChar();
}

// ===================================
// Lazy Loading
// ===================================

/**
 * Lazy load images
 */
function setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ===================================
// Window Resize Handler
// ===================================

/**
 * Handle window resize events
 */
const handleResize = debounce(() => {
    // Recalculate animations on resize
    console.log('Window resized');
}, 250);

function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// ===================================
// Performance Monitoring
// ===================================

/**
 * Log performance metrics
 */
function logPerformanceMetrics() {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Page load time: ${pageLoadTime}ms`);
    });
}

// ===================================
// Initialization
// ===================================

/**
 * Initialize all animations and effects
 */
function initializeAllAnimations() {
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    function init() {
        setupIntersectionObserver();
        setupStaggerAnimations();
        setupHoverEffects();
        setupKeyboardNavigation();
        setupCursorTracking();
        setupScrollSpy();
        logPerformanceMetrics();
        
        // Optional animations
        // animateTextOnScroll();
        // setupLazyLoading();
        
        console.log('All animations initialized!');
    }
}

// ===================================
// Scroll Event Listeners
// ===================================

window.addEventListener('scroll', () => {
    updateScrollProgress();
    handleParallax();
}, { passive: true });

window.addEventListener('resize', handleResize);

// ===================================
// Initialize on DOMContentLoaded
// ===================================

initializeAllAnimations();

// Export functions for external use
window.AnimationUtils = {
    animateCounters,
    animateText,
    debounce,
    setupIntersectionObserver,
    initializeAllAnimations
};

console.log('Animation module loaded successfully!');
