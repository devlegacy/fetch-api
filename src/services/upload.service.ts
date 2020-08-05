class UploadService {
  constructor() {
    document
      .querySelector('#frm-upload')
      ?.addEventListener('submit', (e: Event) => {
        e.preventDefault();
        const target: HTMLFormElement = <HTMLFormElement>e.target;

        const body = new FormData(target);
        // const file = (<HTMLInputElement>document.querySelector('#file')).files;
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
      });
  }
}
