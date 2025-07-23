const toggleBtn = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('navbar');

  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    });