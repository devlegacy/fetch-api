export interface Post {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response: Response) => response.json()) // response: Uint8Array
  .then((posts: Array<Post>) => console.log(posts));

(async () => {
  const response: Response = await fetch(
    'https://jsonplaceholder.typicode.com/posts'
  );
  const body: Array<Post> = await response.json();
  console.log(body);
})();

// Handle error
fetch('https://jsonplaceholder.typicode.com/pos')
  .then((response: Response) => {
    console.log(`Status code: ${response.status}`);
    if (response.status >= 200 && response.status < 300) {
      return response.json();
    } else {
      throw new Error('Error in the fetch request');
    }
  }) // response: Uint8Array
  .then((posts: Array<Post>) => console.log(posts))
  .catch((err: Error) => console.error('[Fetch error]:', err.message));

// Query params
// Read more on: https://fetch.spec.whatwg.org/#fetch-api
const queryParams = {
  userId: 1,
  _limit: 3,
};
const url: URL = new URL('https://jsonplaceholder.typicode.com/posts');
Object.keys(queryParams).forEach((paramKey: string) => {
  url.searchParams.append(paramKey, queryParams[paramKey]);
});
console.log(url);
fetch(url.href)
  .then((response: Response) => response.json()) // response: Uint8Array
  .then((posts: Array<Post>) => console.log(posts));

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
})
  .then((response: Response) => response.json()) // response: Uint8Array
  .then((post: Post) => console.log(post));
