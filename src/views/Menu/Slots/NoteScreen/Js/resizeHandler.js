
// resizeHandler.js

export function handleResize(component) {
  const sidebar = component.$refs.sidebar;
  const body = document.body;

  // Adicione a condição para desativar o toggle se a largura da tela for menor que 768px
  if (window.innerWidth < 768 && sidebar.classList.contains('is-active')) {
    sidebar.classList.remove('is-active');
    body.classList.remove('toggle-active');

    const icon = component.$refs.menuToggle.querySelector('.hamburger i');
    icon.classList.remove('fa-arrow-left');
    icon.classList.add('fa-arrow-right');
  }
}