/* ===================================
   MAIN SCRIPT - Core Functionality
   Portfolio Website for Ganesh Iyer
   ==================================== */

'use strict';

// DOM Elements
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const navLink = document.querySelectorAll('.nav-link');

// ===================================
// Mobile Menu Toggle
// ===================================

menuToggle?.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Close menu when a link is clicked
navLink.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar') && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});

// ===================================
// Smooth Scrolling
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===================================
// Active Navigation Link
// ===================================

window.addEventListener('scroll', () => {
    let current = '';
    
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLink.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===================================
// Navbar Background on Scroll
// ===================================

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(10, 14, 39, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.backgroundColor = 'rgba(10, 14, 39, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// ===================================
// Initialize on Page Load
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio website loaded successfully!');
    
    // Add any initialization code here
    initializeAnimations();
});

// Function to initialize animations
function initializeAnimations() {
    // Will be handled by animations.js
}

// ===================================
// Utility Functions
// ===================================

/**
 * Debounce function to limit function calls
 */
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

/**
 * Throttle function
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Get scroll position
 */
function getScrollPosition() {
    return {
        x: window.pageXOffset,
        y: window.pageYOffset
    };
}

/**
 * Add class to element
 */
function addClass(element, className) {
    element?.classList.add(className);
}

/**
 * Remove class from element
 */
function removeClass(element, className) {
    element?.classList.remove(className);
}

/**
 * Toggle class on element
 */
function toggleClass(element, className) {
    element?.classList.toggle(className);
}

/**
 * Check if element has class
 */
function hasClass(element, className) {
    return element?.classList.contains(className);
}

// ===================================
// Performance Optimization
// ===================================

// Use requestAnimationFrame for smooth animations
function animateScroll(targetScroll) {
    const currentScroll = window.scrollY;
    const distance = targetScroll - currentScroll;
    const duration = 1000; // milliseconds
    const startTime = Date.now();
    
    function animation() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        window.scrollTo(0, currentScroll + distance * easeInOutCubic(progress));
        
        if (progress < 1) {
            requestAnimationFrame(animation);
        }
    }
    
    requestAnimationFrame(animation);
}

function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}

// ===================================
// Accessibility Enhancements
// ===================================

// Focus visible styles
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

// ===================================
// Error Handling
// ===================================

window.addEventListener('error', (e) => {
    console.error('Error:', e.error);
});

// Log version
console.log('Portfolio v1.0.0 - Dark Theme with Animations');
