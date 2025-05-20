// menu.js - Interactive Menu Filtering

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    // Get all filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
  
    // Get all menu items
    const menuItems = document.querySelectorAll('.menu-item');
  
    // Add click event listeners to filter buttons
    filterButtons.forEach(button => {
      button.addEventListener('click', function () {
        // Remove the 'active' class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
  
        // Add the 'active' class to the clicked button
        this.classList.add('active');
  
        // Get the selected category from the button's data attribute
        const category = this.getAttribute('data-category');
  
        // Filter and display menu items based on the selected category
        filterMenuItems(category);
      });
    });
  
    // Function to filter menu items
    function filterMenuItems(category) {
      menuItems.forEach(item => {
        // Get the category of the current menu item
        const itemCategory = item.getAttribute('data-category');
  
        // Show or hide the menu item based on the selected category
        if (category === 'all' || itemCategory === category) {
          item.style.display = 'block'; // Show the item
        } else {
          item.style.display = 'none'; // Hide the item
        }
      });
    }
  
    // Initialize the menu to show all items by default
    filterMenuItems('all');
  });