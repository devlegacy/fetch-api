export class BaseComponent {
  public selector: string;

  constructor(options: any) {
    this.selector = options.selector;
  }

  render(options: any): void {
    if (this.selector) {
      const $element: Element | null = document.querySelector(this.selector);
      if ($element) {
        $element.innerHTML = options.data;
      }
    }
  }
}
