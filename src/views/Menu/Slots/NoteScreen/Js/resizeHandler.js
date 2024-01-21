// resizeHandler.js

export function handleResize() {
  const screenWidth = window.innerWidth;
  const toggleThreshold = 768;
  const body = document.body;
  const menuToggle = document.querySelector('.menu-toggle.is-active');
  const hamburgerIcon = document.querySelector('.hamburger > span::before');

  if (screenWidth < toggleThreshold && !body.classList.contains('toggle-active')) {
    body.classList.add('toggle-active');
    if (menuToggle) {
      menuToggle.classList.add('is-active');
    }
    if (hamburgerIcon) {
      // Adicione aqui a lógica para esconder o span::before quando a tela diminuir
      hamburgerIcon.style.display = 'none';
    }
  } else if (screenWidth >= toggleThreshold && body.classList.contains('toggle-active')) {
    body.classList.remove('toggle-active');
    if (menuToggle) {
      menuToggle.classList.remove('is-active');
    }
    if (hamburgerIcon) {
      // Adicione aqui a lógica para mostrar o span::before quando a tela aumentar
      hamburgerIcon.style.display = 'block';
    }
  }
}

export function addResizeListener() {
  window.addEventListener('resize', handleResize);
}

export function removeResizeListener() {
  window.removeEventListener('resize', handleResize);
}