import { ComponentOption } from '../options/component-option';

export class BaseComponent {
  protected selector: string;

  constructor(options: ComponentOption) {
    this.selector = options.selector;
  }

  render(options: any): void {
    if (this.selector) {
      const $element: Element | null = document.querySelector(this.selector);
      $element!.innerHTML = options?.data;
    }
  }
}
