// djbenjax - Main JavaScript
// Glitch/Retro/Hacker Theme

// ========================================
// Language Toggle Functionality
// ========================================

class LanguageToggle {
    constructor() {
        this.currentLang = 'en';
        this.toggleButton = document.getElementById('langToggle');
        this.init();
    }

    init() {
        // Check for saved language preference
        const savedLang = localStorage.getItem('djbenjax_lang');
        if (savedLang) {
            this.currentLang = savedLang;
            this.updateLanguage();
        }

        // Add event listener to toggle button
        if (this.toggleButton) {
            this.toggleButton.addEventListener('click', () => this.toggle());
        }
    }

    toggle() {
        this.currentLang = this.currentLang === 'en' ? 'es' : 'en';
        this.updateLanguage();
        localStorage.setItem('djbenjax_lang', this.currentLang);
        
        // Add glitch effect to button
        this.addGlitchEffect(this.toggleButton);
    }

    updateLanguage() {
        document.body.setAttribute('data-lang', this.currentLang);
        
        // Update all elements with data-en and data-es attributes
        const translatableElements = document.querySelectorAll('[data-en][data-es]');
        translatableElements.forEach(element => {
            const text = element.getAttribute(`data-${this.currentLang}`);
            if (text) {
                element.textContent = text;
            }
        });

        // Show/hide language-specific content
        document.querySelectorAll('.lang-en').forEach(el => {
            el.style.display = this.currentLang === 'en' ? '' : 'none';
        });
        
        document.querySelectorAll('.lang-es').forEach(el => {
            el.style.display = this.currentLang === 'es' ? '' : 'none';
        });
    }

    addGlitchEffect(element) {
        element.style.animation = 'none';
        setTimeout(() => {
            element.style.animation = 'glitch-button 0.3s ease';
        }, 10);
    }
}

// ========================================
// Gallery Navigation (Identity Page)
// ========================================

class GalleryNavigation {
    constructor() {
        this.container = document.querySelector('.gallery-container');
        this.track = document.querySelector('.gallery-track');
        this.prevButton = document.getElementById('galleryPrev');
        this.nextButton = document.getElementById('galleryNext');
        this.items = document.querySelectorAll('.gallery-item');
        this.currentIndex = 0;
        this.init();
    }

    init() {
        if (!this.container || !this.track) return;

        // Add event listeners for navigation buttons
        if (this.prevButton) {
            this.prevButton.addEventListener('click', () => this.navigate('prev'));
        }
        
        if (this.nextButton) {
            this.nextButton.addEventListener('click', () => this.navigate('next'));
        }

        // Add keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.navigate('prev');
            if (e.key === 'ArrowRight') this.navigate('next');
        });

        // Add touch/swipe support
        this.addTouchSupport();
    }

    navigate(direction) {
        const itemWidth = this.items[0]?.offsetWidth || 0;
        const gap = 32; // 2rem gap
        const scrollAmount = itemWidth + gap;

        if (direction === 'prev') {
            this.container.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        } else {
            this.container.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    }

    addTouchSupport() {
        let startX = 0;
        let scrollLeft = 0;

        this.container.addEventListener('touchstart', (e) => {
            startX = e.touches[0].pageX;
            scrollLeft = this.container.scrollLeft;
        });

        this.container.addEventListener('touchmove', (e) => {
            const x = e.touches[0].pageX;
            const walk = (startX - x) * 2;
            this.container.scrollLeft = scrollLeft + walk;
        });
    }
}

// ========================================
// Smooth Scroll
// ========================================

class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (href !== '#' && href.length > 1) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });
    }
}

// ========================================
// Glitch Effects on Scroll
// ========================================

class GlitchEffects {
    constructor() {
        this.elements = document.querySelectorAll('.section-title');
        this.init();
    }

    init() {
        // Add intersection observer for scroll animations
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.triggerGlitch(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );

        this.elements.forEach(element => {
            observer.observe(element);
        });
    }

    triggerGlitch(element) {
        // Add temporary glitch class
        element.style.animation = 'glitch-anim 0.5s ease';
        setTimeout(() => {
            element.style.animation = '';
        }, 500);
    }
}

// ========================================
// Card Hover Effects
// ========================================

class CardEffects {
    constructor() {
        this.cards = document.querySelectorAll('.highlight-card, .social-card, .requirement-card');
        this.init();
    }

    init() {
        this.cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                this.addRandomGlitch(card);
            });
        });
    }

    addRandomGlitch(element) {
        const shouldGlitch = Math.random() > 0.7; // 30% chance
        if (shouldGlitch) {
            element.style.animation = 'glitch-button 0.2s ease';
            setTimeout(() => {
                element.style.animation = '';
            }, 200);
        }
    }
}

// ========================================
// Loading Screen (Optional Enhancement)
// ========================================

class LoadingScreen {
    constructor() {
        this.init();
    }

    init() {
        window.addEventListener('load', () => {
            // Add fade-in effect to body
            document.body.style.opacity = '0';
            setTimeout(() => {
                document.body.style.transition = 'opacity 0.5s ease';
                document.body.style.opacity = '1';
            }, 100);
        });
    }
}

// ========================================
// CRT Flicker Effect (Subtle)
// ========================================

class CRTEffect {
    constructor() {
        this.overlay = document.querySelector('.crt-overlay');
        this.init();
    }

    init() {
        if (!this.overlay) return;

        // Random flicker effect
        setInterval(() => {
            if (Math.random() > 0.95) { // 5% chance every interval
                this.flicker();
            }
        }, 3000);
    }

    flicker() {
        this.overlay.style.opacity = '0.5';
        setTimeout(() => {
            this.overlay.style.opacity = '1';
        }, 50);
    }
}

// ========================================
// Navigation Active State
// ========================================

class NavigationState {
    constructor() {
        this.links = document.querySelectorAll('.nav-link');
        this.currentPage = window.location.pathname.split('/').pop() || 'index.html';
        this.init();
    }

    init() {
        this.links.forEach(link => {
            const href = link.getAttribute('href');
            if (href === this.currentPage || 
                (this.currentPage === '' && href === 'index.html')) {
                link.classList.add('active');
            }
        });
    }
}

// ========================================
// Form Validation (if needed in future)
// ========================================

class FormValidation {
    constructor() {
        this.forms = document.querySelectorAll('form');
        this.init();
    }

    init() {
        this.forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                if (!this.validate(form)) {
                    e.preventDefault();
                }
            });
        });
    }

    validate(form) {
        let isValid = true;
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                this.showError(input);
            } else {
                this.clearError(input);
            }
        });

        return isValid;
    }

    showError(input) {
        input.style.borderColor = 'var(--glitch-red)';
    }

    clearError(input) {
        input.style.borderColor = 'var(--primary-blue)';
    }
}

// ========================================
// Easter Egg - Konami Code
// ========================================

class KonamiCode {
    constructor() {
        this.code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // Up Up Down Down Left Right Left Right B A
        this.position = 0;
        this.init();
    }

    init() {
        document.addEventListener('keydown', (e) => {
            if (e.keyCode === this.code[this.position]) {
                this.position++;
                if (this.position === this.code.length) {
                    this.activate();
                    this.position = 0;
                }
            } else {
                this.position = 0;
            }
        });
    }

    activate() {
        // Trigger intense glitch effect across the entire page
        document.body.style.animation = 'glitch-anim 2s ease';
        
        // Add temporary color shift
        document.documentElement.style.setProperty('--primary-blue', '#FF0040');
        
        setTimeout(() => {
            document.body.style.animation = '';
            document.documentElement.style.setProperty('--primary-blue', '#0066FF');
        }, 2000);
        
        console.log('🎮 GLITCH MODE ACTIVATED! 🎮');
    }
}

// ========================================
// Performance Monitoring
// ========================================

class PerformanceMonitor {
    constructor() {
        this.init();
    }

    init() {
        // Log page load time
        window.addEventListener('load', () => {
            const loadTime = performance.now();
            console.log(`⚡ Page loaded in ${loadTime.toFixed(2)}ms`);
        });
    }
}

// ========================================
// Accessibility Enhancements
// ========================================

class AccessibilityEnhancements {
    constructor() {
        this.init();
    }

    init() {
        // Add skip to content link
        this.addSkipLink();
        
        // Ensure all interactive elements are keyboard accessible
        this.enhanceKeyboardNav();
    }

    addSkipLink() {
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'skip-link';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 0;
            background: var(--primary-blue);
            color: white;
            padding: 8px;
            text-decoration: none;
            z-index: 10000;
        `;
        
        skipLink.addEventListener('focus', () => {
            skipLink.style.top = '0';
        });
        
        skipLink.addEventListener('blur', () => {
            skipLink.style.top = '-40px';
        });
        
        document.body.insertBefore(skipLink, document.body.firstChild);
    }

    enhanceKeyboardNav() {
        // Add visible focus styles to interactive elements
        const style = document.createElement('style');
        style.textContent = `
            *:focus {
                outline: 2px solid var(--primary-blue);
                outline-offset: 2px;
            }
        `;
        document.head.appendChild(style);
    }
}

// ========================================
// Initialize All Components
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Core functionality
    new LanguageToggle();
    new GalleryNavigation();
    new SmoothScroll();
    new NavigationState();
    
    // Visual effects
    new GlitchEffects();
    new CardEffects();
    new CRTEffect();
    new LoadingScreen();
    
    // Enhancements
    new FormValidation();
    new AccessibilityEnhancements();
    new PerformanceMonitor();
    
    // Easter egg
    new KonamiCode();
    
    console.log(`
    ╔═══════════════════════════════════╗
    ║   djbenjax.com loaded             ║
    ║   Glitch/Retro/Hacker Theme       ║
    ║   © 2025 djbenjax                 ║
    ╚═══════════════════════════════════╝
    `);
});

// ========================================
// Export for potential module use
// ========================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        LanguageToggle,
        GalleryNavigation,
        SmoothScroll,
        GlitchEffects
    };
}
