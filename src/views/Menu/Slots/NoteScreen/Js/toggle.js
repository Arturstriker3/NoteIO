
export function handleToggleClickWrapper(component) {
  const sidebar = component.$refs.sidebar;
  const body = document.body;
  const menuToggle = component.$refs.menuToggle;

  sidebar.classList.toggle('is-active');
  body.classList.toggle('toggle-active');

  const isSidebarActive = sidebar.classList.contains('is-active');
  const icon = menuToggle.querySelector('.hamburger i');

  // lógica para alternar
  if (isSidebarActive) {
    icon.classList.remove('fa-eye');
    icon.classList.add('fa-eye-slash');
  } else {
    icon.classList.remove('fa-eye-slash');
    icon.classList.add('fa-eye');
  }
}