// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Form validation
  document.getElementById('opinions-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const opinionInput = document.querySelector('input[type="text"]');
    if (opinionInput.value.trim() === '') {
      alert('Please provide your opinion before submitting.');
    } else {
      // You can add further functionality here, such as submitting the form using AJAX
      // Example: sendForm(opinionInput.value);
      opinionInput.value = ''; // Clear the input field after submission
    }
  });
  