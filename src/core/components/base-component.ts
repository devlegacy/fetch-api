import { ComponentOption } from '../options/component-option';

export class BaseComponent {
  protected selector: string;

  constructor(options: ComponentOption) {
    this.selector = options.selector;
  }

  render(options: any): void {
    if (this.selector) {
      const $element: Element | null = document.querySelector(this.selector);
      // if ($element) {
      // https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#optional-chaining
      // https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator
      // https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-9.html#parsing-differences-in-optional-chaining-and-non-null-assertions
      $element!.innerHTML = options?.data;
      // }
    }
  }
}
