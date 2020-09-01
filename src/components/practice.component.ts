import { ComponentOption } from '../core/options/component-option';
import { PracticeService } from '../services/practice.service';

export class PracticeComponent {
  constructor(
    private options: ComponentOption,
    private practiceService: PracticeService = new PracticeService()
  ) {
    const $practice: HTMLFormElement | null = document.querySelector(
      this.options.selector
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
