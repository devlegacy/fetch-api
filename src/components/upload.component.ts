import { ComponentOption } from '../core/options/component-option';

export class UploadComponent {
  constructor(private options: ComponentOption) {
    const $form: HTMLFormElement | null = document.querySelector(
      this.options.selector
    );

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

    $form?.addEventListener('submit', (e: Event) => {
      e.preventDefault();
      const target: HTMLFormElement = <HTMLFormElement>e.target;

      const body = new FormData(target);
      // const file = (<HTMLInputElement>$form.querySelector('#file')).files;
      // console.log(file);
      // if (file) {
      //   body.append('file', file[0]);
      // }

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
    });
  }
}
