
export default function(component) {
  const sidebar = component.$refs.sidebar;
  const body = document.body;

  if (window.innerWidth < 768 && sidebar.classList.contains('is-active')) {
    sidebar.classList.remove('is-active');
    body.classList.remove('toggle-active');

    const icon = component.$refs.menuToggle.querySelector('.hamburger i');
    icon.classList.remove('fa-eye-slash');  
    icon.classList.add('fa-eye');
  }
}