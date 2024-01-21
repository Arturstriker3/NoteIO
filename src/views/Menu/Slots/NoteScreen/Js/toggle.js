// Salve este código em um arquivo, por exemplo, toggleHandler.js

export function handleToggleClickWrapper(component) {
  const sidebar = component.$refs.sidebar;
  const body = document.body;
  const menuToggle = component.$refs.menuToggle; // Adicionei a referência ao elemento do botão de alternância

  sidebar.classList.toggle('is-active');
  body.classList.toggle('toggle-active');

  // Verifica se a classe is-active está presente no sidebar e atualiza o ícone
  const isSidebarActive = sidebar.classList.contains('is-active');
  const icon = menuToggle.querySelector('.hamburger i');

  if (isSidebarActive) {
    icon.classList.remove('fa-arrow-right');
    icon.classList.add('fa-arrow-left');
  } else {
    icon.classList.remove('fa-arrow-left');
    icon.classList.add('fa-arrow-right');
  }
}
