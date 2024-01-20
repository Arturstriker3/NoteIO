const menu_toggle: HTMLElement | null = document.querySelector('.menu-toggle');
const sidebar: HTMLElement | null = document.querySelector('.sidebar');

if (menu_toggle && sidebar) {
  menu_toggle.addEventListener('click', () => {
    menu_toggle.classList.toggle('is-active');
    sidebar.classList.toggle('is-active');
  });
}
