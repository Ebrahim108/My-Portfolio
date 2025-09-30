// Background Particles Animation
const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 2;
    this.speedX = Math.random() * 2 - 1;
    this.speedY = Math.random() * 2 - 1;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }
  draw() {
    ctx.fillStyle = "#00eaff";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function init() {
  particlesArray = [];
  for (let i = 0; i < 100; i++) {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    particlesArray.push(new Particle(x, y));
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
    particlesArray[i].draw();
  }
  requestAnimationFrame(animate);
}

init();
animate();

// Scroll Reveal Animation
function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", reveal);
reveal();

// Dark/Light Mode Toggle
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    toggleBtn.textContent = "🌙 Dark Mode";
  } else {
    toggleBtn.textContent = "☀️ Light Mode";
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.E-commerce-toggle-btn');
  const dashboardContent = document.querySelector('.E-commerce-dashboard-content');

  // make sure it's collapsed at the start
  dashboardContent.classList.add('collapsed');
  toggleBtn.textContent = 'Expand';

  toggleBtn.addEventListener('click', () => {
    dashboardContent.classList.toggle('collapsed');
    toggleBtn.textContent = dashboardContent.classList.contains('collapsed')
      ? 'Expand'
      : 'Collapse';
  });
});

/* ######Sales Project######### */

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.Sales-toggle-btn');
  const dashboardContent = document.querySelector('.Sales-dashboard-content');

  // make sure it's collapsed at the start
  dashboardContent.classList.add('collapsed');
  toggleBtn.textContent = 'Expand';

  toggleBtn.addEventListener('click', () => {
    dashboardContent.classList.toggle('collapsed');
    toggleBtn.textContent = dashboardContent.classList.contains('collapsed')
      ? 'Expand'
      : 'Collapse';

  });
});







