// main.js - General Functionality for the Website

// main.js - Smooth Scrolling
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    // Check if the link is an internal page link
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault(); // Prevent default behavior only for anchor links
      const targetSection = document.querySelector(href);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // Allow default behavior for other links (e.g., about.html, menu.html)
  });
});
  
  // Form Validation for Reservation Form
  const reservationForm = document.getElementById('reservation-form');
  if (reservationForm) {
    reservationForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent form submission
  
      // Get form inputs
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const date = document.getElementById('date').value.trim();
      const time = document.getElementById('time').value.trim();
      const guests = document.getElementById('guests').value.trim();
  
      // Simple validation
      if (!name || !email || !phone || !date || !time || !guests) {
        alert('Please fill out all fields.');
        return;
      }
  
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
  
      // Validate phone number format (basic check)
      const phoneRegex = /^\d{10,}$/; // At least 10 digits
      if (!phoneRegex.test(phone)) {
        alert('Please enter a valid phone number.');
        return;
      }
  
      // If all validations pass, submit the form (simulate submission)
      alert('Reservation successful! We look forward to seeing you.');
      reservationForm.reset(); // Clear the form
    });
  }
  
  // Form Validation for Contact Form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent form submission
  
      // Get form inputs
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.getElementById('message').value.trim();
  
      // Simple validation
      if (!name || !email || !subject || !message) {
        alert('Please fill out all fields.');
        return;
      }
  
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
  
      // If all validations pass, submit the form (simulate submission)
      alert('Thank you for your message! We will get back to you soon.');
      contactForm.reset(); // Clear the form
    });
  }
  
  // Toggle Active Class for Menu Filters
  const filterButtons = document.querySelectorAll('.filter-btn');
  if (filterButtons) {
    filterButtons.forEach(button => {
      button.addEventListener('click', function () {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to the clicked button
        this.classList.add('active');
  
        // Filter menu items based on category
        const category = this.getAttribute('data-category');
        filterMenuItems(category);
      });
    });
  }
  
  // Function to Filter Menu Items
  function filterMenuItems(category) {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
      const itemCategory = item.getAttribute('data-category');
      if (category === 'all' || itemCategory === category) {
        item.style.display = 'block'; // Show the item
      } else {
        item.style.display = 'none'; // Hide the item
      }
    });
  }
  
  // Initialize the menu filter to show all items by default
  if (filterButtons.length > 0) {
    filterMenuItems('all');
  }
  
  // Scroll to Top Button
  const scrollToTopButton = document.createElement('button');
  scrollToTopButton.innerHTML = '↑';
  scrollToTopButton.classList.add('scroll-to-top');
  document.body.appendChild(scrollToTopButton);
  
  scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  // Show/Hide Scroll to Top Button
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollToTopButton.style.display = 'block';
    } else {
      scrollToTopButton.style.display = 'none';
    }
  });
  
  // Style for Scroll to Top Button
  const scrollToTopStyle = document.createElement('style');
  scrollToTopStyle.innerHTML = `
    .scroll-to-top {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: #ff6f61;
      color: #fff;
      border: none;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      font-size: 1.2rem;
      cursor: pointer;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
      display: none;
      transition: background-color 0.3s ease, transform 0.3s ease;
    }
    .scroll-to-top:hover {
      background-color: #e65a50;
      transform: scale(1.1);
    }
  `;
  document.head.appendChild(scrollToTopStyle);


  document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    const closeBtn = document.querySelector('.close-btn img');
  
    // Toggle Navbar on Hamburger Menu Click
    hamburgerMenu.addEventListener('click', function () {
      navLinks.classList.add('active'); // Open navbar
    });
  
    // Close Navbar on Close Button Click
    closeBtn.addEventListener('click', function () {
      navLinks.classList.remove('active'); // Close navbar
    });
  
    // Close Navbar when a Link is Clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function () {
        navLinks.classList.remove('active'); // Close navbar
      });
    });
  });