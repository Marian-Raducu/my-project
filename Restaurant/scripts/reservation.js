// JavaScript for Table Selection and Booking
document.addEventListener('DOMContentLoaded', function () {
  const tables = document.querySelectorAll('.table[data-available="true"]');
  const tableInput = document.getElementById('table');
  const reservationForm = document.getElementById('reservation-form');

  // Handle Table Selection
  tables.forEach(table => {
    table.addEventListener('click', function () {
      const tableNumber = this.getAttribute('data-table');
      tableInput.value = `Table ${tableNumber}`; // Update the selected table input
    });
  });

  // Handle Form Submission
  reservationForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    // Get Form Data
    const table = tableInput.value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Simple Validation
    if (!table || !date || !time || !name || !email || !phone) {
      alert('Please fill out all fields.');
      return;
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Validate Phone Number
    const phoneRegex = /^\d{10,}$/;
    if (!phoneRegex.test(phone)) {
      alert('Please enter a valid phone number.');
      return;
    }

    // Simulate Booking Confirmation
    alert(`Booking confirmed for ${table} on ${date} at ${time}. We will contact you at ${email} or ${phone} for confirmation.`);
    reservationForm.reset(); // Clear the form
  });
});