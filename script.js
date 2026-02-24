// ==================== LOADING SCREEN ====================
window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loading-screen');
  setTimeout(() => {
    loadingScreen.classList.add('hidden');
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 500);
  }, 1500);
});

// ==================== NAVIGATION ====================
const nav = document.getElementById('nav');
const navToggle = document.getElementById('nav-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

// Navbar scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    nav?.classList.add('scrolled');
  } else {
    nav?.classList.remove('scrolled');
  }
});

// Mobile menu toggle
navToggle?.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  mobileMenu?.classList.toggle('active');
  document.body.style.overflow = mobileMenu?.classList.contains('active') ? 'hidden' : '';
});

// Close mobile menu on link click
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    navToggle?.classList.remove('active');
    mobileMenu?.classList.remove('active');
    document.body.style.overflow = '';
  });
});

// ==================== TYPING EFFECT ====================
const typingText = document.querySelector('.typing-text');
const phrases = [
  'Desenvolvedor Full Stack',
  'Estudante de TI',
  'Entusiasta de Tecnologia',
  'Aprendiz Dedicado'
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeEffect() {
  if (!typingText) return;
  
  const currentPhrase = phrases[phraseIndex];
  
  if (isDeleting) {
    typingText.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 50;
  } else {
    typingText.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 100;
  }
  
  if (!isDeleting && charIndex === currentPhrase.length) {
    isDeleting = true;
    typingSpeed = 2000;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    typingSpeed = 500;
  }
  
  setTimeout(typeEffect, typingSpeed);
}

// Start typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(typeEffect, 2000); // Delay para aguardar carregamento
});

// ==================== SMOOTH SCROLLING ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// ==================== SCROLL PROGRESS ====================
const scrollProgress = document.getElementById('scroll-progress');

window.addEventListener('scroll', () => {
  if (scrollProgress) {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    scrollProgress.style.width = progress + '%';
  }
});

// ==================== TILT EFFECT FOR CARDS ====================
const tiltCards = document.querySelectorAll('[data-tilt]');

tiltCards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  });
});

// ==================== ACTIVE NAV LINK ====================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// ==================== PARALLAX EFFECT FOR AURORA ====================
const auroraOrbs = document.querySelectorAll('.aurora-orb');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  
  auroraOrbs.forEach((orb, index) => {
    const speed = (index + 1) * 0.1;
    orb.style.transform = `translateY(${scrollY * speed}px)`;
  });
});

// ==================== KEYBOARD NAVIGATION ====================
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    navToggle?.classList.remove('active');
    mobileMenu?.classList.remove('active');
    document.body.style.overflow = '';
  }
});

