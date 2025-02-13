function toggleMenu() {
  const nav = document.querySelector('.nav');
  const menuIcon = document.querySelector('.menu-icon');
  
  nav.classList.toggle('active');
  menuIcon.classList.toggle('active');
  
  // Toggle between hamburger and close icon
  if (nav.classList.contains('active')) {
    menuIcon.innerHTML = '✕'; // Close icon
    menuIcon.style.color = '#333';
  } else {
    menuIcon.innerHTML = '&#9776;'; // Hamburger icon
    menuIcon.style.color = '#FFD700';
  }
}

// Skill popup functionality
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach((card) => {
  card.addEventListener('click', () => {
    const skillName = card.querySelector('h3').textContent;
    const skillPercentage = card.getAttribute('data-skill');
    const popup = document.getElementById('skill-popup');

    // Update popup content
    document.getElementById('skill-name').textContent = skillName;
    document.getElementById('skill-percentage').textContent = `${skillPercentage}%`;
    document.querySelector('.progress-fill').style.width = `${skillPercentage}%`;

    // Show the popup
    popup.style.display = 'block';
  });
});

// Close popup when clicking outside or on close button
document.addEventListener('click', (event) => {
  const popup = document.getElementById('skill-popup');
  if (event.target === popup || event.target.classList.contains('close')) {
    popup.style.display = 'none';
  }
});