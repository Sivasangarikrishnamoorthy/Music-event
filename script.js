
// Smooth scrolling for navigation links
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

// Update active navigation link on scroll
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Contact form handling
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (!name || !email || !subject || !message) {
        alert('Please fill in all required fields.');
        return;
    }

    // Simulate form submission
    alert('Thank you for your message! We\'ll get back to you soon.');

    // Reset form
    this.reset();
});

// Register button functionality
document.querySelectorAll('.btn-register, .btn-tickets').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        alert('Ticket registration will be available soon! Follow us on social media for updates.');
    });
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards and sections for animation
document.querySelectorAll('.card, .feature-card, .artist-card, .schedule-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Mobile menu close on link click
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', function () {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
        }
    });
});

// Add loading animation
window.addEventListener('load', function () {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.5s ease';
});

// Initialize tooltips if needed
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});



document.addEventListener('DOMContentLoaded', () => {
    const festivalDate = new Date('2025-07-10T19:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = festivalDate - now;

        if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById('days').textContent = String(days).padStart(2, '0');
            document.getElementById('hours').textContent = String(hours).padStart(2, '0');
            document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
            document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
        } else {
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
        }
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();

    // Add pulse animation every second
    setInterval(() => {
        document.querySelectorAll('.countdown-number').forEach(el => {
            el.style.transition = 'transform 0.2s ease';
            el.style.transform = 'scale(1.05)';
            setTimeout(() => {
                el.style.transform = 'scale(1)';
            }, 200);
        });
    }, 1000);
});


document.addEventListener('DOMContentLoaded', () => {
  const backToHome = document.getElementById('backToHome');

  // Show/hide arrow when scrolling
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToHome.style.opacity = '1';
      backToHome.style.pointerEvents = 'auto';
    } else {
      backToHome.style.opacity = '0';
      backToHome.style.pointerEvents = 'none';
    }
  });

  // Scroll to #home with offset for fixed navbar
  backToHome.addEventListener('click', () => {
    const homeSection = document.querySelector('#home');
    const yOffset = -100; // Adjust based on your navbar height
    const y = homeSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  });
});


const registerContainer = document.getElementById("registerContainer");
    const closeBtn = document.getElementById("closeBtn");
    const registerForm = document.getElementById("registerForm");
    const registerMessage = document.getElementById("registerMessage");

    // Show register form after 2 minutes (120000 ms)
    setTimeout(() => {
      registerContainer.classList.add("show");
    }, 60000);

    // Close button
    closeBtn.addEventListener("click", () => {
      registerContainer.classList.remove("show");
    });

    // Back to home smooth scroll
    backHomeBtn.addEventListener("click", () => {
      registerContainer.classList.remove("show");
      const yOffset = -80; // adjust for navbar if any
      const y = document.getElementById("home").getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    });

    // Register form validation
    registerForm.addEventListener("submit", function(e) {
      e.preventDefault();

      const fullname = document.getElementById("fullname").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;
      const confirm = document.getElementById("confirm").value;

      if (!fullname || !email || !password || !confirm) {
        registerMessage.textContent = "All fields are required.";
        registerMessage.className = "message error";
        return;
      }

      if (password !== confirm) {
        registerMessage.textContent = "Passwords do not match.";
        registerMessage.className = "message error";
        return;
      }

      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!email.match(emailPattern)) {
        registerMessage.textContent = "Invalid email format.";
        registerMessage.className = "message error";
        return;
      }

      registerMessage.textContent = "Registration successful!";
      registerMessage.className = "message success";
      registerForm.reset();
    });