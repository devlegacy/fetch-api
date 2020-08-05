// TODO: Refactor
// interface Post {
//   userId: number;
//   id?: number;
//   title: string;
//   body: string;
// }

// HTTP - Methods
// Read more on: https://developer.mozilla.org/es/docs/Web/HTTP/Methods

// POST
const post: Post = {
  userId: 1,
  title: 'foo',
  body: 'bar',
};
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify(post),
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    Accept: 'application/json; charset=UTF-8',
  },
})
  .then((response: Response) => response.json()) // response: Uint8Array
  .then((post: Post) => console.log(post));

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

fetch('http://localhost:8000/api/', { method: 'GET' })
  .then((response: Response) => response.json())
  .then((data) => console.log(data))
  .catch((err: Error) => console.error('[Cors fetch error]:', err.message));

fetch('http://localhost:8000/api/', { method: 'PUT' })
  .then((response: Response) => response.json())
  .then((data) => console.log(data))
  .catch((err: Error) => console.error('[Cors fetch error]:', err.message));

// Headers
fetch('http://localhost:8000/api/', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    Accept: 'application/json; charset=UTF-8',
    Authentication: 'Bearer: xxxxxxxyyyyxxxxyyy',
  },
})
  .then((response: Response) => response.json())
  .then((data) => console.log(data))
  .catch((err: Error) => console.error('[Cors fetch error]:', err.message));

// Cookies
document.cookie = 'username=Samuel';
fetch('http://localhost:8000/api/', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    Accept: 'application/json; charset=UTF-8',
    Authentication: 'Bearer: xxxxxxxyyyyxxxxyyy',
  },
  credentials: 'include',
  /**
   * omit: Never send or receive cookies.
   * same-origin: Send user credentials (cookies, basic http auth, etc..) if the URL is on the same origin as the calling script. This is the default value.
   * include: Always send user credentials (cookies, basic http auth, etc..), even for cross-origin calls.
   */
})
  .then((response: Response) => response.json())
  .then((data) => console.log(data))
  .catch((err: Error) => console.error('[Cors fetch error]:', err.message));
