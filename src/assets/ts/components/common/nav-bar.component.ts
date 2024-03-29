import { BaseComponent } from '../../core/components/base-component';
import { ComponentOption } from '../../core/options/component-option';
import { RenderedComponent } from '../../core/components/rendered-component';

const DEFAULT_TARGET = 'navMenu';
const NAV_TOGGLE_CLASS = 'is-active';

export class NavBarComponent extends BaseComponent implements RenderedComponent {
  constructor(options: ComponentOption) {
    super(options);
  }

  private findNavBarElements(): Array<HTMLElement> {
    return Array.prototype.slice.call(document.querySelectorAll(this.selector), 0);
  }

  private handlerNavBarClick($nav: HTMLElement) {
    $nav.addEventListener('click', () => {
      // Get the target from the "data-target" attribute
      const target = $nav.dataset.target || DEFAULT_TARGET;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $nav.classList.toggle(NAV_TOGGLE_CLASS);
      $target?.classList.toggle(NAV_TOGGLE_CLASS);
    });
  }

  render(): void {
    // Get all "navbar-burger" elements
    const $navbarBurger = this.findNavBarElements();

    $navbarBurger?.forEach(this.handlerNavBarClick);
  }
}
