import { ComponentOption } from '../core/options/component-option';
import { PracticeService } from '../services/practice.service';
import { BaseComponent } from '../core/components/base-component';
import { RenderedComponent } from '../core/components/rendered-component';

export class PracticeComponent
  extends BaseComponent
  implements RenderedComponent {
  constructor(
    options: ComponentOption,
    private practiceService: PracticeService = new PracticeService()
  ) {
    super(options);
  }

  render(): void {
    const $practice: HTMLFormElement | null = document.querySelector(
      this.selector
    );
    if ($practice) {
      this.practiceService.firstFetch();
      this.practiceService.firstFetchWithAsyncAwait();
      this.practiceService.handleError();
      this.practiceService.queryParams();
      this.practiceService.httpMethodPost();
      this.practiceService.httpMethodGet();
      this.practiceService.httpMethodPut();
      this.practiceService.httpHeaders();
      this.practiceService.httpCookies();
    }
  }
}
