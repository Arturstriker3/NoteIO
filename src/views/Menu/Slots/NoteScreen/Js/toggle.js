
// Adicione uma nova função para lidar com a alteração de background-color
export function handleBodyBackgroundColor() {
  const body = document.body;
  body.classList.toggle('toggle-active');
}

export function handleToggleClickWrapper(componentInstance) {
  const menuToggle = componentInstance.$refs.menuToggle;
  const sidebar = componentInstance.$refs.sidebar;
  handleToggleClick(menuToggle, sidebar);
  handleBodyBackgroundColor();
}

export function handleToggleClick(menuToggle, sidebar) {
  menuToggle.classList.toggle('is-active');
  sidebar.classList.toggle('is-active');
}
