import { ComponentOption } from '../core/options/component-option';
import { BaseComponent } from '../core/components/base-component';
import { RenderedComponent } from '../core/components/rendered-component';

export class UploadComponent
  extends BaseComponent
  implements RenderedComponent {
  constructor(options: ComponentOption) {
    super(options);
  }

  private handlerUploadInputName($form: Element) {
    const $file = <HTMLInputElement>$form?.querySelector('#file');
    $file?.addEventListener('change', (e: Event) => {
      const files = (<HTMLInputElement>e.target).files; // $files.files
      if (files && files.length > 0) {
        const $filename = $form?.querySelector('.file-name');
        if ($filename) {
          $filename.textContent = files[0].name;
        }
      }
    });
  }

  private handlerUpload(e: Event) {
    e.preventDefault();
    const target: HTMLFormElement = <HTMLFormElement>e.target;
    const body = new FormData(target);
    // const file = (<HTMLInputElement>$form.querySelector('#file')).files;
    // console.log(file);
    // if (file) {
    //   body.append('file', file[0]);
    // }

    // TODO: This can be a service
    fetch(target.action, {
      method: 'POST',
      body,
    })
      .then((response: Response) => response.text())
      .then((data: string) => alert(data))
      .catch((err: Error) =>
        console.error('[Upload fetch error]:', err.message)
      );
    return false;
  }

  public render(): void {
    const $form = document.querySelector(this.selector);
    $form && this.handlerUploadInputName($form);
    $form?.addEventListener('submit', this.handlerUpload);
  }
}
