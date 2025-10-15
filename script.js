const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


const toggleButtons = document.querySelectorAll('.toggle-btn');

toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    const projectContent = button.nextElementSibling;
    projectContent.classList.toggle('collapsed');
    button.textContent = projectContent.classList.contains('collapsed') ? 'Expand' : 'Collapse';
  });
});
