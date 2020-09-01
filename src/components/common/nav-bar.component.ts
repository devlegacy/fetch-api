const DEFAULT_TARGET = 'navMenu';
const NAV_TOGGLE_CLASS = 'is-active';
export class NavBarComponent {
  constructor() {
    // Get all "navbar-burger" elements
    const $navbarBurger = Array.prototype.slice.call(
      document.querySelectorAll('.navbar-burger'),
      0
    );

    // Check if there are any navbar burgers
    // if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurger?.forEach(($nav: HTMLElement) => {
      $nav.addEventListener('click', () => {
        // Get the target from the "data-target" attribute
        const target = $nav.dataset.target || DEFAULT_TARGET;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $nav.classList.toggle(NAV_TOGGLE_CLASS);
        $target?.classList.toggle(NAV_TOGGLE_CLASS);
      });
    });
    // }
  }
}
