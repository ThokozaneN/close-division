// Function to toggle dark mode and switch images
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  
    // Update the icon based on the current mode
    const modeIcon = document.getElementById('mode-icon');
    if (document.body.classList.contains('dark-mode')) {
      modeIcon.classList.remove('fa-moon');
      modeIcon.classList.add('fa-sun');
  
      // Switch hero image for dark mode
      document.querySelector('.hero-image').style.backgroundImage = "url('laptop-with-blank-screen-table-dark-office-with-night-city-view.jpg')";
    } else {
      modeIcon.classList.remove('fa-sun');
      modeIcon.classList.add('fa-moon');
  
      // Switch hero image for light mode
      document.querySelector('.hero-image').style.backgroundImage = "url('workplace-with-computer-coffee-cup-modern-office-3d-rendering.jpg')";
    }
  }
  
  // Function to toggle between monthly and one-time fees
  function toggleFeeType() {
    const isChecked = document.getElementById('feeTypeToggle').checked;
    const feeTypeLabel = document.querySelector('.fee-type-label');
    const prices = document.querySelectorAll('.price');
  
    if (isChecked) {
      feeTypeLabel.textContent = "Monthly Subscription";
      prices.forEach(price => {
        price.textContent = `Price: ${price.getAttribute('data-monthly')}`;
      });
    } else {
      feeTypeLabel.textContent = "One-Time Fee";
      prices.forEach(price => {
        price.textContent = `Price: ${price.getAttribute('data-once')}`;
      });
    }
  }
  
  // Attach event listeners to the toggle buttons
  document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);
  document.getElementById('feeTypeToggle').addEventListener('change', toggleFeeType);
  
  // Initialize prices to once-off fee by default
  toggleFeeType();
  