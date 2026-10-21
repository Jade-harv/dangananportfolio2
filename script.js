document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lucide Icons
  lucide.createIcons();

  // 2. Navbar Scroll Blur & Shadow Effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });

  // 3. Scroll Reveal Observer for Fade-In Elements
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // 4. Copy Email to Clipboard Function
  window.copyEmail = function() {
    const emailText = document.getElementById('emailStr').innerText;
    navigator.clipboard.writeText(emailText).then(() => {
      alert('Email copied to clipboard!');
    });
  };

  // 5. Mobile Hamburger Menu Toggle
  const navContainer = document.querySelector('.nav-container');
  const navLinks = document.querySelector('.nav-links');

  // Create hamburger button dynamically for mobile navigation
  const menuBtn = document.createElement('button');
  menuBtn.className = 'mobile-menu-btn';
  menuBtn.innerHTML = '<i data-lucide="menu"></i>';
  navContainer.insertBefore(menuBtn, document.querySelector('.nav-cta'));
  lucide.createIcons(); // Refresh icons for the newly added button

  // Toggle mobile navigation visibility
  menuBtn.addEventListener('click', () => {
    const isOpen = navLinks.style.display === 'flex';
    navLinks.style.display = isOpen ? 'none' : 'flex';
    
    // Style adjustments for mobile dropdown overlay
    if (!isOpen) {
      navLinks.style.position = 'absolute';
      navLinks.style.top = '100%';
      navLinks.style.left = '0';
      navLinks.style.width = '100%';
      navLinks.style.flexDirection = 'column';
      navLinks.style.background = 'rgba(10, 11, 13, 0.95)';
      navLinks.style.padding = '1.5rem';
      navLinks.style.borderBottom = '1px solid var(--border-color)';
      navLinks.style.backdropFilter = 'blur(12px)';
    }
  });

  // Close mobile menu automatically when a link is clicked
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navLinks.style.display = 'none';
      }
    });
  });
});